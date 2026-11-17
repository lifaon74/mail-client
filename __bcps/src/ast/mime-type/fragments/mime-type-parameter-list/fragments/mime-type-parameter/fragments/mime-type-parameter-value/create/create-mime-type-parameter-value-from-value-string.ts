import { IMimeTypeParameterValueAstNode, MimeTypeParameterValueAstNodeType } from '../mime-type-parameter-value-ast-node.type';
import {
  MimeTypeParameterValueNotRequiringQuotingRegexp,
  MimeTypeParameterValueRequiringQuotingRegexp,
} from '../patterns/mime-type-parameter-value-patterns.constant';

export function createMimeTypeParameterValueFromValueString(
  input: string,
): IMimeTypeParameterValueAstNode {
  if (
    (input === '')
    || MimeTypeParameterValueNotRequiringQuotingRegexp.test(input)
  ) {
    return {
      __type__: MimeTypeParameterValueAstNodeType,
      value: input,
      quoting: 'no',
    };
  } else if (MimeTypeParameterValueRequiringQuotingRegexp.test(input)) {
    return {
      __type__: MimeTypeParameterValueAstNodeType,
      value: input,
      quoting: 'yes',
    };
  } else {
    throw new Error(`Invalid ${MimeTypeParameterValueAstNodeType}`);
  }
}
