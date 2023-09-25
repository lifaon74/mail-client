import { IEmailHeaderAstNode } from './email-header-ast-node.type';
import { parseEmailHeaderFromKeyValueStrings } from './parse/parse-email-header-from-key-value-strings';

/** FUNCTION **/

export function parseEmailHeader(
  input: string,
): IEmailHeaderAstNode {
  const index: number = input.indexOf(': ');

  // TODO improve parsing
  if (index === -1) {
    throw new Error(`Invalid EmailHeader`);
  } else {
    return parseEmailHeaderFromKeyValueStrings(
      input.slice(0, index),
      input.slice(index + 2),
    );
  }
}
