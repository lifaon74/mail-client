import { IGrammarByteComparisonOrAstNode, GrammarByteComparisonOrAstNodeType } from './grammar-byte-comparison-or-ast-node.type';
import { IGrammarByteComparisonExpressionAstNode } from '../grammar-byte-comparison-expression-ast-node.type';

export function GrammarByteComparisonOr(
  ...expressions: readonly IGrammarByteComparisonExpressionAstNode[]
): IGrammarByteComparisonOrAstNode {
  return {
    __type__: GrammarByteComparisonOrAstNodeType,
    expressions,
  };
}
