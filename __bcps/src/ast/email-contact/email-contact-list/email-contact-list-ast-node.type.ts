import { IAstNode } from '../../__shared__/ast-node.type';
import { IEmailContactAstNode } from '../email-contact/email-contact-ast-node.type';

export const EmailContactListAstNodeType = 'EmailContactList';

export type IEmailContactListAstNodeType = typeof EmailContactListAstNodeType;

export interface IEmailContactListAstNode extends IAstNode<IEmailContactListAstNodeType> {
  readonly items: readonly IEmailContactAstNode[];
}



