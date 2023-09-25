import { or } from '../or/grammar-byte-comparison-or.shortcut';
import { IGrammarByteComparisonExpressionAstNode } from '../grammar-byte-comparison-expression-ast-node.type';
import { not } from '../not/grammar-byte-comparison-not.shortcut';
import { IGrammarByteComparisonNotAstNode } from '../not/grammar-byte-comparison-not-ast-node.type';

export function GrammarByteComparisonNotOr(
  ...expressions: readonly IGrammarByteComparisonExpressionAstNode[]
): IGrammarByteComparisonNotAstNode {
  return not(
    or(
      ...expressions,
    ),
  );
}
