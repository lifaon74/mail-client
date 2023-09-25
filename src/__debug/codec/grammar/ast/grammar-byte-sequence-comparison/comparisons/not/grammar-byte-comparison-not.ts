import { IGrammarByteComparisonNotAstNode, GrammarByteComparisonNotAstNodeType } from './grammar-byte-comparison-not-ast-node.type';
import { IGrammarByteComparisonExpressionAstNode } from '../grammar-byte-comparison-expression-ast-node.type';

export function GrammarByteComparisonNot(
  expression: IGrammarByteComparisonExpressionAstNode,
): IGrammarByteComparisonNotAstNode {
  return {
    __type__: GrammarByteComparisonNotAstNodeType,
    expression,
  };
}
