import { IAstNode } from '../../../../../../../ast/__shared__/ast-node.type';
import { isAstNode } from '../../../../../../../ast/__shared__/is-ast-node';

export const GrammarByteComparisonLowerThanAstNodeType = 'GrammarByteComparisonLowerThan';

export type IGrammarByteComparisonLowerThanAstNodeType = typeof GrammarByteComparisonLowerThanAstNodeType;

export interface IGrammarByteComparisonLowerThanAstNode extends IAstNode<IGrammarByteComparisonLowerThanAstNodeType> {
  readonly value: number;
}

export function isGrammarByteComparisonLowerThanAstNode(
  input: object,
): input is IGrammarByteComparisonLowerThanAstNode {
  return isAstNode<IGrammarByteComparisonLowerThanAstNodeType>(input, GrammarByteComparisonLowerThanAstNodeType);
}

