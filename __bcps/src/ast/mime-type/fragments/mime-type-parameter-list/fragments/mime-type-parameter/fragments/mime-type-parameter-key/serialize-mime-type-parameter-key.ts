import { IMimeTypeParameterKeyAstNode } from './mime-type-parameter-key-ast-node.type';

/** FUNCTION **/

export function serializeMimeTypeParameterKey(
  input: IMimeTypeParameterKeyAstNode,
): string {
  return input.value;
}
