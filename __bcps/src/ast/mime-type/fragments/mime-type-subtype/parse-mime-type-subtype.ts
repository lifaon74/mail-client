import { IMimeTypeSubtypeAstNode, MimeTypeSubtypeAstNodeType } from './mime-type-subtype-ast-node.type';
import { MimeTypeSubtypeRegexp } from './patterns/mime-type-subtype-patterns.constant';

/** FUNCTION **/

export function parseMimeTypeSubtype(
  input: string,
): IMimeTypeSubtypeAstNode {
  if (MimeTypeSubtypeRegexp.test(input)) {
    return {
      __type__: MimeTypeSubtypeAstNodeType,
      value: input,
    };
  } else {
    throw new Error(`Invalid ${MimeTypeSubtypeAstNodeType}`);
  }
}
