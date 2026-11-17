import { GrammarAstNodeType, IGrammarAstNode } from './grammar-ast-node.type';
import { IGrammarRuleAstNode } from '../grammar-rule/grammar-rule-ast-node.type';
import { IReadonlyGrammarRulesMap } from './grammar-rules-map.type';

export function Grammar(
  rules: IReadonlyGrammarRulesMap | Iterable<IGrammarRuleAstNode>,
): IGrammarAstNode {
  return {
    __type__: GrammarAstNodeType,
    rules: (rules instanceof Map)
      ? rules
      : new Map(
        Array.from(rules as Iterable<IGrammarRuleAstNode>, (node: IGrammarRuleAstNode): [string, IGrammarRuleAstNode] => {
          return [
            node.name,
            node,
          ];
        }),
      ),
  };
}

