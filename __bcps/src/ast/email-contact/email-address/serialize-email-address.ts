import { IEmailAddressAstNode } from './email-address-ast-node.type';
import { serializeEmailAddressLocalpart } from './fragments/email-address-localpart/serialize-email-address-localpart';
import { serializeDomain } from '../domain/serialize-domain';

/** FUNCTION **/

export function serializeEmailAddress(
  {
    localpart,
    domain,
  }: IEmailAddressAstNode,
): string {
  return `${serializeEmailAddressLocalpart(localpart)}@${serializeDomain(domain)}`;
}
