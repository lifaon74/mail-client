import {
  IEmailHeaderInReplyToAstNode,
  EmailHeaderInReplyToAstNodeType,
  EmailHeaderInReplyToAstNodeKey,
} from './email-header-in-reply-to-ast-node.type';
import { parseMimeType } from '../../../../mime-type/parse-mime-type';
import { parseMessageIdList } from '../../../../message-id/message-id-list/parse-message-id-list';

/** FUNCTION **/

export function parseEmailHeaderInReplyTo(
  input: string,
): IEmailHeaderInReplyToAstNode {
  return {
    __type__: EmailHeaderInReplyToAstNodeType,
    key: EmailHeaderInReplyToAstNodeKey,
    messageIds: parseMessageIdList(input),
  };
}
