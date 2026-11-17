import {
  IGrammarByteSequenceComparisonAstNode,
} from '../../grammar-byte-sequence-comparison/grammar-byte-sequence-comparison-ast-node.type';
import { optimizeGrammarByteComparisonExpression } from './comparisons/optimize-grammar-byte-comparison-expression';
import {
  IGrammarByteComparisonExpressionAstNode,
} from '../../grammar-byte-sequence-comparison/comparisons/grammar-byte-comparison-expression-ast-node.type';
import { GrammarByteSequenceComparison } from '../../grammar-byte-sequence-comparison/grammar-byte-sequence-comparison';
import { IGrammarRulesMap } from '../types/grammar-rules-map.type';

export function optimizeGrammarByteSequenceComparison(
  node: IGrammarByteSequenceComparisonAstNode,
): IGrammarByteSequenceComparisonAstNode {
  const expressions: readonly IGrammarByteComparisonExpressionAstNode[] = node.expressions;
  const length: number = expressions.length;
  const optimizedExpressions: IGrammarByteComparisonExpressionAstNode[] = new Array<IGrammarByteComparisonExpressionAstNode>(length);

  let optimized: boolean = false;

  for (let i: number = 0; i < length; i++) {
    const expression: IGrammarByteComparisonExpressionAstNode = expressions[i];
    const optimizedExpression: IGrammarByteComparisonExpressionAstNode = optimizeGrammarByteComparisonExpression(
      expression,
    );
    if (optimizedExpression !== expression) {
      optimized = true;
    }
    optimizedExpressions.push(optimizedExpression);
  }

  return optimized
    ? GrammarByteSequenceComparison(
      optimizedExpressions,
    )
    : node;

}
