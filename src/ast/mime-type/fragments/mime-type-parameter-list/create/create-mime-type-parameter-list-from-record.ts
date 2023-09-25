import { IMimeTypeParameterListAstNode } from '../mime-type-parameter-list-ast-node.type';
import { createMimeTypeParameterListFromIterableOfTuples } from './create-mime-type-parameter-list-from-iterable-of-tuples';

/** TYPES **/


export type IMimeTypeParameterListRecord = Record<string, string>;

/** FUNCTION **/

export function createMimeTypeParameterListFromRecord(
  input: IMimeTypeParameterListRecord,
): IMimeTypeParameterListAstNode {
  return createMimeTypeParameterListFromIterableOfTuples(
    Object.entries(input),
  );
}
