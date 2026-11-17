import { IUint8ArrayParserResult } from '../../types/uint8-array-parser.type';
import { ParsedUint8ArrayByteSequenceComparison } from '../ast/parsed-uint8-array-byte-sequence-comparison';
import { ParsedUint8ArrayErrorByteSequenceComparison } from '../ast/error/parsed-uint8-array-error-byte-sequence-comparison';

export interface IByteSequenceComparisonUint8ArrayParserCallback {
  (
    buffer: Uint8Array,
    start: number,
    end: number,
  ): boolean;
}

export function byteSequenceComparisonUint8ArrayParser(
  buffer: Uint8Array,
  start: number,
  end: number,
  callback: IByteSequenceComparisonUint8ArrayParserCallback,
): IUint8ArrayParserResult {
  if ((buffer.length >= end) && callback(buffer, start, end)) {
    return ParsedUint8ArrayByteSequenceComparison(
      start,
      end,
    );
  } else {
    return ParsedUint8ArrayErrorByteSequenceComparison(
      start,
      end,
    );
  }
}
