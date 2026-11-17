import { IEmailHeaderListAstNode, isEmailHeaderListAstNode } from '../email-header-list-ast-node.type';
import {
  createEmailHeaderListFromIterableOfTuples,
  IEmailHeaderListIterableOfTuples,
} from './create-email-header-list-from-iterable-of-tuples';
import { parseEmailHeaderList } from '../parse-email-header-list';
import { isIterable, isObject } from '@lirx/utils';
import { createEmailHeaderListFromRecord, IEmailHeaderListRecord } from './create-email-header-list-from-record';

/** TYPES **/


export type IEmailHeaderListGenericInput =
  | string
  | IEmailHeaderListIterableOfTuples
  | IEmailHeaderListRecord
  | IEmailHeaderListAstNode
  ;

/** FUNCTION **/

export function createEmailHeaderListFromGenericInput(
  input: IEmailHeaderListGenericInput,
): IEmailHeaderListAstNode {
  if (typeof input === 'string') {
    return parseEmailHeaderList(input);
  } else if (isIterable(input)) {
    return createEmailHeaderListFromIterableOfTuples(input);
  } else if (isObject(input)) {
    return isEmailHeaderListAstNode(input)
      ? input
      : createEmailHeaderListFromRecord(input);
  } else {
    throw new Error(`Invalid input`);
  }
}
