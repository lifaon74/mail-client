import { IEmailHeaderFromAstNode, EmailHeaderFromAstNodeType, EmailHeaderFromAstNodeKey } from './email-header-from-ast-node.type';
import { parseEmailContactList } from '../../../../email-contact/email-contact-list/parse-email-contact-list';

/** FUNCTION **/

export function parseEmailHeaderFrom(
  input: string,
): IEmailHeaderFromAstNode {
  return {
    __type__: EmailHeaderFromAstNodeType,
    key: EmailHeaderFromAstNodeKey,
    contacts: parseEmailContactList(input),
  };
}
