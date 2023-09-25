import { sliceBuffer } from './sliceBuffer';
import { DecodeError } from './decode-error';
import { parseSingleHexChar } from './parse-single-hex-char';

export function parseHexNumber(
  buffer: Uint8Array,
): number {
  let hex: number = 0;

  for (let i: number = 0, l: number = buffer.length; i < l; i++) {
    const v: number = parseSingleHexChar(buffer[i]);
    if (v === -1) {
      throw new DecodeError(
        `Not an hex number.`,
        buffer,
        0,
        buffer.length,
      );
    } else {
      hex = (hex << 4) | v;
    }
  }

  return hex;
}
