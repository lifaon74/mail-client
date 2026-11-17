import { IGrammarByteComparisonExpressionAstNode } from './comparisons/grammar-byte-comparison-expression-ast-node.type';
import {
  IGrammarByteSequenceComparisonAstNode,
  GrammarByteSequenceComparisonAstNodeType,
} from './grammar-byte-sequence-comparison-ast-node.type';

export function GrammarByteSequenceComparison(
  expressions: readonly IGrammarByteComparisonExpressionAstNode[]
): IGrammarByteSequenceComparisonAstNode {
  return {
    __type__: GrammarByteSequenceComparisonAstNodeType,
    expressions,
  };
}

/*
GrammarByteSequenceComparison(
  or(eq(1), neq(1), gt(1), lt(1), lte(1), gte(1), and(4, 5), not(5))

  range(1, 2) => and(gte(1), lte(2))
)
 */
