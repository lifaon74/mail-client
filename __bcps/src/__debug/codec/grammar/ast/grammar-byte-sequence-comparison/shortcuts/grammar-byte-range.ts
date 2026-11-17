import { IGrammarByteSequenceComparisonAstNode } from '../grammar-byte-sequence-comparison-ast-node.type';
import { range } from '../comparisons/range/grammar-byte-comparison-range.shortcut';
import { GrammarByteComparison } from './grammar-byte-comparison';

export function GrammarByteRange(
  start: number,
  end: number,
): IGrammarByteSequenceComparisonAstNode {
  return GrammarByteComparison(
    range(start, end),
  );
}
