import { IParsedUint8ArrayByteSequenceComparisonAstNode } from './parsed-uint8-array-byte-sequence-comparison-ast-node.type';

export function printGrammarByteSequenceComparison(
  buffer: Uint8Array,
  node: IParsedUint8ArrayByteSequenceComparisonAstNode,
): void {
  console.log(new TextDecoder().decode(buffer.subarray(node.start, node.end)));
}
