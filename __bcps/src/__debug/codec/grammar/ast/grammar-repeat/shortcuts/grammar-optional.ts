import { IGrammarRepeatAstNode } from '../grammar-repeat-ast-node.type';
import { IGrammarExpressionAstNode } from '../../grammar-expression/grammar-expression-ast-node.type';
import { GrammarRepeat } from '../grammar-repeat';

export function GrammarOptional(
  expression: IGrammarExpressionAstNode,
): IGrammarRepeatAstNode {
  return GrammarRepeat(
    expression,
    0,
    1,
  );
}
