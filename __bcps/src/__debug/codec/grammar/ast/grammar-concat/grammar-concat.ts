import { IGrammarConcatAstNode, GrammarConcatAstNodeType } from './grammar-concat-ast-node.type';
import { IGrammarExpressionAstNode } from '../grammar-expression/grammar-expression-ast-node.type';

export function GrammarConcat(
  expressions: readonly IGrammarExpressionAstNode[]
): IGrammarConcatAstNode {
  return {
    __type__: GrammarConcatAstNodeType,
    expressions,
  };
}

