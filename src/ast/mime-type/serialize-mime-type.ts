import { serializeMimeTypeParameterList } from './fragments/mime-type-parameter-list/serialize-mime-type-parameter-list';
import { serializeMimeTypeType } from './fragments/mime-type-type/serialize-mime-type-type';
import { IMimeTypeAstNode } from './mime-type-ast-node.type';
import { serializeMimeTypeSubtype } from './fragments/mime-type-subtype/serialize-mime-type-subtype';

/** FUNCTION **/

export function serializeMimeType(
  {
    type,
    subtype,
    parameters,
  }: IMimeTypeAstNode,
): string {
  const parametersString: string = (parameters.items.length === 0)
    ? ''
    : `; ${serializeMimeTypeParameterList(parameters)}`;
  return `${serializeMimeTypeType(type)}/${serializeMimeTypeSubtype(subtype)}${parametersString}`;
}
