import { IEmailHeaderCcAstNode, EmailHeaderCcAstNodeKey } from './email-header-cc-ast-node.type';
import { serializeEmailContactList } from '../../../../email-contact/email-contact-list/serialize-email-contact-list';
import { serializeEmailHeaderFromKeyValueStrings } from '../../serialize/serialize-email-header-from-key-value-strings';

/** FUNCTION **/

export function serializeEmailHeaderCc(
  {
    contacts,
  }: IEmailHeaderCcAstNode,
): string {
  return serializeEmailHeaderFromKeyValueStrings(
    EmailHeaderCcAstNodeKey,
    serializeEmailContactList(contacts),
  );
}
