import { IGrammarRepeatAstNode } from '../grammar-repeat-ast-node.type';
import { GrammarRepeat } from '../grammar-repeat';
import { IGrammarExpressionAstNode } from '../../grammar-expression/grammar-expression-ast-node.type';

export function GrammarRepeatZeroOrMore(
  expression: IGrammarExpressionAstNode,
): IGrammarRepeatAstNode {
  return GrammarRepeat(
    expression,
    0,
    Number.POSITIVE_INFINITY,
  );
}
