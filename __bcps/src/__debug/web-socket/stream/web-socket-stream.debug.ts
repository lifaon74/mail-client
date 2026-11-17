import { IUnsubscribe, IWebSocketInValue, IWebSocketOutValue, mergeUnsubscribeFunctions } from '@lirx/core';
import {
  createAbortablePromise,
  IAbortablePromiseOnAbortFunction,
  IAbortablePromiseOptions,
  IPromise,
  IPromiseInitRejectFunction,
  IPromiseInitResolveFunction,
  sleep,
} from '@lirx/promise';
import { createEventListener, isObject, readableStreamToAsyncIterable } from '@lirx/utils';
import { multiAsyncDisposableContext } from '../../disposable/disposable.debug';

/*------------*/

/*------------*/

export function createWebSocketNotInAnOpeningStateError(): Error {
  return new Error(`WebSocket is no in a CONNECTING or OPEN state`);
}

export function createWebSocketError(): Error {
  return new Error(`WebSocket Error`);
}

/*------------*/

// https://streams.spec.whatwg.org/#writablestreamdefaultcontroller
// https://developer.chrome.com/en/articles/websocketstream/
// https://github.com/ricea/websocketstream-explainer

export type IWebSocketStreamReadable = ReadableStream<IWebSocketInValue>;
export type IWebSocketStreamWritable = WritableStream<IWebSocketOutValue>;

export interface IWebSocketCloseOptions {
  code?: number;
  reason?: string;
}

export interface IWebSocketCloseFunction {
  (
    options?: IWebSocketCloseOptions,
  ): void;
}

export interface IWebSocketUntilClosedResult {
  readonly code: number;
  readonly reason: string;
  readonly wasClean: boolean;
}

export interface IWebSocketUntilClosedFunction {
  (
    options?: IAbortablePromiseOptions,
  ): IPromise<IWebSocketUntilClosedResult>;
}

export interface IWebSocketStream {
  readable: IWebSocketStreamReadable;
  writable: IWebSocketStreamWritable;
  close: IWebSocketCloseFunction;
  untilClosed: IWebSocketUntilClosedFunction;
}


export type IUnknownWebSocketReason =
  | unknown
  | IWebSocketCloseOptions
;

export function getReasonCodeForWebSocket(
  reason?: IUnknownWebSocketReason,
): number {
  if (typeof reason === 'number') {
    return reason;
  } else  if (
    isObject(reason)
    && (typeof (reason as any).code === 'number')
  ) {
    return (reason as any).code;
  } else {
    return 4000;
  }
}

export function getReasonForWebSocket(
  reason?: IUnknownWebSocketReason,
): string {
  if (typeof reason === 'string') {
    return reason;
  } else  if (
    isObject(reason)
    && (typeof (reason as any).reason === 'number')
  ) {
    return (reason as any).reason;
  } else {
    return 'Unknown';
  }
}
export function closeWebSocketWithUnknownReason(
  socket: WebSocket,
  reason?: IUnknownWebSocketReason,
): void {
  socket.close(
    getReasonCodeForWebSocket(reason),
    getReasonForWebSocket(reason),
  );
}




export function createReadableStreamFromWebSocket(
  socket: WebSocket,
): IWebSocketStreamReadable {
  let end: IUnsubscribe;
  return new ReadableStream<IWebSocketInValue>({
    start(
      controller: ReadableStreamDefaultController<IWebSocketInValue>,
    ): void {
      if (
        (socket.readyState === socket.CONNECTING)
        || (socket.readyState === socket.OPEN)
      ) {
        end = mergeUnsubscribeFunctions([
          createEventListener<'message', MessageEvent<IWebSocketInValue>>(socket, 'message', (event: MessageEvent<IWebSocketInValue>): void => {
            controller.enqueue(event.data);
          }),
          createEventListener<'close', CloseEvent>(socket, 'close', (): void => {
            end();
            controller.close();
          }),
          createEventListener<'error', Event>(socket, 'error', (): void => {
            end();
            controller.error(createWebSocketError());
          }),
        ]);
      } else {
        throw createWebSocketNotInAnOpeningStateError();
      }
    },
    cancel(
      reason?: IUnknownWebSocketReason,
    ): void {
      closeWebSocketWithUnknownReason(socket, reason);
      // end();
    },
  });
}

export function createWritableStreamFromWebSocket(
  socket: WebSocket,
): IWebSocketStreamWritable {
  let end: IUnsubscribe;
  return new WritableStream<IWebSocketOutValue>({
    start(
      controller: WritableStreamDefaultController,
    ): void {
      if (
        (socket.readyState === socket.CONNECTING)
        || (socket.readyState === socket.OPEN)
      ) {
        // TODO support abort ?
        end = mergeUnsubscribeFunctions([
          createEventListener<'error', Event>(socket, 'error', (): void => {
            end();
            controller.error(createWebSocketError());
          }),
        ]);
      } else {
        throw createWebSocketNotInAnOpeningStateError();
      }
    },
    async write(
      chunk: IWebSocketOutValue,
      controller: WritableStreamDefaultController,
    ): Promise<void> {
      while (socket.bufferedAmount !== 0) {
        await sleep(10, {
          signal: controller.signal,
        });
      }
      if (!controller.signal.aborted) {
        socket.send(chunk);
      }
    },
    close(): void {
      socket.close();
      // end();
    },
    abort(
      reason?: IUnknownWebSocketReason,
    ): void {
      closeWebSocketWithUnknownReason(socket, reason);
      // end();
    },
  });
}

export function creatWebSocketStreamCloseFunctionFromWebSocket(
  socket: WebSocket,
): IWebSocketCloseFunction {
  return (
    {
      code,
      reason,
    }: IWebSocketCloseOptions = {},
  ): void => {
    socket.close(code, reason);
  };
}

const UNKNOWN_CLOSED_RESULT = Object.freeze({
  code: -1,
  reason: 'Unknown close reason',
  wasClean: true,
});

export function creatWebSocketStreamUntilClosedFunctionFromWebSocket(
  socket: WebSocket,
): IWebSocketUntilClosedFunction {
  let result: IWebSocketUntilClosedResult = UNKNOWN_CLOSED_RESULT;
  return (
    options?: IAbortablePromiseOptions,
  ): IPromise<IWebSocketUntilClosedResult> => {
    return createAbortablePromise<IWebSocketUntilClosedResult>((
      resolve: IPromiseInitResolveFunction<IWebSocketUntilClosedResult>,
      reject: IPromiseInitRejectFunction,
      abort$: IAbortablePromiseOnAbortFunction,
    ): void => {
      if (socket.readyState === socket.CLOSED) {
        resolve(result);
      } else {
        const end: IUnsubscribe = mergeUnsubscribeFunctions([
          createEventListener<'close', CloseEvent>(socket, 'close', (event: CloseEvent): void => {
            end();
            result = Object.freeze({
              code: event.code,
              reason: event.reason,
              wasClean: event.wasClean,
            });
            resolve(result);
          }),
          createEventListener<'error', Event>(socket, 'error', (): void => {
            end();
            reject(createWebSocketError());
          }),
          abort$(() => {
            end();
          }),
        ]);
      }
    }, options);
  };
}

export function createWebSocketStreamFromWebSocket(
  socket: WebSocket,
): IWebSocketStream {
  const readable = createReadableStreamFromWebSocket(socket);
  const writable = createWritableStreamFromWebSocket(socket);
  const close = creatWebSocketStreamCloseFunctionFromWebSocket(socket);
  const untilClosed = creatWebSocketStreamUntilClosedFunctionFromWebSocket(socket);

  return {
    readable,
    writable,
    close,
    untilClosed,
  };
}

export function awaitWebSocketOpened(
  socket: WebSocket,
  options?: IAbortablePromiseOptions,
): IPromise<void> {
  return createAbortablePromise<void>((
    resolve: IPromiseInitResolveFunction<void>,
    reject: IPromiseInitRejectFunction,
    abort$: IAbortablePromiseOnAbortFunction,
  ): void => {
    if (socket.readyState === socket.OPEN) {
      resolve();
    } else if (socket.readyState === socket.CONNECTING) {
      const end: IUnsubscribe = mergeUnsubscribeFunctions([
        createEventListener<'open', Event>(socket, 'open', (): void => {
          end();
          resolve();
        }),
        createEventListener<'close', CloseEvent>(socket, 'close', (): void => {
          end();
          reject(createWebSocketNotInAnOpeningStateError());
        }),
        createEventListener<'error', Event>(socket, 'error', (): void => {
          end();
          reject(createWebSocketError());
        }),
        abort$(() => {
          end();
        }),
      ]);
    } else {
      throw createWebSocketNotInAnOpeningStateError();
    }
  }, options);
}

export interface IOpenWebSocketStreamOptions extends IAbortablePromiseOptions {
  binaryType?: BinaryType;
  protocols?: string | string[];
}

function openWebSocketStream(
  url: string | URL,
  {
    binaryType,
    protocols,
    ...options
  }: IOpenWebSocketStreamOptions = {},
): IPromise<IWebSocketStream> {
  const socket = new WebSocket(url, protocols);

  if (binaryType !== void 0) {
    socket.binaryType = binaryType;
  }

  return awaitWebSocketOpened(
    socket,
    options,
  )
    .then((): IWebSocketStream => {
      return createWebSocketStreamFromWebSocket(socket);
    });
}


/*---------*/

export async function webSocketStreamDebug(): Promise<void> {
  // const url = 'wss://socketsbay.com/wss/v2/1/demo/';
  const url = 'wss://ws.postman-echo.com/raw';

  const wss = await openWebSocketStream(url);

  const read = async () => {
    // await asyncDisposableContext(
    //   () => wss.readable.getReader(),
    //   async (reader: ReadableStreamDefaultReader<IWebSocketInValue>) => {
    //     let result: ReadableStreamReadResult<IWebSocketInValue>;
    //     while (!(result = await reader.read()).done) {
    //       console.log(result.value);
    //     }
    //     console.log('closed');
    //   },
    // )
    for await (const chunk of readableStreamToAsyncIterable(wss.readable)) {
      console.log(chunk);
    }
    console.log('read done');
  };

  const untilClosed = async () => {
    await wss.untilClosed();
    console.log('closed');
  };

  read();
  untilClosed();

  await multiAsyncDisposableContext<[WritableStream<IWebSocketOutValue>, WritableStreamDefaultWriter<IWebSocketOutValue>], void>(
    [
      () => wss.writable,
      () => wss.writable.getWriter(),
    ],
    async ([, writer]) => {
      await writer.write('abc');
      await sleep(1000);
      await writer.write('def');
      await sleep(2000);
    }
  )


  // await writer.close();
  // await wss.close();
}
