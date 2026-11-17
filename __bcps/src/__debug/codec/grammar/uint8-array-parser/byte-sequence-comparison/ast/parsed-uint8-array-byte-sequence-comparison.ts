import {
  IParsedUint8ArrayByteSequenceComparisonAstNode,
  ParsedUint8ArrayByteSequenceComparisonAstNodeType,
} from './parsed-uint8-array-byte-sequence-comparison-ast-node.type';

export function ParsedUint8ArrayByteSequenceComparison(
  start: number,
  end: number,
): IParsedUint8ArrayByteSequenceComparisonAstNode {
  return {
    __type__: ParsedUint8ArrayByteSequenceComparisonAstNodeType,
    start,
    end,
  };
}
