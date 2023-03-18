import { readableStreamToAsyncIterable } from '@lirx/utils';
import { u8 } from '@lifaon/number-types';
import { writableStreamDisposableContext } from '../disposable/disposable.debug';

/*---------*/

export interface IDecoder<GValue> {
  readonly readable: ReadableStream<GValue>;
  readonly writable: WritableStream<Uint8Array>;
}

export interface IEncoder<GValue> {
  readonly readable: ReadableStream<Uint8Array>;
  readonly writable: WritableStream<GValue>;
}

/*---------*/

export type IIteratorEncoder<GValue> = Required<Iterator<Uint8Array, void, GValue>>;

export type IIteratorByteEncoder<GValue> = Required<Iterator<u8, void, GValue>>;

/*---------*/


function encodeText(
  input: string
): Uint8Array {
  return new TextEncoder().encode(input);
}

function * encodeTextAsBytes(
  input: string
): Generator<u8> {
  yield * encodeText(input) as any;
}

// function *encodeText(
//   input: string
// ): Generator<Uint8Array> {
//   return new TextEncoder().encode(input);
// }


function *iteratorTextEncoder(): IIteratorEncoder<string> {
  let out: Uint8Array = new Uint8Array(0);
  while (true) {
    out = encodeText(yield out);
  }
}

/*---------*/


async function debugTextEncoderStream(): Promise<void> {
  const encoder = new TextEncoderStream();

  const write = () => {
    return writableStreamDisposableContext(
      encoder.writable,
      async (writer: WritableStreamDefaultWriter<string>) => {
        await writer.write('abc');
      },
    );
  };

  const read = async () => {
    for await (const data of readableStreamToAsyncIterable(encoder.readable)) {
      console.log(data);
    }
  };

  await Promise.all([read(), write()]);
}

async function debugTextDecoderStream(): Promise<void> {
  const decoder = new TextDecoderStream();

  const write = () => {
    return writableStreamDisposableContext(
      decoder.writable,
      async (writer: WritableStreamDefaultWriter<Uint8Array>) => {
        await writer.write(new Uint8Array([100, 101, 102]));
      },
    );
  };

  const read = async () => {
    for await (const data of readableStreamToAsyncIterable(decoder.readable)) {
      console.log(data);
    }
  };

  await Promise.all([read(), write()]);
}

async function debugTextEncoderStream2(): Promise<void> {
  const encoder = new TextEncoderStream();

  const read = async () => {
    const readable = new ReadableStream({
      type: 'bytes',
      start: (controller) => {
        let i = 0;
        setInterval(() => {
          debugger;
          i++;
          if (controller.byobRequest) {
            new Uint8Array(controller.byobRequest.view!.buffer)[0] = i;
            controller.byobRequest.respond(1);
          } else {
            controller.enqueue(new Uint8Array([i]));
          }
        }, 1000)
      },
    });
    const reader = readable.getReader({
      mode: 'byob',
    });

    while(true) {
      console.log(await reader.read(new Uint8Array(2)));
    }

    // for await (const data of readableStreamToAsyncIterable(encoder.readable)) {
    //   console.log(data);
    // }
  };

  await read();
}


export async function debugTextCodecStream(): Promise<void> {
  await debugTextEncoderStream2();
  // await debugTextEncoderStream();
  // await debugTextDecoderStream();
}

/*---------*/

async function debugTextEncoderIterator(): Promise<void> {
  const encoder = iteratorTextEncoder();
  encoder.next();
  console.log(encoder.next('abc'));
  encoder.return();
}


/*---------*/

export async function codecDebug(): Promise<void> {
  // await debugTextCodecStream();
  // await debugTextEncoderIterator();
}
