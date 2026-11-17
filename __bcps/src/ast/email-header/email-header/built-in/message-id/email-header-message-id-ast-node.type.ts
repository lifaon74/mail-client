import { IEmailHeaderSharedAstNode } from '../__shared__/email-header-shared-ast-node.type';
import { isAstNode } from '../../../../__shared__/is-ast-node';
import { IMessageIdAstNode } from '../../../../message-id/message-id/message-id-ast-node.type';

/** KEY **/

export const EmailHeaderMessageIdAstNodeKey = 'Message-ID';

export type IEmailHeaderMessageIdAstNodeKey = typeof EmailHeaderMessageIdAstNodeKey;

/** AST NODE **/

export const EmailHeaderMessageIdAstNodeType = 'EmailHeaderMessageId';

export type IEmailHeaderMessageIdAstNodeType = typeof EmailHeaderMessageIdAstNodeType;

export interface IEmailHeaderMessageIdAstNode extends IEmailHeaderSharedAstNode<IEmailHeaderMessageIdAstNodeType, IEmailHeaderMessageIdAstNodeKey> {
  readonly messageId: IMessageIdAstNode;
}

export function isEmailHeaderMessageIdAstNode(
  input: object,
): input is IEmailHeaderMessageIdAstNode {
  return isAstNode<IEmailHeaderMessageIdAstNodeType>(input, EmailHeaderMessageIdAstNodeType);
}
