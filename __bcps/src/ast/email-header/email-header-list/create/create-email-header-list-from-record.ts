import { createEmailHeaderListFromIterableOfTuples } from './create-email-header-list-from-iterable-of-tuples';
import { IEmailHeaderListAstNode } from '../email-header-list-ast-node.type';

/** TYPES **/


export type IEmailHeaderListRecord = Record<string, string>;

/** FUNCTION **/

export function createEmailHeaderListFromRecord(
  input: IEmailHeaderListRecord,
): IEmailHeaderListAstNode {
  return createEmailHeaderListFromIterableOfTuples(
    Object.entries(input),
  );
}
