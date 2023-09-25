import { IGrammarRuleAstNode } from '../grammar-rule/grammar-rule-ast-node.type';
import { optimizeGrammarExpression } from './optimize-grammar-expression';
import { IGrammarExpressionAstNode } from '../grammar-expression/grammar-expression-ast-node.type';
import { GrammarRule } from '../grammar-rule/grammar-rule';
import { IGrammarRulesMap } from './types/grammar-rules-map.type';

export function optimizeGrammarRule(
  node: IGrammarRuleAstNode,
  rules: IGrammarRulesMap,
): IGrammarRuleAstNode {
  const optimizedExpression: IGrammarExpressionAstNode = optimizeGrammarExpression(
    node.expression,
    rules,
  );

  if (optimizedExpression === node.expression) {
    return node;
  } else {
    return GrammarRule(
      node.name,
      optimizedExpression,
      node.tracked,
    );
  }
}
