import { parseEmailHeaderFromKeyValueStrings } from './parse-email-header-from-key-value-strings';
import { IEmailHeaderAstNode } from '../email-header-ast-node.type';

/** TYPES **/

export type IEmailHeaderTuple = [
  key: string,
  value: string,
];

/** FUNCTION **/

export function parseEmailHeaderFromTuple(
  [key, value]: IEmailHeaderTuple,
): IEmailHeaderAstNode {
  return parseEmailHeaderFromKeyValueStrings(
    key,
    value,
  );
}
