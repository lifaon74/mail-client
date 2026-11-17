import { IGrammarByteComparisonNotEqualsAstNode, GrammarByteComparisonNotEqualsAstNodeType } from './grammar-byte-comparison-not-equals-ast-node.type';

export function GrammarByteComparisonNotEquals(
  value: number,
): IGrammarByteComparisonNotEqualsAstNode {
  return {
    __type__: GrammarByteComparisonNotEqualsAstNodeType,
    value,
  };
}

