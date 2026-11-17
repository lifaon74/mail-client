import { IMessageIdListAstNode, MessageIdListAstNodeType } from './message-id-list-ast-node.type';
import { parseMessageId } from '../message-id/parse-message-id';
import { IMessageIdAstNode } from '../message-id/message-id-ast-node.type';

/** FUNCTION **/

export function parseMessageIdList(
  input: string,
): IMessageIdListAstNode {
  return {
    __type__: MessageIdListAstNodeType,
    items: input.split(/,\s*/).map((messageId: string): IMessageIdAstNode => {
      return parseMessageId(messageId);
    }),
  };
}
