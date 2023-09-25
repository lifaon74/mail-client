import { IMimeTypeParameterAstNode } from '../mime-type-parameter-ast-node.type';
import { createMimeTypeParameterFromKeyValueStrings } from './create-mime-type-parameter-from-key-value-strings';

/** TYPES **/

export type IMimeTypeParameterTuple = [
  key: string,
  value: string,
];

/** FUNCTION **/

export function createMimeTypeParameterFromTuple(
  [key, value]: IMimeTypeParameterTuple,
): IMimeTypeParameterAstNode {
  return createMimeTypeParameterFromKeyValueStrings(
    key,
    value,
  );
}
