import { IAstNode } from '../../../../ast/ast-node.type';
import { isAstNode } from '../../../../ast/is-ast-node';
import { IReadonlyGrammarRulesMap } from './grammar-rules-map.type';

export const GrammarAstNodeType = 'Grammar';

export type IGrammarAstNodeType = typeof GrammarAstNodeType;

export interface IGrammarAstNode extends IAstNode<IGrammarAstNodeType> {
  readonly rules: IReadonlyGrammarRulesMap;
}

export function isGrammarAstNode(
  input: object,
): input is IGrammarAstNode {
  return isAstNode<IGrammarAstNodeType>(input, GrammarAstNodeType);
}

