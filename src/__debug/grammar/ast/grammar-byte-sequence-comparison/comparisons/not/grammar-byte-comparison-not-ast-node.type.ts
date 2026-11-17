import { IGrammarByteComparisonExpressionAstNode } from '../grammar-byte-comparison-expression-ast-node.type';
import { IAstNode } from '../../../../../../ast/ast-node.type';
import { isAstNode } from '../../../../../../ast/is-ast-node';

export const GrammarByteComparisonNotAstNodeType = 'GrammarByteComparisonNot';

export type IGrammarByteComparisonNotAstNodeType = typeof GrammarByteComparisonNotAstNodeType;

export interface IGrammarByteComparisonNotAstNode extends IAstNode<IGrammarByteComparisonNotAstNodeType> {
  readonly expression: IGrammarByteComparisonExpressionAstNode;
}

export function isGrammarByteComparisonNotAstNode(
  input: object,
): input is IGrammarByteComparisonNotAstNode {
  return isAstNode<IGrammarByteComparisonNotAstNodeType>(input, GrammarByteComparisonNotAstNodeType);
}

