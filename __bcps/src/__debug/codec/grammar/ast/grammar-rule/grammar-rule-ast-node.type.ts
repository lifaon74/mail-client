import { IAstNode } from '../../../../../ast/__shared__/ast-node.type';
import { isAstNode } from '../../../../../ast/__shared__/is-ast-node';
import { IGrammarExpressionAstNode } from '../grammar-expression/grammar-expression-ast-node.type';

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
