import { IDefaultInNotificationsUnion, IObservable, singleN, fromWritableStream, toAsyncIterable } from '@lirx/core';
import { readableStreamToAsyncIterable } from '../../functions/stream/readable-stream-to-async-iterable';

/*---------*/

type IByteEncoder = AsyncIterator<Uint8Array>;

// type IByteDecoder = AsyncIterator<Uint8Array>;

interface ICreateEncoder<GInput> {
  (
    input: GInput,
  ): IByteEncoder;
}

/*---------*/

/*---------*/

async function* createTextEncoder(
  input: string,
): AsyncGenerator<Uint8Array> {
  yield new TextEncoder().encode(input);
}


//
// async function* createTextDecoder(
//   data$: IObservable<IDefaultInNotificationsUnion<Uint8Array>>,
// ): AsyncGenerator<string> {
//   const stream: TextDecoderStream = new TextDecoderStream();
//
//   data$(fromWritableStream(stream.writable));
//
//   const reader: ReadableStreamDefaultReader<string> = stream.readable.getReader();
//
//   let result: ReadableStreamReadResult<string>;
//   while (!(result = await reader.read()).done) {
//     yield result.value;
//   }
//
//   // for await (const data of toAsyncIterable(data$)) {
//   //   yield new TextDecoder().decode(data);
//   // }
// }

function createTextDecoder(
  data$: IObservable<IDefaultInNotificationsUnion<Uint8Array>>,
): AsyncGenerator<string> {
  const stream: TextDecoderStream = new TextDecoderStream();

  data$(fromWritableStream(stream.writable));

  return readableStreamToAsyncIterable(stream.readable);
}

/*---------*/

/*

CODEC:
X Data IN
Y Data OUT
backpressure

encoder.read();

 */

/*---------*/

export async function codecDebug(): Promise<void> {
  const encoder = createTextEncoder('abc');
  for await (const data of encoder) {
    console.log(data);
  }

  const decoder = createTextDecoder(singleN(new Uint8Array([100, 101, 102])));
  for await (const data of decoder) {
    console.log(data);
  }

  // while (encoder.encoding()) {
  //   console.log(encoder.read());
  // }

  // while (!decoder.done()) {
  //   encoder.write(8);
  // }
  // console.log(decoder.get());

}
