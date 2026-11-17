import { IGrammarAstNode } from '../grammar/grammar-ast-node.type';
import { Grammar } from '../grammar/grammar';
import { optimizeGrammarRule } from './optimize-grammar-rule';
import { IGrammarRuleAstNode } from '../grammar-rule/grammar-rule-ast-node.type';
import { IGrammarRulesMap } from './types/grammar-rules-map.type';

export function optimizeGrammar(
  node: IGrammarAstNode,
): IGrammarAstNode {
  const rules: IGrammarRulesMap = new Map<string, IGrammarRuleAstNode>(
    node.rules.map((rule: IGrammarRuleAstNode): [string, IGrammarRuleAstNode] => {
      return [
        rule.name,
        rule,
      ];
    }),
  );

  const optimizedRules: IGrammarRuleAstNode[] = node.rules.map((rule: IGrammarRuleAstNode): IGrammarRuleAstNode => {
    return optimizeGrammarRule(
      rule,
      rules,
    );
  });

  return (
    (optimizedRules.length === node.rules.length)
    && optimizedRules.every((optimizedRule: IGrammarRuleAstNode, index: number): boolean => {
      return optimizedRule === node.rules[index];
    })
  )
    ? node
    : Grammar(optimizedRules);
}
