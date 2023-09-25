import { IAstNode } from '../../../../../ast/__shared__/ast-node.type';
import { isAstNode } from '../../../../../ast/__shared__/is-ast-node';
import { IGrammarByteComparisonExpressionAstNode } from './comparisons/grammar-byte-comparison-expression-ast-node.type';

export const GrammarByteSequenceComparisonAstNodeType = 'GrammarByteSequenceComparison';

export type IGrammarByteSequenceComparisonAstNodeType = typeof GrammarByteSequenceComparisonAstNodeType;

export interface IGrammarByteSequenceComparisonAstNode extends IAstNode<IGrammarByteSequenceComparisonAstNodeType> {
  readonly expressions: readonly IGrammarByteComparisonExpressionAstNode[];
}

export function isGrammarByteSequenceComparisonAstNode(
  input: object,
): input is IGrammarByteSequenceComparisonAstNode {
  return isAstNode<IGrammarByteSequenceComparisonAstNodeType>(input, GrammarByteSequenceComparisonAstNodeType);
}

