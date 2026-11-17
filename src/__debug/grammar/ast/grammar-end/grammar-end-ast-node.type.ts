import { IAstNode } from '../../../../ast/ast-node.type';
import { isAstNode } from '../../../../ast/is-ast-node';

export const GrammarEndAstNodeType = 'GrammarEnd';

export type IGrammarEndAstNodeType = typeof GrammarEndAstNodeType;

export interface IGrammarEndAstNode extends IAstNode<IGrammarEndAstNodeType> {
}

export function isGrammarEndAstNode(
  input: object,
): input is IGrammarEndAstNode {
  return isAstNode<IGrammarEndAstNodeType>(input, GrammarEndAstNodeType);
}
