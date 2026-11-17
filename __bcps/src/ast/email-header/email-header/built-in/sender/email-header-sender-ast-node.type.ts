import { IEmailHeaderSharedAstNode } from '../__shared__/email-header-shared-ast-node.type';
import { isAstNode } from '../../../../__shared__/is-ast-node';
import { IEmailContactAstNode } from '../../../../email-contact/email-contact/email-contact-ast-node.type';

/** KEY **/

export const EmailHeaderSenderAstNodeKey = 'Sender';

export type IEmailHeaderSenderAstNodeKey = typeof EmailHeaderSenderAstNodeKey;

/** AST NODE **/

export const EmailHeaderSenderAstNodeType = 'EmailHeaderSender';

export type IEmailHeaderSenderAstNodeType = typeof EmailHeaderSenderAstNodeType;

export interface IEmailHeaderSenderAstNode extends IEmailHeaderSharedAstNode<IEmailHeaderSenderAstNodeType, IEmailHeaderSenderAstNodeKey> {
  readonly contact: IEmailContactAstNode;
}

export function isEmailHeaderSenderAstNode(
  input: object,
): input is IEmailHeaderSenderAstNode {
  return isAstNode<IEmailHeaderSenderAstNodeType>(input, EmailHeaderSenderAstNodeType);
}
