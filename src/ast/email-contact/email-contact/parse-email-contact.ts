import { IEmailContactAstNode, EmailContactAstNodeType } from './email-contact-ast-node.type';
import { parseEmailContactName } from './fragments/email-contact-name/parse-email-contact-name';
import { parseEmailAddress } from '../email-address/parse-email-address';

/** FUNCTION **/

export function parseEmailContact(
  input: string,
): IEmailContactAstNode {
  const index: number = input.lastIndexOf('<');

  if (index === -1) {
    return {
      __type__: EmailContactAstNodeType,
      name: null,
      address: parseEmailAddress(input),
    };
  } else if (input.endsWith('>')) {
    const name: string = input.slice(0, index).trimEnd();
    const address: string = input.slice(index + 1, -1);
    return {
      __type__: EmailContactAstNodeType,
      name: (name === '')
        ? null
        : parseEmailContactName(name),
      address: parseEmailAddress(address),
    };
  } else {
    throw new Error(`Invalid ${EmailContactAstNodeType}`);
  }
}
