import { IGrammarRepeatAstNode, GrammarRepeatAstNodeType } from './grammar-repeat-ast-node.type';
import { IGrammarExpressionAstNode } from '../grammar-expression/grammar-expression-ast-node.type';

export function GrammarRepeat(
  expression: IGrammarExpressionAstNode,
  min: number,
  max: number,
): IGrammarRepeatAstNode {
  return {
    __type__: GrammarRepeatAstNodeType,
    expression,
    min,
    max,
  };
}

