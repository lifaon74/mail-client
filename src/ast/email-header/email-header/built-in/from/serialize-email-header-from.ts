import { IEmailHeaderFromAstNode, EmailHeaderFromAstNodeKey } from './email-header-from-ast-node.type';
import { serializeEmailContactList } from '../../../../email-contact/email-contact-list/serialize-email-contact-list';
import { serializeEmailHeaderFromKeyValueStrings } from '../../serialize/serialize-email-header-from-key-value-strings';

/** FUNCTION **/

export function serializeEmailHeaderFrom(
  {
    contacts,
  }: IEmailHeaderFromAstNode,
): string {
  return serializeEmailHeaderFromKeyValueStrings(
    EmailHeaderFromAstNodeKey,
    serializeEmailContactList(contacts),
  );
}
