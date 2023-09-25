import { IEmailHeaderSenderAstNode, EmailHeaderSenderAstNodeKey } from './email-header-sender-ast-node.type';
import { serializeEmailHeaderFromKeyValueStrings } from '../../serialize/serialize-email-header-from-key-value-strings';
import { serializeEmailContact } from '../../../../email-contact/email-contact/serialize-email-contact';

/** FUNCTION **/

export function serializeEmailHeaderSender(
  {
    contact,
  }: IEmailHeaderSenderAstNode,
): string {
  return serializeEmailHeaderFromKeyValueStrings(
    EmailHeaderSenderAstNodeKey,
    serializeEmailContact(contact),
  );
}
