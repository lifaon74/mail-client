import { IAstNode } from '../../../../../../../ast/__shared__/ast-node.type';
import { isAstNode } from '../../../../../../../ast/__shared__/is-ast-node';

export const GrammarByteComparisonEqualsAstNodeType = 'GrammarByteComparisonEquals';

export type IGrammarByteComparisonEqualsAstNodeType = typeof GrammarByteComparisonEqualsAstNodeType;

export interface IGrammarByteComparisonEqualsAstNode extends IAstNode<IGrammarByteComparisonEqualsAstNodeType> {
  readonly value: number;
}

export function isGrammarByteComparisonEqualsAstNode(
  input: object,
): input is IGrammarByteComparisonEqualsAstNode {
  return isAstNode<IGrammarByteComparisonEqualsAstNodeType>(input, GrammarByteComparisonEqualsAstNodeType);
}

