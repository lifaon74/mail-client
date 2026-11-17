import { IAstNode } from '../../../../../../ast/ast-node.type';
import { isAstNode } from '../../../../../../ast/is-ast-node';

export const GrammarByteComparisonGreaterThanAstNodeType = 'GrammarByteComparisonGreaterThan';

export type IGrammarByteComparisonGreaterThanAstNodeType = typeof GrammarByteComparisonGreaterThanAstNodeType;

export interface IGrammarByteComparisonGreaterThanAstNode extends IAstNode<IGrammarByteComparisonGreaterThanAstNodeType> {
  readonly value: number;
}

export function isGrammarByteComparisonGreaterThanAstNode(
  input: object,
): input is IGrammarByteComparisonGreaterThanAstNode {
  return isAstNode<IGrammarByteComparisonGreaterThanAstNodeType>(input, GrammarByteComparisonGreaterThanAstNodeType);
}

