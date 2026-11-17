import { isObject } from '@lirx/utils';

/** DISPOSABLE **/

/* SYNC */

export interface IAcquireFunction<GDisposable> {
  (): GDisposable;
}

export interface IReleaseFunction<GDisposable> {
  (
    disposable: GDisposable,
  ): void;
}

export interface IContextFunction<GDisposable, GReturn> {
  (
    disposable: GDisposable,
  ): GReturn;
}

export function disposableContext<GDisposable, GReturn>(
  acquire: IAcquireFunction<GDisposable>,
  context: IContextFunction<GDisposable, GReturn>,
  release: IReleaseFunction<GDisposable> = autoRelease,
): GReturn {
  const disposable: GDisposable = acquire();
  try {
    return context(disposable);
  } finally {
    release(disposable);
  }
}

export function autoRelease<GDisposable>(
  disposable: GDisposable,
): void {
  if (
    ('dispose' in Symbol)
    && isObject(disposable)
    && (typeof disposable[(Symbol as any).dispose] === 'function')
  ) {
    return disposable[(Symbol as any).dispose]();
  } else if (disposable instanceof ReadableStreamDefaultReader) {
    return disposable.releaseLock();
  } else if (disposable instanceof WritableStreamDefaultWriter) {
    return disposable.releaseLock();
  } else {
    throw new Error(`Unable to infer the @@dispose of the disposable`);
  }
}

/* ASYNC */

export interface IAsyncAcquireFunction<GDisposable> {
  (): GDisposable | Promise<GDisposable>;
}

export interface IAsyncReleaseFunction<GDisposable> {
  (
    disposable: GDisposable,
  ): void | Promise<void>;
}

export interface IAsyncContextFunction<GDisposable, GReturn> {
  (
    disposable: GDisposable,
  ): GReturn | Promise<GReturn>;
}

export function asyncDisposableContext<GDisposable, GReturn>(
  acquire: IAsyncAcquireFunction<GDisposable>,
  context: IAsyncContextFunction<GDisposable, GReturn>,
  release: IAsyncReleaseFunction<GDisposable> = autoAsyncRelease,
): Promise<GReturn> {
  return new Promise<GDisposable>((resolve) => resolve(acquire()))
    .then((disposable: GDisposable): Promise<GReturn> => {
      return new Promise<GReturn>((resolve) => resolve(context(disposable)))
        .finally(() => {
          return release(disposable);
        });
    });
}

export function autoAsyncRelease<GDisposable>(
  disposable: GDisposable,
): void | Promise<void> {
  if (
    ('asyncDispose' in Symbol)
    && isObject(disposable)
    && (typeof disposable[(Symbol as any).asyncDispose] === 'function')
  ) {
    return disposable[(Symbol as any).asyncDispose]();
  } else if (disposable instanceof ReadableStream) {
    return disposable.cancel();
  } else if (disposable instanceof WritableStream) {
    return disposable.close();
  } else if (disposable instanceof ReadableStreamDefaultReader) {
    return disposable.releaseLock(); // or .cancel() ?
  } else if (disposable instanceof WritableStreamDefaultWriter) {
    return disposable.releaseLock();
  } else {
    throw new Error(`Unable to infer the @@asyncDispose of the disposable`);
  }
}

/*------*/

export type IMultiAsyncAcquireFunctions<GDisposables extends readonly unknown[]> = {
  [GKey in keyof GDisposables]: IAsyncAcquireFunction<GDisposables[GKey]>;
};

export type IMultiAsyncReleaseFunctions<GDisposables extends readonly unknown[]> = {
  [GKey in keyof GDisposables]: IAsyncReleaseFunction<GDisposables[GKey]>;
};

export function multiAsyncDisposableContext<GDisposables extends readonly unknown[], GReturn>(
  acquire: IMultiAsyncAcquireFunctions<GDisposables>,
  context: IAsyncContextFunction<GDisposables, GReturn>,
  release: IMultiAsyncReleaseFunctions<GDisposables> = Array.from({ length: acquire.length }, () => autoAsyncRelease) as IMultiAsyncReleaseFunctions<GDisposables>,
): Promise<GReturn> {
  if (acquire.length === release.length) {
    const run = (
      disposables: unknown[],
    ): Promise<GReturn> => {
      const index: number = disposables.length;
      if (index === acquire.length) {
        return new Promise<GReturn>((resolve) => resolve(context(disposables as unknown as GDisposables)));
      } else {
        return asyncDisposableContext<unknown, GReturn>(
          acquire[index],
          (
            disposable: unknown,
          ): Promise<GReturn> => {
            return run(
              [
                ...disposables,
                disposable,
              ],
            );
          },
          release[index],
        );
      }
    };

    return run([]);
  } else {
    return Promise.reject(new Error(`release must have the same length as acquire`));
  }
}

/*-------------------*/

export function writableStreamDisposableContext<GValue, GReturn>(
  writable: WritableStream<GValue>,
  context: IAsyncContextFunction<WritableStreamDefaultWriter<GValue>, GReturn>,
): Promise<GReturn> {
  return multiAsyncDisposableContext<[WritableStream<GValue>, WritableStreamDefaultWriter<GValue>], GReturn>(
    [
      () => writable,
      () => writable.getWriter(),
    ],
    ([, writer]): GReturn | Promise<GReturn> => {
      return context(writer);
    },
  );
}

// export interface IReadableStreamGetReaderCallback<GValue, GReturn> {
//   (
//     reader: ReadableStreamDefaultReader<GValue>,
//   ): GReturn;
// }
//
// export function readableStreamGetReader<GValue, GReturn>(
//   readableStream: ReadableStream<GValue>,
//   callback: IReadableStreamGetReaderCallback<GValue, GReturn>,
// ): IPromise<IPromiseValue<GReturn>> {
//   try {
//     const reader: ReadableStreamDefaultReader<GValue> = readableStream.getReader();
//     return promiseResolve<GReturn>(callback(reader))
//       .finally((): void => {
//         reader.releaseLock();
//       });
//   } catch (error: unknown) {
//     return promiseReject<GReturn>(error);
//   }
// }

