import { IEmailContactListAstNode, EmailContactListAstNodeType } from './email-contact-list-ast-node.type';
import { IEmailContactAstNode } from '../email-contact/email-contact-ast-node.type';
import { parseEmailContact } from '../email-contact/parse-email-contact';

/** FUNCTION **/

export function parseEmailContactList(
  input: string,
): IEmailContactListAstNode {
  return {
    __type__: EmailContactListAstNodeType,
    items: input.split(/,\s*/).map((chunk: string): IEmailContactAstNode => {
      return parseEmailContact(chunk);
    }),
  };
}
