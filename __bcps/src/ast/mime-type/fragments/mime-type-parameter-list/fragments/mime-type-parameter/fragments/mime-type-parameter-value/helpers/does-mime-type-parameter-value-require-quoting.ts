import {
  MimeTypeParameterValueNotRequiringQuotingRegexp
} from '../patterns/mime-type-parameter-value-patterns.constant';

export function doesMimeTypeParameterValueRequireQuoting(
  value: string,
): boolean {
  return !MimeTypeParameterValueNotRequiringQuotingRegexp.test(value);
}
