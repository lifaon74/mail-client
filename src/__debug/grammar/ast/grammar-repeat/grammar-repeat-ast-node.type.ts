import { IGrammarExpressionAstNode } from '../grammar-expression/grammar-expression-ast-node.type';
import { IAstNode } from '../../../../ast/ast-node.type';
import { isAstNode } from '../../../../ast/is-ast-node';

export const GrammarRepeatAstNodeType = 'GrammarRepeat';

export type IGrammarRepeatAstNodeType = typeof GrammarRepeatAstNodeType;

export interface IGrammarRepeatAstNode extends IAstNode<IGrammarRepeatAstNodeType> {
  readonly expression: IGrammarExpressionAstNode;
  readonly min: number;
  readonly max: number;
}

export function isGrammarRepeatAstNode(
  input: object,
): input is IGrammarRepeatAstNode {
  return isAstNode<IGrammarRepeatAstNodeType>(input, GrammarRepeatAstNodeType);
}

