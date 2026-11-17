import { IGrammarExpressionAstNode } from '../grammar-expression/grammar-expression-ast-node.type';
import { IAstNode } from '../../../../ast/ast-node.type';
import { isAstNode } from '../../../../ast/is-ast-node';

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

