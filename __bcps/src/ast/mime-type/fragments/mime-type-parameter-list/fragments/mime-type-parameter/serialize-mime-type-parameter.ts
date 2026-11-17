import { IMimeTypeParameterAstNode } from './mime-type-parameter-ast-node.type';
import { serializeMimeTypeParameterKey } from './fragments/mime-type-parameter-key/serialize-mime-type-parameter-key';
import { serializeMimeTypeParameterValue } from './fragments/mime-type-parameter-value/serialize-mime-type-parameter-value';

/** FUNCTION **/

export function serializeMimeTypeParameter(
  {
    value,
    key,
  }: IMimeTypeParameterAstNode,
): string {
  return (value.value === '')
    ? serializeMimeTypeParameterKey(key)
    : `${serializeMimeTypeParameterKey(key)}=${serializeMimeTypeParameterValue(value)}`;
}
