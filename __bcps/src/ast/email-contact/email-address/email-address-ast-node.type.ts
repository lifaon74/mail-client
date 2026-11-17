import { IAstNode } from '../../__shared__/ast-node.type';
import { IEmailAddressLocalpartAstNode } from './fragments/email-address-localpart/email-address-localpart-ast-node.type';
import { IDomainAstNode } from '../domain/domain-ast-node.type';

export const EmailAddressAstNodeType = 'EmailAddress';

export type IEmailAddressAstNodeType = typeof EmailAddressAstNodeType;

export interface IEmailAddressAstNode extends IAstNode<IEmailAddressAstNodeType> {
  readonly localpart: IEmailAddressLocalpartAstNode;
  readonly domain: IDomainAstNode;
}



