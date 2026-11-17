import { IEmailHeaderSenderAstNode, EmailHeaderSenderAstNodeType, EmailHeaderSenderAstNodeKey } from './email-header-sender-ast-node.type';
import { parseEmailContact } from '../../../../email-contact/email-contact/parse-email-contact';

/** FUNCTION **/

export function parseEmailHeaderSender(
  input: string,
): IEmailHeaderSenderAstNode {
  return {
    __type__: EmailHeaderSenderAstNodeType,
    key: EmailHeaderSenderAstNodeKey,
    contact: parseEmailContact(input),
  };
}
