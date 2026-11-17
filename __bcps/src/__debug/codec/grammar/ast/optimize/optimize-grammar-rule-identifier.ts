import { IGrammarExpressionAstNode } from '../grammar-expression/grammar-expression-ast-node.type';
import { IGrammarRuleIdentifierAstNode } from '../grammar-rule-identifier/grammar-rule-identifier-ast-node.type';
import { IGrammarRulesMap } from './types/grammar-rules-map.type';
import { IGrammarRuleAstNode } from '../grammar-rule/grammar-rule-ast-node.type';
import { optimizeGrammarExpression } from './optimize-grammar-expression';
import { isGrammarByteSequenceComparisonAstNode } from '../grammar-byte-sequence-comparison/grammar-byte-sequence-comparison-ast-node.type';

let BEING_OPTIMIZED = new Set<IGrammarRuleIdentifierAstNode>();

export function optimizeGrammarRuleIdentifier(
  node: IGrammarRuleIdentifierAstNode,
  rules: IGrammarRulesMap,
): IGrammarExpressionAstNode {
  // return node;
  if (BEING_OPTIMIZED.has(node)) {
    return node;
  } else {
    BEING_OPTIMIZED.add(node);
    try {
      const rule: IGrammarRuleAstNode | undefined = rules.get(node.name);

      if (rule === void 0) {
        throw new Error(`Missing rule: ${node.name}`);
      } else {
        if ((node.tracked === 'no') || ((node.tracked === 'auto') && !rule.tracked)) {
          const optimizeExpression: IGrammarExpressionAstNode = optimizeGrammarExpression(
            rule.expression,
            rules,
          );
          if (isGrammarByteSequenceComparisonAstNode(optimizeExpression)) {
            return optimizeExpression;
          } else {
            return node;
          }
        } else {
          return node;
        }
      }
    } finally {
      BEING_OPTIMIZED.delete(node);
    }
  }
}
