import { IGrammarByteComparisonLowerThanOrEqualsAstNode, GrammarByteComparisonLowerThanOrEqualsAstNodeType } from './grammar-byte-comparison-lower-than-or-equals-ast-node.type';

export function GrammarByteComparisonLowerThanOrEquals(
  value: number,
): IGrammarByteComparisonLowerThanOrEqualsAstNode {
  return {
    __type__: GrammarByteComparisonLowerThanOrEqualsAstNodeType,
    value,
  };
}

