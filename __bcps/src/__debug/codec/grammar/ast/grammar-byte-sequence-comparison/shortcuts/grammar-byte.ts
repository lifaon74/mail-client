import { IGrammarByteSequenceComparisonAstNode } from '../grammar-byte-sequence-comparison-ast-node.type';
import { eq } from '../comparisons/equals/grammar-byte-comparison-equals.shortcut';
import { GrammarByteComparison } from './grammar-byte-comparison';

export function GrammarByte(
  value: number,
): IGrammarByteSequenceComparisonAstNode {
  return GrammarByteComparison(
    eq(value),
  );
}
