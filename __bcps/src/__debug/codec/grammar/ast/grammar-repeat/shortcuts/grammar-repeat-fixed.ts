import { IGrammarRepeatAstNode, GrammarRepeatAstNodeType } from '../grammar-repeat-ast-node.type';
import { IGrammarExpressionAstNode } from '../../grammar-expression/grammar-expression-ast-node.type';
import { GrammarRepeat } from '../grammar-repeat';

export function GrammarRepeatFixed(
  expression: IGrammarExpressionAstNode,
  count: number,
): IGrammarRepeatAstNode {
  return GrammarRepeat(
    expression,
    count,
    count,
  );
}
