import { IGrammarExpressionAstNode } from '../grammar-expression/grammar-expression-ast-node.type';
import { IAstNode } from '../../../../ast/ast-node.type';
import { isAstNode } from '../../../../ast/is-ast-node';

export const GrammarRuleAstNodeType = 'GrammarRule';

export type IGrammarRuleAstNodeType = typeof GrammarRuleAstNodeType;

export interface IGrammarRuleAstNode extends IAstNode<IGrammarRuleAstNodeType> {
  readonly name: string;
  readonly expression: IGrammarExpressionAstNode;
  readonly tracked: boolean;
}

export function isGrammarRuleAstNode(
  input: object,
): input is IGrammarRuleAstNode {
  return isAstNode<IGrammarRuleAstNodeType>(input, GrammarRuleAstNodeType);
}
