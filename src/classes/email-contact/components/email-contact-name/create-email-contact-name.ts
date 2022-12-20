

import { HTTP_QUOTED_STRING_TOKEN_PATTERN } from '../../../../constants/http-quoted-string-token-pattern.constant';
import { HTTP_TOKEN_PATTERN } from '../../../../constants/http-token-pattern.constant';
import { IEmailContactName } from './email-contact-name.type';

export const EMAIL_CONTACT_NAME_NON_QUOTED_PATTERN = `${HTTP_TOKEN_PATTERN}+`;
const EMAIL_CONTACT_NAME_NON_QUOTED_REGEXP = new RegExp(`^${EMAIL_CONTACT_NAME_NON_QUOTED_PATTERN}$`);

export const EMAIL_CONTACT_NAME_QUOTED_PATTERN = `${HTTP_QUOTED_STRING_TOKEN_PATTERN}+`;
const EMAIL_CONTACT_NAME_QUOTED_REGEXP = new RegExp(`^${EMAIL_CONTACT_NAME_QUOTED_PATTERN}$`);

export const EMAIL_CONTACT_NAME_STRING_QUOTED_PATTERN = `"(?:[\\u0009\\u0020-\\u0021\\u0023-\\u005b\\u005d-\\u007e\\u0080-\\u00ff]|(?:\\\\")|(?:\\\\\\\\))+"`;
const EMAIL_CONTACT_NAME_STRING_QUOTED_REGEXP = new RegExp(`^${EMAIL_CONTACT_NAME_STRING_QUOTED_PATTERN}$`);

export const EMAIL_CONTACT_NAME_STRING_PATTERN = `(?:${EMAIL_CONTACT_NAME_NON_QUOTED_PATTERN})|(?:${EMAIL_CONTACT_NAME_STRING_QUOTED_PATTERN})`;

export function createEmailContactName(
  _value: string, // expected valid
  _requiresQuoting: boolean = !EMAIL_CONTACT_NAME_NON_QUOTED_REGEXP.test(_value), // expected valid, computed
): IEmailContactName {
  const get = (): string => {
    return _value;
  };

  const set = (
    value: string,
  ): void => {
    if (EMAIL_CONTACT_NAME_NON_QUOTED_REGEXP.test(value)) {
      _value = value;
      _requiresQuoting = false;
    } else if (EMAIL_CONTACT_NAME_QUOTED_REGEXP.test(value)) {
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

export function unquoteEmailContactNameStringQuoted(
  input: string,
): string {
  return input
    .slice(1, -1)
    .replace('\\', '');
}

export function createEmailContactNameFromString(
  input: string,
): IEmailContactName {
  if (EMAIL_CONTACT_NAME_NON_QUOTED_REGEXP.test(input)) {
    return createEmailContactName(input, false);
  } else if (EMAIL_CONTACT_NAME_STRING_QUOTED_REGEXP.test(input)) {
    return createEmailContactName(unquoteEmailContactNameStringQuoted(input));
  } else {
    throw new Error(`Invalid value`);
  }
}

