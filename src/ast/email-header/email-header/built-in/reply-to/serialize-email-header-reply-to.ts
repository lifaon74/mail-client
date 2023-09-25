import { IEmailHeaderReplyToAstNode, EmailHeaderReplyToAstNodeKey } from './email-header-reply-to-ast-node.type';
import { serializeEmailContactList } from '../../../../email-contact/email-contact-list/serialize-email-contact-list';
import { serializeEmailHeaderFromKeyValueStrings } from '../../serialize/serialize-email-header-from-key-value-strings';

/** FUNCTION **/

export function serializeEmailHeaderReplyTo(
  {
    contacts,
  }: IEmailHeaderReplyToAstNode,
): string {
  return serializeEmailHeaderFromKeyValueStrings(
    EmailHeaderReplyToAstNodeKey,
    serializeEmailContactList(contacts),
  );
}
