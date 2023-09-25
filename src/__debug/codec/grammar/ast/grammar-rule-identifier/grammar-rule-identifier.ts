import {
  GrammarRuleIdentifierAstNodeType,
  IGrammarRuleIdentifierAstNode,
  IGrammarRuleIdentifierTracked,
} from './grammar-rule-identifier-ast-node.type';

export function GrammarRuleIdentifier(
  name: string,
  track: IGrammarRuleIdentifierTracked = 'auto',
): IGrammarRuleIdentifierAstNode {
  return {
    __type__: GrammarRuleIdentifierAstNodeType,
    name,
    tracked: track,
  };
}
