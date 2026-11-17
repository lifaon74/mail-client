import { IEmailHeaderReplyToAstNode, EmailHeaderReplyToAstNodeType, EmailHeaderReplyToAstNodeKey } from './email-header-reply-to-ast-node.type';
import { parseEmailContactList } from '../../../../email-contact/email-contact-list/parse-email-contact-list';

/** FUNCTION **/

export function parseEmailHeaderReplyTo(
  input: string,
): IEmailHeaderReplyToAstNode {
  return {
    __type__: EmailHeaderReplyToAstNodeType,
    key: EmailHeaderReplyToAstNodeKey,
    contacts: parseEmailContactList(input),
  };
}
