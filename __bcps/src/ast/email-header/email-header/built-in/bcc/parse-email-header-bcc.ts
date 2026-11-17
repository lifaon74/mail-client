import { IEmailHeaderBccAstNode, EmailHeaderBccAstNodeType, EmailHeaderBccAstNodeKey } from './email-header-bcc-ast-node.type';
import { parseEmailContactList } from '../../../../email-contact/email-contact-list/parse-email-contact-list';

/** FUNCTION **/

export function parseEmailHeaderBcc(
  input: string,
): IEmailHeaderBccAstNode {
  return {
    __type__: EmailHeaderBccAstNodeType,
    key: EmailHeaderBccAstNodeKey,
    contacts: parseEmailContactList(input),
  };
}
