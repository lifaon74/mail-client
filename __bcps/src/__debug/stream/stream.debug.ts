import { IDefaultNotificationsUnion, ofN } from '@lirx/core';
import { readableStreamToAsyncIterable } from '@lirx/utils';
import { toReadableStream } from './to-readable-stream';
import { toWritableStream } from './to-writable-stream';

/*---------*/

/*---------*/

export async function streamDebug(): Promise<void> {
  const readableStream = toReadableStream(ofN(0, 1, 2));

  const writableStream = toWritableStream((notification: IDefaultNotificationsUnion<number>) => {
    console.log(notification);
  });

  const writer = writableStream.getWriter();

  for await (const value of readableStreamToAsyncIterable(readableStream)) {
    console.log(value);
    await writer.write(value);
  }

  await writer.close();
  writer.releaseLock();
}
