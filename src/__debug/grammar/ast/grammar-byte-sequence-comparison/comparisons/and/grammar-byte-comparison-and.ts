import { IGrammarByteComparisonAndAstNode, GrammarByteComparisonAndAstNodeType } from './grammar-byte-comparison-and-ast-node.type';
import { IGrammarByteComparisonExpressionAstNode } from '../grammar-byte-comparison-expression-ast-node.type';

export function GrammarByteComparisonAnd(
  ...expressions: readonly IGrammarByteComparisonExpressionAstNode[]
): IGrammarByteComparisonAndAstNode {
  return {
    __type__: GrammarByteComparisonAndAstNodeType,
    expressions,
  };
}
