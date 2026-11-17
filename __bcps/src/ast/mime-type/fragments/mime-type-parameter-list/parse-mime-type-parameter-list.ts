import { IMimeTypeParameterListAstNode, MimeTypeParameterListAstNodeType } from './mime-type-parameter-list-ast-node.type';
import { MimeTypeParameterListKeyAndValueRegexp } from './patterns/mime-type-parameter-list-patterns.constant';
import { MimeTypeParameterAstNodeType, IMimeTypeParameterAstNode } from './fragments/mime-type-parameter/mime-type-parameter-ast-node.type';
import { parseMimeTypeParameterKey } from './fragments/mime-type-parameter/fragments/mime-type-parameter-key/parse-mime-type-parameter-key';
import { parseMimeTypeParameterValue } from './fragments/mime-type-parameter/fragments/mime-type-parameter-value/parse-mime-type-parameter-value';
import { MimeTypeParameterKeyAstNodeType } from './fragments/mime-type-parameter/fragments/mime-type-parameter-key/mime-type-parameter-key-ast-node.type';

/** TYPES **/

export interface IParseMimeTypeParameterListOptions {
  allowLeadingSemiColumn?: boolean;
}

/** FUNCTION **/

export function parseMimeTypeParameterList(
  input: string,
  {
    allowLeadingSemiColumn = true,
  }: IParseMimeTypeParameterListOptions = {},
): IMimeTypeParameterListAstNode {
  if (allowLeadingSemiColumn && input.startsWith(';')) {
    input = input.slice(1);
  }

  let match: RegExpExecArray | null;
  let index: number = 0;
  const items: IMimeTypeParameterAstNode[] = [];

  while ((match = MimeTypeParameterListKeyAndValueRegexp.exec(input)) !== null) {
    if ((index === 0) && (match.index !== 0)) {
      throw new Error(`Invalid ${MimeTypeParameterListAstNodeType}`);
    }

    const [, key, value = ''] = match;

    items.push({
      __type__: MimeTypeParameterAstNodeType,
      // key: parseMimeTypeParameterKey(key),
      key: {
        __type__: MimeTypeParameterKeyAstNodeType,
        value: key,
      },
      value: parseMimeTypeParameterValue(value),
    });

    index = match.index + match[0].length;
  }

  if (index !== input.length) {
    throw new Error(`Invalid ${MimeTypeParameterListAstNodeType}`);
  }

  return {
    __type__: MimeTypeParameterListAstNodeType,
    items,
  };
}
