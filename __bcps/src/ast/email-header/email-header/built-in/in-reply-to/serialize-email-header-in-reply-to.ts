import { IEmailHeaderInReplyToAstNode, EmailHeaderInReplyToAstNodeKey } from './email-header-in-reply-to-ast-node.type';
import { serializeEmailHeaderFromKeyValueStrings } from '../../serialize/serialize-email-header-from-key-value-strings';
import { serializeMessageIdList } from '../../../../message-id/message-id-list/serialize-message-id-list';

/** FUNCTION **/

export function serializeEmailHeaderInReplyTo(
  {
    messageIds,
  }: IEmailHeaderInReplyToAstNode,
): string {
  return serializeEmailHeaderFromKeyValueStrings(
    EmailHeaderInReplyToAstNodeKey,
    serializeMessageIdList(messageIds),
  );
}
