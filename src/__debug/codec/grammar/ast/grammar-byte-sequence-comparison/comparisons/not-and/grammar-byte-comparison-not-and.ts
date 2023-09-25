import { IGrammarByteComparisonExpressionAstNode } from '../grammar-byte-comparison-expression-ast-node.type';
import { not } from '../not/grammar-byte-comparison-not.shortcut';
import { IGrammarByteComparisonNotAstNode } from '../not/grammar-byte-comparison-not-ast-node.type';
import { and } from '../and/grammar-byte-comparison-and.shortcut';

export function GrammarByteComparisonNotAnd(
  ...expressions: readonly IGrammarByteComparisonExpressionAstNode[]
): IGrammarByteComparisonNotAstNode {
  return not(
    and(
      ...expressions,
    ),
  );
}
