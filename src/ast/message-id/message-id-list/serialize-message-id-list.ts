import { IMessageIdListAstNode } from './message-id-list-ast-node.type';
import { CRLF } from '../../../constants/crlf';
import { serializeMessageId } from '../message-id/serialize-message-id';

/** FUNCTION **/

export function serializeMessageIdList(
  {
    items,
  }: IMessageIdListAstNode,
): string {
  let output: string = '';

  for (let i: number = 0, l: number = items.length; i < l; i++) {
    if (output !== '') {
      // INFO not sure if "," is necessary
      output += `,${CRLF} `;
    }

    output += serializeMessageId(items[i]);
  }

  return output;
}
