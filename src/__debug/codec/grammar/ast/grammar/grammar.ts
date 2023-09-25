import { GrammarAstNodeType, IGrammarAstNode } from './grammar-ast-node.type';
import { IGrammarRuleAstNode } from '../grammar-rule/grammar-rule-ast-node.type';

export function Grammar(
  rules: readonly IGrammarRuleAstNode[],
): IGrammarAstNode {
  return {
    __type__: GrammarAstNodeType,
    rules,
  };
}
