import { IAstNode } from '../../../../../../ast/ast-node.type';
import { isAstNode } from '../../../../../../ast/is-ast-node';

export const GrammarByteComparisonGreaterThanOrEqualsAstNodeType = 'GrammarByteComparisonGreaterThanOrEquals';

export type IGrammarByteComparisonGreaterThanOrEqualsAstNodeType = typeof GrammarByteComparisonGreaterThanOrEqualsAstNodeType;

export interface IGrammarByteComparisonGreaterThanOrEqualsAstNode extends IAstNode<IGrammarByteComparisonGreaterThanOrEqualsAstNodeType> {
  readonly value: number;
}

export function isGrammarByteComparisonGreaterThanOrEqualsAstNode(
  input: object,
): input is IGrammarByteComparisonGreaterThanOrEqualsAstNode {
  return isAstNode<IGrammarByteComparisonGreaterThanOrEqualsAstNodeType>(input, GrammarByteComparisonGreaterThanOrEqualsAstNodeType);
}

