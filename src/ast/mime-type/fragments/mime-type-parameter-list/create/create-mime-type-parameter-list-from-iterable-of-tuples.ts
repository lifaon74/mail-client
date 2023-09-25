import { IMimeTypeParameterListAstNode, MimeTypeParameterListAstNodeType } from '../mime-type-parameter-list-ast-node.type';
import { IMimeTypeParameterTuple, createMimeTypeParameterFromTuple } from '../fragments/mime-type-parameter/create/create-mime-type-parameter-from-tuple';

/** TYPES **/


export type IMimeTypeParameterListIterableOfTuples = Iterable<IMimeTypeParameterTuple>;

/** FUNCTION **/

export function createMimeTypeParameterListFromIterableOfTuples(
  input: IMimeTypeParameterListIterableOfTuples,
): IMimeTypeParameterListAstNode {
  return {
    __type__: MimeTypeParameterListAstNodeType,
    items: Array.from(input, createMimeTypeParameterFromTuple),
  };
}
