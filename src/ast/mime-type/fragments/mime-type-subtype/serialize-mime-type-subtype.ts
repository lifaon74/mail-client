import { IMimeTypeSubtypeAstNode } from './mime-type-subtype-ast-node.type';

/** FUNCTION **/

export function serializeMimeTypeSubtype(
  input: IMimeTypeSubtypeAstNode,
): string {
  return input.value;
}
