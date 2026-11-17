import { IAstNode } from '../../__shared__/ast-node.type';
import { IEmailContactNameAstNode } from './fragments/email-contact-name/email-contact-name-ast-node.type';
import { IEmailAddressAstNode } from '../email-address/email-address-ast-node.type';

export const EmailContactAstNodeType = 'EmailContact';

export type IEmailContactAstNodeType = typeof EmailContactAstNodeType;

export interface IEmailContactAstNode extends IAstNode<IEmailContactAstNodeType> {
  readonly name: IEmailContactNameAstNode | null;
  readonly address: IEmailAddressAstNode;
}



