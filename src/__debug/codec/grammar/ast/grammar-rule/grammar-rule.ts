import { IGrammarRuleAstNode, GrammarRuleAstNodeType } from './grammar-rule-ast-node.type';
import { IGrammarExpressionAstNode } from '../grammar-expression/grammar-expression-ast-node.type';

export function GrammarRule(
  name: string,
  expression: IGrammarExpressionAstNode,
  tracked: boolean = false,
): IGrammarRuleAstNode {
  return {
    __type__: GrammarRuleAstNodeType,
    name,
    expression,
    tracked,
  };
}
