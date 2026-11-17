import { IGrammarByteComparisonLowerThanAstNode, GrammarByteComparisonLowerThanAstNodeType } from './grammar-byte-comparison-lower-than-ast-node.type';

export function GrammarByteComparisonLowerThan(
  value: number,
): IGrammarByteComparisonLowerThanAstNode {
  return {
    __type__: GrammarByteComparisonLowerThanAstNodeType,
    value,
  };
}

