import { IMimeTypeParameterAstNode, MimeTypeParameterAstNodeType } from '../mime-type-parameter-ast-node.type';
import { parseMimeTypeParameterKey } from '../fragments/mime-type-parameter-key/parse-mime-type-parameter-key';
import {
  createMimeTypeParameterValueFromValueString,
} from '../fragments/mime-type-parameter-value/create/create-mime-type-parameter-value-from-value-string';

/** FUNCTION **/

export function createMimeTypeParameterFromKeyValueStrings(
  key: string,
  value: string,
): IMimeTypeParameterAstNode {
  return {
    __type__: MimeTypeParameterAstNodeType,
    key: parseMimeTypeParameterKey(key),
    value: createMimeTypeParameterValueFromValueString(value),
  };
}
