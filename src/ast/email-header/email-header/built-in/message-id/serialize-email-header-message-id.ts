import { IEmailHeaderMessageIdAstNode, EmailHeaderMessageIdAstNodeKey } from './email-header-message-id-ast-node.type';
import { serializeEmailHeaderFromKeyValueStrings } from '../../serialize/serialize-email-header-from-key-value-strings';
import { serializeMessageId } from '../../../../message-id/message-id/serialize-message-id';

/** FUNCTION **/

export function serializeEmailHeaderMessageId(
  {
    messageId,
  }: IEmailHeaderMessageIdAstNode,
): string {
  return serializeEmailHeaderFromKeyValueStrings(
    EmailHeaderMessageIdAstNodeKey,
    serializeMessageId(messageId),
  );
}
