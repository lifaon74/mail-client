import { IAstNode } from '../../../../../ast/__shared__/ast-node.type';
import { isAstNode } from '../../../../../ast/__shared__/is-ast-node';
import { IGrammarExpressionAstNode } from '../grammar-expression/grammar-expression-ast-node.type';

export const GrammarConcatAstNodeType = 'GrammarConcat';

export type IGrammarConcatAstNodeType = typeof GrammarConcatAstNodeType;

export interface IGrammarConcatAstNode extends IAstNode<IGrammarConcatAstNodeType> {
  readonly expressions: readonly IGrammarExpressionAstNode[];
}

export function isGrammarConcatAstNode(
  input: object,
): input is IGrammarConcatAstNode {
  return isAstNode<IGrammarConcatAstNodeType>(input, GrammarConcatAstNodeType);
}

