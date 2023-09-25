import { IGrammarAlternativeAstNode } from '../grammar-alternative/grammar-alternative-ast-node.type';
import { optimizeGrammarExpression } from './optimize-grammar-expression';
import { IGrammarExpressionAstNode } from '../grammar-expression/grammar-expression-ast-node.type';
import { GrammarEmpty } from '../grammar-byte-sequence-comparison/shortcuts/grammar-empty';
import {
  IGrammarByteSequenceComparisonAstNode,
  isGrammarByteSequenceComparisonAstNode,
} from '../grammar-byte-sequence-comparison/grammar-byte-sequence-comparison-ast-node.type';
import {
  IGrammarByteComparisonExpressionAstNode,
} from '../grammar-byte-sequence-comparison/comparisons/grammar-byte-comparison-expression-ast-node.type';
import { GrammarByteComparison } from '../grammar-byte-sequence-comparison/shortcuts/grammar-byte-comparison';
import { or } from '../grammar-byte-sequence-comparison/comparisons/or/grammar-byte-comparison-or.shortcut';
import { optimizeGrammarByteComparisonOr } from './grammar-byte-sequence-comparison/comparisons/optimize-grammar-byte-comparison-or';
import { IGrammarRulesMap } from './types/grammar-rules-map.type';
import { GrammarAlternative } from '../grammar-alternative/grammar-alternative';

export function optimizeGrammarAlternative(
  node: IGrammarAlternativeAstNode,
  rules: IGrammarRulesMap,
): IGrammarExpressionAstNode {
  const optimizedExpressions: IGrammarExpressionAstNode[] = [];
  let continuousByteSequenceComparisons: IGrammarByteSequenceComparisonAstNode[] = [];

  const terminateContinuousByteSequenceComparisons = (): void => {
    if (continuousByteSequenceComparisons.length > 0) {
      if (continuousByteSequenceComparisons.length === 1) {
        optimizedExpressions.push(continuousByteSequenceComparisons[0]);
      } else {
        optimizedExpressions.push(
          GrammarByteComparison(
            optimizeGrammarByteComparisonOr(
              or(
                ...continuousByteSequenceComparisons.flatMap(({ expressions }): readonly IGrammarByteComparisonExpressionAstNode[] => {
                  return expressions;
                }),
              ),
            ),
          ),
        );
      }
      continuousByteSequenceComparisons = [];
    }
  };

  for (let i: number = 0, l: number = node.expressions.length; i < l; i++) {
    const optimizedExpression: IGrammarExpressionAstNode = optimizeGrammarExpression(
      node.expressions[i],
      rules,
    );

    if (isGrammarByteSequenceComparisonAstNode(optimizedExpression) && (optimizedExpression.expressions.length === 1)) {
      continuousByteSequenceComparisons.push(optimizedExpression);
    } else {
      terminateContinuousByteSequenceComparisons();
      optimizedExpressions.push(optimizedExpression);
    }
  }

  terminateContinuousByteSequenceComparisons();

  if (optimizedExpressions.length === 0) {
    return GrammarEmpty;
  } else if (optimizedExpressions.length === 1) {
    return optimizedExpressions[0];
  } else {
    return (
      (optimizedExpressions.length === node.expressions.length)
      && optimizedExpressions.every((optimizedExpression: IGrammarExpressionAstNode, index: number): boolean => {
        return optimizedExpression === node.expressions[index];
      })
    )
      ? node
      : GrammarAlternative(optimizedExpressions);
  }
}
