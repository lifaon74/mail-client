import { u32 } from '@lifaon/number-types';
import { IBufferEncoder } from './buffer-encoder.type';
import { IStaticBufferEncoder } from './static-buffer-encoder';

export function createStaticBufferEncoder<GValue>(
  encoder: IBufferEncoder<GValue>,
  value: GValue,
): IStaticBufferEncoder {
  return (
    buffer: Uint8Array,
    index: u32,
  ): u32 => {
    return encoder(
      value,
      buffer,
      index,
    );
  };
}

// export interface IStaticBufferEncoder {
//   (
//     buffer: Uint8Array,
//     index: u32,
//   ): u32;
// }
