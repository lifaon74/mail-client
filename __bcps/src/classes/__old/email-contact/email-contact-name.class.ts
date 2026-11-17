import { HTTP_TOKEN_PATTERN } from '../../../constants/http-token-pattern.constant';
import { HTTP_QUOTED_STRING_TOKEN_PATTERN } from '../../../constants/http-quoted-string-token-pattern.constant';

/** PATTERNS **/

// do not requires quoting
const EMAIL_CONTACT_NAME_NOT_REQUIRING_QUOTING_PATTERN = `${HTTP_TOKEN_PATTERN}+`;
const EMAIL_CONTACT_NAME_NOT_REQUIRING_QUOTING_REGEXP = new RegExp(`^${EMAIL_CONTACT_NAME_NOT_REQUIRING_QUOTING_PATTERN}$`);

// requires quoting
const EMAIL_CONTACT_NAME_REQUIRING_QUOTING_PATTERN = `${HTTP_QUOTED_STRING_TOKEN_PATTERN}+`;
const EMAIL_CONTACT_NAME_REQUIRING_QUOTING_REGEXP = new RegExp(`^${EMAIL_CONTACT_NAME_REQUIRING_QUOTING_PATTERN}$`);

// is quoted
const EMAIL_CONTACT_NAME_QUOTED_PATTERN = `"(?:[\\u0009\\u0020-\\u0021\\u0023-\\u005b\\u005d-\\u007e\\u0080-\\u00ff]|(?:\\\\")|(?:\\\\\\\\))+"`;
const EMAIL_CONTACT_NAME_QUOTED_REGEXP = new RegExp(`^${EMAIL_CONTACT_NAME_QUOTED_PATTERN}$`);

// value
const EMAIL_CONTACT_NAME_PATTERN = `(?:${EMAIL_CONTACT_NAME_NOT_REQUIRING_QUOTING_PATTERN})|(?:${EMAIL_CONTACT_NAME_QUOTED_PATTERN})`;

/** TYPES **/

export type IEmailContactNameValueToStringMode =
  | 'unquoted'
  | 'quoted'
  | 'optionally-quoted'
  ;

/** CLASS **/

export class EmailContactName {
  #value!: string;
  #requiresQuoting!: boolean; // computed

  constructor(
    input: string,
  ) {
    this.value = input;
  }

  get value(): string {
    return this.#value;
  }

  set value(
    input: string,
  ) {
    if (EMAIL_CONTACT_NAME_NOT_REQUIRING_QUOTING_REGEXP.test(input)) {
      this.#value = input;
      this.#requiresQuoting = false;
    } else {
      if (EMAIL_CONTACT_NAME_QUOTED_REGEXP.test(input)) {
        input = unquoteEmailContactNameValue(input);
        this.#value = input;
        this.#requiresQuoting = doesEmailContactNameValueRequireQuoting(input);
      } else if (EMAIL_CONTACT_NAME_REQUIRING_QUOTING_REGEXP.test(input)) {
        this.#value = input;
        this.#requiresQuoting = true;
      } else {
        throw new Error(`Invalid value`);
      }
    }
  }

  get requiresQuoting(): boolean {
    return this.#requiresQuoting;
  }

  get quoted(): string {
    return quoteEmailContactNameValue(this.#value);
  }

  get optionallyQuoted(): string {
    return this.#requiresQuoting
      ? this.quoted
      : this.value;
  }

  toString(
    mode: IEmailContactNameValueToStringMode = 'optionally-quoted',
  ): string {
    if (mode === 'unquoted') {
      return this.value;
    } else if (mode === 'quoted') {
      return this.quoted;
    } else {
      return this.optionallyQuoted;
    }
  }
}

/** FUNCTIONS **/

function escapeEmailContactNameValue(
  value: string,
): string {
  return value
    .replace('\\', '\\\\')
    .replace('"', '\\"');
}

function quoteEmailContactNameValue(
  value: string,
): string {
  return `"${escapeEmailContactNameValue(value)}"`;
}

function unescapeEmailContactNameValue(
  value: string,
): string {
  return value
    .replace('\\', '');
}

function unquoteEmailContactNameValue(
  value: string,
): string {
  return unescapeEmailContactNameValue(
    value
      .slice(1, -1),
  );
}

function doesEmailContactNameValueRequireQuoting(
  value: string,
): boolean {
  return !EMAIL_CONTACT_NAME_NOT_REQUIRING_QUOTING_REGEXP.test(value);
}
