import { IMimeTypeTypeAstNode } from './mime-type-type-ast-node.type';

/** FUNCTION **/

export function serializeMimeTypeType(
  input: IMimeTypeTypeAstNode,
): string {
  return input.value;
}
