import { IUint8ArrayParserResult } from '../../types/uint8-array-parser.type';
import { ParsedUint8ArrayErrorEnd } from '../ast/error/parsed-uint8-array-error-end';
import { ParsedUint8ArrayEnd } from '../ast/parsed-uint8-array-end';

export function endUint8ArrayParser(
  buffer: Uint8Array,
  index: number,
): IUint8ArrayParserResult {
  if (index === buffer.length) {
    return ParsedUint8ArrayEnd(
      index,
      index,
    );
  } else {
    return ParsedUint8ArrayErrorEnd(
      index,
      index,
    );
  }
}
