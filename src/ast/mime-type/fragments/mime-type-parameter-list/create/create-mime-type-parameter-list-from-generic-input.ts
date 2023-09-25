import { IMimeTypeParameterListAstNode, isMimeTypeParameterListAstNode } from '../mime-type-parameter-list-ast-node.type';
import {
  createMimeTypeParameterListFromIterableOfTuples,
  IMimeTypeParameterListIterableOfTuples,
} from './create-mime-type-parameter-list-from-iterable-of-tuples';
import { parseMimeTypeParameterList } from '../parse-mime-type-parameter-list';
import { isIterable, isObject } from '@lirx/utils';
import { createMimeTypeParameterListFromRecord, IMimeTypeParameterListRecord } from './create-mime-type-parameter-list-from-record';

/** TYPES **/


export type IMimeTypeParameterListGenericInput =
  | string
  | IMimeTypeParameterListIterableOfTuples
  | IMimeTypeParameterListRecord
  | IMimeTypeParameterListAstNode
  ;

/** FUNCTION **/

export function createMimeTypeParameterListFromGenericInput(
  input: IMimeTypeParameterListGenericInput,
): IMimeTypeParameterListAstNode {
  if (typeof input === 'string') {
    return parseMimeTypeParameterList(input);
  } else if (isIterable(input)) {
    return createMimeTypeParameterListFromIterableOfTuples(input);
  } else if (isObject(input)) {
    return isMimeTypeParameterListAstNode(input)
      ? input
      : createMimeTypeParameterListFromRecord(input);
  } else {
    throw new Error(`Invalid input`);
  }
}
