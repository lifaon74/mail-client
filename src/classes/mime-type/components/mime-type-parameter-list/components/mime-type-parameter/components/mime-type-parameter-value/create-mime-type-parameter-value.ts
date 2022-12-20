import { HTTP_QUOTED_STRING_TOKEN_PATTERN } from '../../../../../../../../constants/http-quoted-string-token-pattern.constant';
import { HTTP_TOKEN_PATTERN } from '../../../../../../../../constants/http-token-pattern.constant';
import { IMimeTypeParameterValue } from './mime-type-parameter-value.type';

export const MIME_TYPE_PARAMETER_VALUE_NON_QUOTED_PATTERN = `${HTTP_TOKEN_PATTERN}+`;
const MIME_TYPE_PARAMETER_VALUE_NON_QUOTED_REGEXP = new RegExp(`^${MIME_TYPE_PARAMETER_VALUE_NON_QUOTED_PATTERN}$`);

export const MIME_TYPE_PARAMETER_VALUE_QUOTED_PATTERN = `${HTTP_QUOTED_STRING_TOKEN_PATTERN}+`;
const MIME_TYPE_PARAMETER_VALUE_QUOTED_REGEXP = new RegExp(`^${MIME_TYPE_PARAMETER_VALUE_QUOTED_PATTERN}$`);

export const MIME_TYPE_PARAMETER_VALUE_STRING_QUOTED_PATTERN = `"(?:[\\u0009\\u0020-\\u0021\\u0023-\\u005b\\u005d-\\u007e\\u0080-\\u00ff]|(?:\\\\")|(?:\\\\\\\\))+"`;
const MIME_TYPE_PARAMETER_VALUE_STRING_QUOTED_REGEXP = new RegExp(`^${MIME_TYPE_PARAMETER_VALUE_STRING_QUOTED_PATTERN}$`);

export const MIME_TYPE_PARAMETER_VALUE_STRING_PATTERN = `(?:${MIME_TYPE_PARAMETER_VALUE_NON_QUOTED_PATTERN})|(?:${MIME_TYPE_PARAMETER_VALUE_STRING_QUOTED_PATTERN})`;

export function createMimeTypeParameterValue(
  _value: string, // expected valid
  _requiresQuoting: boolean = !MIME_TYPE_PARAMETER_VALUE_NON_QUOTED_REGEXP.test(_value), // expected valid, computed
): IMimeTypeParameterValue {
  const get = (): string => {
    return _value;
  };

  const set = (
    value: string,
  ): void => {
    if (MIME_TYPE_PARAMETER_VALUE_NON_QUOTED_REGEXP.test(value)) {
      _value = value;
      _requiresQuoting = false;
    } else if (MIME_TYPE_PARAMETER_VALUE_QUOTED_REGEXP.test(value)) {
      _value = value;
      _requiresQuoting = true;
    } else {
      throw new Error(`Invalid value`);
    }
  };

  const requiresQuoting = (): boolean => {
    return _requiresQuoting;
  };

  const getEscaped = (): string => {
    return _value
      .replace('\\', '\\\\')
      .replace('"', '\\"')
      ;
  };

  const getQuoted = (): string => {
    return `"${getEscaped()}"`;
  };

  const toString = (): string => {
    return _requiresQuoting
      ? getQuoted()
      : get();
  };

  return {
    get,
    set,
    requiresQuoting,
    getEscaped,
    getQuoted,
    toString,
  };
}

/*-----*/

export function unquoteMimeTypeParameterValueStringQuoted(
  input: string,
): string {
  return input
    .slice(1, -1)
    .replace('\\', '');
}

export function createMimeTypeParameterValueFromString(
  input: string,
): IMimeTypeParameterValue {
  if (MIME_TYPE_PARAMETER_VALUE_NON_QUOTED_REGEXP.test(input)) {
    return createMimeTypeParameterValue(input, false);
  } else if (MIME_TYPE_PARAMETER_VALUE_STRING_QUOTED_REGEXP.test(input)) {
    return createMimeTypeParameterValue(unquoteMimeTypeParameterValueStringQuoted(input));
  } else {
    throw new Error(`Invalid value`);
  }
}

