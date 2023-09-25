
import { IGrammarByteComparisonExpressionAstNode } from '../grammar-byte-comparison-expression-ast-node.type';
import { IAstNode } from '../../../../../../../ast/__shared__/ast-node.type';
import { isAstNode } from '../../../../../../../ast/__shared__/is-ast-node';

export const GrammarByteComparisonAndAstNodeType = 'GrammarByteComparisonAnd';

export type IGrammarByteComparisonAndAstNodeType = typeof GrammarByteComparisonAndAstNodeType;

export interface IGrammarByteComparisonAndAstNode extends IAstNode<IGrammarByteComparisonAndAstNodeType> {
  readonly expressions: readonly IGrammarByteComparisonExpressionAstNode[];
}

export function isGrammarByteComparisonAndAstNode(
  input: object,
): input is IGrammarByteComparisonAndAstNode {
  return isAstNode<IGrammarByteComparisonAndAstNodeType>(input, GrammarByteComparisonAndAstNodeType);
}

