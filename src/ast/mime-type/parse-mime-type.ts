import { MimeTypeTypeAndSubtypeRegexp } from './patterns/mime-type-patterns.constant';
import { MimeTypeAstNodeType, IMimeTypeAstNode } from './mime-type-ast-node.type';
import { parseMimeTypeParameterList } from './fragments/mime-type-parameter-list/parse-mime-type-parameter-list';
import { MimeTypeSubtypeAstNodeType } from './fragments/mime-type-subtype/mime-type-subtype-ast-node.type';
import { MimeTypeTypeAstNodeType } from './fragments/mime-type-type/mime-type-type-ast-node.type';

/** FUNCTION **/

export function parseMimeType(
  input: string,
): IMimeTypeAstNode {
  const index: number = input.indexOf(';');
  let typeAndSubtype: string;
  let parameters: string;

  if (index === -1) {
    typeAndSubtype = input;
    parameters = '';
  } else {
    typeAndSubtype = input.slice(0, index);
    parameters = input.slice(index + 1);
  }

  MimeTypeTypeAndSubtypeRegexp.lastIndex = 0;
  const match: RegExpExecArray | null = MimeTypeTypeAndSubtypeRegexp.exec(typeAndSubtype);

  if (match === null) {
    throw new Error(`Invalid ${MimeTypeAstNodeType}`);
  } else {
    return {
      __type__: MimeTypeAstNodeType,
      // type: parseMimeType(match[1]),
      type: {
        __type__: MimeTypeTypeAstNodeType,
        value: match[1],
      },
      // subtype: parseMimeTypeSubtype(match[2]),
      subtype: {
        __type__: MimeTypeSubtypeAstNodeType,
        value: match[2],
      },
      parameters: parseMimeTypeParameterList(parameters, {
        allowLeadingSemiColumn: false,
      }),
    };
  }
}
