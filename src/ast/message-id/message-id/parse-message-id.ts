import { IMessageIdAstNode, MessageIdAstNodeType } from './message-id-ast-node.type';

/** FUNCTION **/

export function parseMessageId(
  input: string,
): IMessageIdAstNode {
  const parts: string[] = input.split('@');
  if (parts.length === 2) {
    return {
      __type__: MessageIdAstNodeType,
      left: parts[0],
      right: parts[1],
    };
  } else {
    throw new Error(`Invalid ${MessageIdAstNodeType}`);
  }
}
