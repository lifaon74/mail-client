import { IEmailHeaderToAstNode, EmailHeaderToAstNodeType, EmailHeaderToAstNodeKey } from './email-header-to-ast-node.type';
import { parseEmailContactList } from '../../../../email-contact/email-contact-list/parse-email-contact-list';

/** FUNCTION **/

export function parseEmailHeaderTo(
  input: string,
): IEmailHeaderToAstNode {
  return {
    __type__: EmailHeaderToAstNodeType,
    key: EmailHeaderToAstNodeKey,
    contacts: parseEmailContactList(input),
  };
}
