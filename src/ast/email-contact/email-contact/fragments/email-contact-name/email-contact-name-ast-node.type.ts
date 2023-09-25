import { IAstNode } from '../../../../__shared__/ast-node.type';

export const EmailContactNameAstNodeType = 'EmailContactName';

export type IEmailContactNameAstNodeType = typeof EmailContactNameAstNodeType;

export interface IEmailContactNameAstNode extends IAstNode<IEmailContactNameAstNodeType> {
  readonly value: string;
}



