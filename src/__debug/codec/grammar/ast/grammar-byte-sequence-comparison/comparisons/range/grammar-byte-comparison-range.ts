import { and } from '../and/grammar-byte-comparison-and.shortcut';
import { gte } from '../greater-than-or-equals/grammar-byte-comparison-greater-than-or-equals.shortcut';
import { lte } from '../lower-than-or-equals/grammar-byte-comparison-lower-than-or-equals.shortcut';
import { IGrammarByteComparisonAndAstNode } from '../and/grammar-byte-comparison-and-ast-node.type';

export function GrammarByteComparisonRange(
  start: number,
  end: number,
): IGrammarByteComparisonAndAstNode {
  return and(gte(start), lte(end));
}
