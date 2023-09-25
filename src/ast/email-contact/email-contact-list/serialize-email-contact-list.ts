import { IEmailContactListAstNode } from './email-contact-list-ast-node.type';
import { CRLF } from '../../../constants/crlf';
import { serializeEmailContact } from '../email-contact/serialize-email-contact';

/** FUNCTION **/

export function serializeEmailContactList(
  {
    items,
  }: IEmailContactListAstNode,
): string {
  let output: string = '';

  for (let i: number = 0, l: number = items.length; i < l; i++) {
    if (output !== '') {
      output += `,${CRLF} `;
    }

    output += serializeEmailContact(items[i]);
  }

  return output;
}
