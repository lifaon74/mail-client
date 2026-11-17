import { IAstNode } from '../../../../../../ast/ast-node.type';
import { isAstNode } from '../../../../../../ast/is-ast-node';

export const GrammarByteComparisonLowerThanOrEqualsAstNodeType = 'GrammarByteComparisonLowerThanOrEquals';

export type IGrammarByteComparisonLowerThanOrEqualsAstNodeType = typeof GrammarByteComparisonLowerThanOrEqualsAstNodeType;

export interface IGrammarByteComparisonLowerThanOrEqualsAstNode extends IAstNode<IGrammarByteComparisonLowerThanOrEqualsAstNodeType> {
  readonly value: number;
}

export function isGrammarByteComparisonLowerThanOrEqualsAstNode(
  input: object,
): input is IGrammarByteComparisonLowerThanOrEqualsAstNode {
  return isAstNode<IGrammarByteComparisonLowerThanOrEqualsAstNodeType>(input, GrammarByteComparisonLowerThanOrEqualsAstNodeType);
}

