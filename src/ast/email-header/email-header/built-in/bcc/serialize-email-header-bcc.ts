import { IEmailHeaderBccAstNode, EmailHeaderBccAstNodeKey } from './email-header-bcc-ast-node.type';
import { serializeEmailContactList } from '../../../../email-contact/email-contact-list/serialize-email-contact-list';
import { serializeEmailHeaderFromKeyValueStrings } from '../../serialize/serialize-email-header-from-key-value-strings';

/** FUNCTION **/

export function serializeEmailHeaderBcc(
  {
    contacts,
  }: IEmailHeaderBccAstNode,
): string {
  return serializeEmailHeaderFromKeyValueStrings(
    EmailHeaderBccAstNodeKey,
    serializeEmailContactList(contacts),
  );
}
