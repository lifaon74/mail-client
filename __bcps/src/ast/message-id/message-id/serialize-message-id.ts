import { IMessageIdAstNode } from './message-id-ast-node.type';

/** FUNCTION **/

export function serializeMessageId(
  {
    left,
    right,
  }: IMessageIdAstNode,
): string {
  return `${left}@${right}`;
}
