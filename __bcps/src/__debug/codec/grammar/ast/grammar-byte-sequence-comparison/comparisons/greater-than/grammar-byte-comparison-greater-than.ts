import { IGrammarByteComparisonGreaterThanAstNode, GrammarByteComparisonGreaterThanAstNodeType } from './grammar-byte-comparison-greater-than-ast-node.type';

export function GrammarByteComparisonGreaterThan(
  value: number,
): IGrammarByteComparisonGreaterThanAstNode {
  return {
    __type__: GrammarByteComparisonGreaterThanAstNodeType,
    value,
  };
}

