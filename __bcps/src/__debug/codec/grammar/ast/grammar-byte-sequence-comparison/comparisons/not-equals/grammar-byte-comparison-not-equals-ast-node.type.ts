import { IAstNode } from '../../../../../../../ast/__shared__/ast-node.type';
import { isAstNode } from '../../../../../../../ast/__shared__/is-ast-node';

export const GrammarByteComparisonNotEqualsAstNodeType = 'GrammarByteComparisonNotEquals';

export type IGrammarByteComparisonNotEqualsAstNodeType = typeof GrammarByteComparisonNotEqualsAstNodeType;

export interface IGrammarByteComparisonNotEqualsAstNode extends IAstNode<IGrammarByteComparisonNotEqualsAstNodeType> {
  readonly value: number;
}

export function isGrammarByteComparisonNotEqualsAstNode(
  input: object,
): input is IGrammarByteComparisonNotEqualsAstNode {
  return isAstNode<IGrammarByteComparisonNotEqualsAstNodeType>(input, GrammarByteComparisonNotEqualsAstNodeType);
}

