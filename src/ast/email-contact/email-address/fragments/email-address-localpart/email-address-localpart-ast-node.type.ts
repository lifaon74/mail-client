import { IAstNode } from '../../../../__shared__/ast-node.type';

export const EmailAddressLocalpartAstNodeType = 'EmailAddressLocalpart';

export type IEmailAddressLocalpartAstNodeType = typeof EmailAddressLocalpartAstNodeType;

export interface IEmailAddressLocalpartAstNode extends IAstNode<IEmailAddressLocalpartAstNodeType> {
  readonly value: string;
}



