import { IMimeTypeParameterValueAstNode, MimeTypeParameterValueAstNodeType } from './mime-type-parameter-value-ast-node.type';
import {
  MimeTypeParameterValueNotRequiringQuotingRegexp,
  MimeTypeParameterValueQuotedRegexp,
} from './patterns/mime-type-parameter-value-patterns.constant';
import { unquoteMimeTypeParameterValue } from './helpers/unquote-mime-type-parameter-value';
import { doesMimeTypeParameterValueRequireQuoting } from './helpers/does-mime-type-parameter-value-require-quoting';

/** FUNCTION **/

export function parseMimeTypeParameterValue(
  input: string,
): IMimeTypeParameterValueAstNode {
  if (MimeTypeParameterValueQuotedRegexp.test(input)) {
    const value: string = unquoteMimeTypeParameterValue(input);
    return {
      __type__: MimeTypeParameterValueAstNodeType,
      value,
      quoting: doesMimeTypeParameterValueRequireQuoting(value)
        ? 'yes'
        : 'yes-but-optional',
    };
  } else if (
    (input === '')
    || MimeTypeParameterValueNotRequiringQuotingRegexp.test(input)
  ) {
    return {
      __type__: MimeTypeParameterValueAstNodeType,
      value: input,
      quoting: 'no',
    };
  } else {
    throw new Error(`Invalid ${MimeTypeParameterValueAstNodeType}`);
  }
}


