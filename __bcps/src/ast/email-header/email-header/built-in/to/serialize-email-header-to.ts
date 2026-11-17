import { IEmailHeaderToAstNode, EmailHeaderToAstNodeKey } from './email-header-to-ast-node.type';
import { serializeEmailContactList } from '../../../../email-contact/email-contact-list/serialize-email-contact-list';
import { serializeEmailHeaderFromKeyValueStrings } from '../../serialize/serialize-email-header-from-key-value-strings';

/** FUNCTION **/

export function serializeEmailHeaderTo(
  {
    contacts,
  }: IEmailHeaderToAstNode,
): string {
  return serializeEmailHeaderFromKeyValueStrings(
    EmailHeaderToAstNodeKey,
    serializeEmailContactList(contacts),
  );
}
