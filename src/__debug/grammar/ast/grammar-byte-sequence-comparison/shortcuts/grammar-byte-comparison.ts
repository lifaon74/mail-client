import { IGrammarByteSequenceComparisonAstNode } from '../grammar-byte-sequence-comparison-ast-node.type';
import { IGrammarByteComparisonExpressionAstNode } from '../comparisons/grammar-byte-comparison-expression-ast-node.type';
import { GrammarByteSequenceComparison } from '../grammar-byte-sequence-comparison';

export function GrammarByteComparison(
  expression: IGrammarByteComparisonExpressionAstNode,
): IGrammarByteSequenceComparisonAstNode {
  return GrammarByteSequenceComparison(
    [expression],
  );
}

