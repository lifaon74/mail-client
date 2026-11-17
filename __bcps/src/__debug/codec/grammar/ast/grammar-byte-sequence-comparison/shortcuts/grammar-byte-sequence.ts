import { GrammarByteSequenceComparison } from '../grammar-byte-sequence-comparison';
import { eq } from '../comparisons/equals/grammar-byte-comparison-equals.shortcut';
import { IGrammarByteSequenceComparisonAstNode } from '../grammar-byte-sequence-comparison-ast-node.type';
import { IGrammarByteComparisonExpressionAstNode } from '../comparisons/grammar-byte-comparison-expression-ast-node.type';

export function GrammarByteSequence(
  bytes: ArrayLike<number> | Iterable<number>,
): IGrammarByteSequenceComparisonAstNode {
  return GrammarByteSequenceComparison(
    Array.from(bytes, (value: number): IGrammarByteComparisonExpressionAstNode => {
      return eq(value);
    }),
  );
}

