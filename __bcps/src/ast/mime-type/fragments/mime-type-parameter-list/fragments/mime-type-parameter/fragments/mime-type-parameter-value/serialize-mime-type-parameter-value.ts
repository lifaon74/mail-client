import { IMimeTypeParameterValueAstNode } from './mime-type-parameter-value-ast-node.type';
import { quoteMimeTypeParameterValue } from './helpers/quote-mime-type-parameter-value';

/** FUNCTION **/

export function serializeMimeTypeParameterValue(
  {
    value,
    quoting,
  }: IMimeTypeParameterValueAstNode,
): string {
  return (quoting === 'no')
    ? value
    : quoteMimeTypeParameterValue(value);
}
