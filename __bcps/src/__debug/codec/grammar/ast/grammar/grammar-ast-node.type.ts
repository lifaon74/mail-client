import { IAstNode } from '../../../../../ast/__shared__/ast-node.type';
import { IGrammarRuleAstNode } from '../grammar-rule/grammar-rule-ast-node.type';
import { isAstNode } from '../../../../../ast/__shared__/is-ast-node';

export const GrammarAstNodeType = 'Grammar';

export type IGrammarAstNodeType = typeof GrammarAstNodeType;

export interface IGrammarAstNode extends IAstNode<IGrammarAstNodeType> {
  readonly rules: readonly IGrammarRuleAstNode[];
}

export function isGrammarAstNode(
  input: object,
): input is IGrammarAstNode {
  return isAstNode<IGrammarAstNodeType>(input, GrammarAstNodeType);
}

