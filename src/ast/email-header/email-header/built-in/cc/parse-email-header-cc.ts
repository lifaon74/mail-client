import { IEmailHeaderCcAstNode, EmailHeaderCcAstNodeType, EmailHeaderCcAstNodeKey } from './email-header-cc-ast-node.type';
import { parseEmailContactList } from '../../../../email-contact/email-contact-list/parse-email-contact-list';

/** FUNCTION **/

export function parseEmailHeaderCc(
  input: string,
): IEmailHeaderCcAstNode {
  return {
    __type__: EmailHeaderCcAstNodeType,
    key: EmailHeaderCcAstNodeKey,
    contacts: parseEmailContactList(input),
  };
}
