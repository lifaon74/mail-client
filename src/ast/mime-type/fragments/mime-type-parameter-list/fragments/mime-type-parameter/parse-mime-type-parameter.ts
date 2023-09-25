import { MimeTypeParameterRegexp } from './patterns/mime-type-parameter-patterns.constant';
import { IMimeTypeParameterAstNode, MimeTypeParameterAstNodeType } from './mime-type-parameter-ast-node.type';
import { createMimeTypeParameterFromKeyValueStrings } from './create/create-mime-type-parameter-from-key-value-strings';

/** FUNCTION **/

export function parseMimeTypeParameter(
  input: string,
): IMimeTypeParameterAstNode {
  const match: RegExpExecArray | null = MimeTypeParameterRegexp.exec(input);
  if (match === null) {
    throw new Error(`Invalid ${MimeTypeParameterAstNodeType}`);
  } else {
    const [, key, value = ''] = match;

    return createMimeTypeParameterFromKeyValueStrings(
      key,
      value,
    );
  }
}
