import { IGrammarExpressionAstNode } from '../grammar-expression/grammar-expression-ast-node.type';
import { IGrammarEndAstNode } from '../grammar-end/grammar-end-ast-node.type';

export function optimizeGrammarEnd(
  node: IGrammarEndAstNode,
): IGrammarExpressionAstNode {
  return node;
}
