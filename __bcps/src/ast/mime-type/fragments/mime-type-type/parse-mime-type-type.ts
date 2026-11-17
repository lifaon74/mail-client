import { IMimeTypeTypeAstNode, MimeTypeTypeAstNodeType } from './mime-type-type-ast-node.type';
import { MimeTypeTypeRegexp } from './patterns/mime-type-type-patterns.constant';

/** FUNCTION **/

export function parseMimeTypeType(
  input: string,
): IMimeTypeTypeAstNode {
  if (MimeTypeTypeRegexp.test(input)) {
    return {
      __type__: MimeTypeTypeAstNodeType,
      value: input,
    };
  } else {
    throw new Error(`Invalid ${MimeTypeTypeAstNodeType}`);
  }
}
