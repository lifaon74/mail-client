import { IEmailHeaderSharedAstNode } from '../__shared__/email-header-shared-ast-node.type';
import { isAstNode } from '../../../../__shared__/is-ast-node';
import { IMessageIdListAstNode } from '../../../../message-id/message-id-list/message-id-list-ast-node.type';

/** KEY **/

export const EmailHeaderInReplyToAstNodeKey = 'In-Reply-To';

export type IEmailHeaderInReplyToAstNodeKey = typeof EmailHeaderInReplyToAstNodeKey;

/** AST NODE **/

export const EmailHeaderInReplyToAstNodeType = 'EmailHeaderInReplyTo';

export type IEmailHeaderInReplyToAstNodeType = typeof EmailHeaderInReplyToAstNodeType;

export interface IEmailHeaderInReplyToAstNode extends IEmailHeaderSharedAstNode<IEmailHeaderInReplyToAstNodeType, IEmailHeaderInReplyToAstNodeKey> {
  readonly messageIds: IMessageIdListAstNode;
}

export function isEmailHeaderInReplyToAstNode(
  input: object,
): input is IEmailHeaderInReplyToAstNode {
  return isAstNode<IEmailHeaderInReplyToAstNodeType>(input, EmailHeaderInReplyToAstNodeType);
}
