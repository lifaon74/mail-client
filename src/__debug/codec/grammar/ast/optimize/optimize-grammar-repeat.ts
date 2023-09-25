import { IGrammarRepeatAstNode } from '../grammar-repeat/grammar-repeat-ast-node.type';
import { optimizeGrammarExpression } from './optimize-grammar-expression';
import { IGrammarExpressionAstNode } from '../grammar-expression/grammar-expression-ast-node.type';
import { GrammarRepeat } from '../grammar-repeat/grammar-repeat';
import { GrammarEmpty } from '../grammar-byte-sequence-comparison/shortcuts/grammar-empty';
import { IGrammarRulesMap } from './types/grammar-rules-map.type';

export function optimizeGrammarRepeat(
  node: IGrammarRepeatAstNode,
  rules: IGrammarRulesMap,
): IGrammarExpressionAstNode {
  const optimizedExpression: IGrammarExpressionAstNode = optimizeGrammarExpression(
    node.expression,
    rules,
  );

  if (
    (node.min === 0)
    && (node.max === 0)
  ) {
    return GrammarEmpty;
  } else if (
    (node.min === 1)
    && (node.max === 1)
  ) {
    return optimizedExpression;
  } else {
    if (optimizedExpression === node.expression) {
      return node;
    } else {
      return GrammarRepeat(
        optimizedExpression,
        node.min,
        node.max,
      );
    }
  }
}
