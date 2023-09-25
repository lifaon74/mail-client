import { IEmailAddressAstNode, EmailAddressAstNodeType } from './email-address-ast-node.type';
import { parseEmailAddressLocalpart } from './fragments/email-address-localpart/parse-email-address-localpart';
import { parseDomain } from '../domain/parse-domain';

/** FUNCTION **/

export function parseEmailAddress(
  input: string,
): IEmailAddressAstNode {
  const index: number = input.lastIndexOf('@');

  if (index === -1) {
    throw new Error(`Invalid ${EmailAddressAstNodeType}: missing @`);
  }

  return {
    __type__: EmailAddressAstNodeType,
    localpart: parseEmailAddressLocalpart(input.slice(0, index)),
    domain: parseDomain(input.slice(index + 1)),
  };
}
