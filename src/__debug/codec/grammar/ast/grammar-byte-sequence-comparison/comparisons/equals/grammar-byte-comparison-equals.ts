import { IGrammarByteComparisonEqualsAstNode, GrammarByteComparisonEqualsAstNodeType } from './grammar-byte-comparison-equals-ast-node.type';

export function GrammarByteComparisonEquals(
  value: number,
): IGrammarByteComparisonEqualsAstNode {
  return {
    __type__: GrammarByteComparisonEqualsAstNodeType,
    value,
  };
}

