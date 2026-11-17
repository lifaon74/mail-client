import { IEmailContactAstNode } from './email-contact-ast-node.type';
import { serializeEmailContactName } from './fragments/email-contact-name/serialize-email-contact-name';
import { serializeEmailAddress } from '../email-address/serialize-email-address';

/** FUNCTION **/

export function serializeEmailContact(
  {
    name,
    address,
  }: IEmailContactAstNode,
): string {
  return (name === null)
    ? serializeEmailAddress(address)
    : `${serializeEmailContactName(name)} <${serializeEmailAddress(address)}>`;
}
