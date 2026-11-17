import { IAstNode } from '../../../../../ast/__shared__/ast-node.type';
import { isAstNode } from '../../../../../ast/__shared__/is-ast-node';
import { IGrammarExpressionAstNode } from '../grammar-expression/grammar-expression-ast-node.type';

export const GrammarAlternativeAstNodeType = 'GrammarAlternative';

export type IGrammarAlternativeAstNodeType = typeof GrammarAlternativeAstNodeType;

export interface IGrammarAlternativeAstNode extends IAstNode<IGrammarAlternativeAstNodeType> {
  readonly expressions: readonly IGrammarExpressionAstNode[];
}

export function isGrammarAlternativeAstNode(
  input: object,
): input is IGrammarAlternativeAstNode {
  return isAstNode<IGrammarAlternativeAstNodeType>(input, GrammarAlternativeAstNodeType);
}

