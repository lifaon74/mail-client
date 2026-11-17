import { IMimeTypeParameterKeyAstNode, MimeTypeParameterKeyAstNodeType } from './mime-type-parameter-key-ast-node.type';
import { MimeTypeParameterKeyRegexp } from './patterns/mime-type-parameter-key-patterns.constant';

/** FUNCTION **/

export function parseMimeTypeParameterKey(
  input: string,
): IMimeTypeParameterKeyAstNode {
  if (MimeTypeParameterKeyRegexp.test(input)) {
    return {
      __type__: MimeTypeParameterKeyAstNodeType,
      value: input,
    };
  } else {
    throw new Error(`Invalid ${MimeTypeParameterKeyAstNodeType}`);
  }
}
