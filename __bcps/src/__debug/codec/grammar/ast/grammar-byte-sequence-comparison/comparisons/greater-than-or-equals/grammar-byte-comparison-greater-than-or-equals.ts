import { IGrammarByteComparisonGreaterThanOrEqualsAstNode, GrammarByteComparisonGreaterThanOrEqualsAstNodeType } from './grammar-byte-comparison-greater-than-or-equals-ast-node.type';

export function GrammarByteComparisonGreaterThanOrEquals(
  value: number,
): IGrammarByteComparisonGreaterThanOrEqualsAstNode {
  return {
    __type__: GrammarByteComparisonGreaterThanOrEqualsAstNodeType,
    value,
  };
}

