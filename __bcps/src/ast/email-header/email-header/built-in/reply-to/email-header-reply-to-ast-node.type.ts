import { IEmailHeaderSharedAstNode } from '../__shared__/email-header-shared-ast-node.type';
import { isAstNode } from '../../../../__shared__/is-ast-node';
import { IEmailContactListAstNode } from '../../../../email-contact/email-contact-list/email-contact-list-ast-node.type';

/** KEY **/

export const EmailHeaderReplyToAstNodeKey = 'Reply-To';

export type IEmailHeaderReplyToAstNodeKey = typeof EmailHeaderReplyToAstNodeKey;

/** AST NODE **/

export const EmailHeaderReplyToAstNodeType = 'EmailHeaderReplyTo';

export type IEmailHeaderReplyToAstNodeType = typeof EmailHeaderReplyToAstNodeType;

export interface IEmailHeaderReplyToAstNode extends IEmailHeaderSharedAstNode<IEmailHeaderReplyToAstNodeType, IEmailHeaderReplyToAstNodeKey> {
  readonly contacts: IEmailContactListAstNode;
}

export function isEmailHeaderReplyToAstNode(
  input: object,
): input is IEmailHeaderReplyToAstNode {
  return isAstNode<IEmailHeaderReplyToAstNodeType>(input, EmailHeaderReplyToAstNodeType);
}
