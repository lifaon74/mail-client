import {
  IParsedUint8ArrayErrorByteSequenceComparisonAstNode,
  ParsedUint8ArrayErrorByteSequenceComparisonAstNodeType,
} from './parsed-uint8-array-error-byte-sequence-comparison-ast-node.type';
import { ParsedUint8ArrayErrorAstNodeType } from '../../../__shared__/ast/error/parsed-uint8-array-error-ast-node.type';

export function ParsedUint8ArrayErrorByteSequenceComparison(
  start: number,
  end: number,
): IParsedUint8ArrayErrorByteSequenceComparisonAstNode {
  return {
    __type__: ParsedUint8ArrayErrorAstNodeType,
    __subtype__: ParsedUint8ArrayErrorByteSequenceComparisonAstNodeType,
    start,
    end,
  };
}
