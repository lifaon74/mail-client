import { IAstNode } from '../../../../../ast/__shared__/ast-node.type';
import { isAstNode } from '../../../../../ast/__shared__/is-ast-node';

export const GrammarRuleIdentifierAstNodeType = 'GrammarRuleIdentifier';

export type IGrammarRuleIdentifierAstNodeType = typeof GrammarRuleIdentifierAstNodeType;

export type IGrammarRuleIdentifierTracked =
  | 'no'
  | 'yes'
  | 'auto'
;

export interface IGrammarRuleIdentifierAstNode extends IAstNode<IGrammarRuleIdentifierAstNodeType> {
  readonly name: string;
  readonly tracked: IGrammarRuleIdentifierTracked;
}

export function isGrammarRuleIdentifierAstNode(
  input: object,
): input is IGrammarRuleIdentifierAstNode {
  return isAstNode<IGrammarRuleIdentifierAstNodeType>(input, GrammarRuleIdentifierAstNodeType);
}
