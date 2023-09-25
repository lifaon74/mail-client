import { IGrammarAlternativeAstNode, GrammarAlternativeAstNodeType } from './grammar-alternative-ast-node.type';
import { IGrammarExpressionAstNode } from '../grammar-expression/grammar-expression-ast-node.type';

export function GrammarAlternative(
  expressions: readonly IGrammarExpressionAstNode[]
): IGrammarAlternativeAstNode {
  return {
    __type__: GrammarAlternativeAstNodeType,
    expressions,
  };
}

