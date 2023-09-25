
import { IGrammarByteComparisonExpressionAstNode } from '../grammar-byte-comparison-expression-ast-node.type';
import { IAstNode } from '../../../../../../../ast/__shared__/ast-node.type';
import { isAstNode } from '../../../../../../../ast/__shared__/is-ast-node';

export const GrammarByteComparisonOrAstNodeType = 'GrammarByteComparisonOr';

export type IGrammarByteComparisonOrAstNodeType = typeof GrammarByteComparisonOrAstNodeType;

export interface IGrammarByteComparisonOrAstNode extends IAstNode<IGrammarByteComparisonOrAstNodeType> {
  readonly expressions: readonly IGrammarByteComparisonExpressionAstNode[];
}

export function isGrammarByteComparisonOrAstNode(
  input: object,
): input is IGrammarByteComparisonOrAstNode {
  return isAstNode<IGrammarByteComparisonOrAstNodeType>(input, GrammarByteComparisonOrAstNodeType);
}

