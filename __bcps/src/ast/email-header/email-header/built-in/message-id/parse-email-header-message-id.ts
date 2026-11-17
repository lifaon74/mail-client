import {
  IEmailHeaderMessageIdAstNode,
  EmailHeaderMessageIdAstNodeType,
  EmailHeaderMessageIdAstNodeKey,
} from './email-header-message-id-ast-node.type';
import { parseMessageId } from '../../../../message-id/message-id/parse-message-id';

/** FUNCTION **/

export function parseEmailHeaderMessageId(
  input: string,
): IEmailHeaderMessageIdAstNode {
  return {
    __type__: EmailHeaderMessageIdAstNodeType,
    key: EmailHeaderMessageIdAstNodeKey,
    messageId: parseMessageId(input),
  };
}
