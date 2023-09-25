import { HTTP_TOKEN_PATTERN } from '../../../../../../../../../constants/http-token-pattern.constant';
import { HTTP_QUOTED_STRING_TOKEN_PATTERN } from '../../../../../../../../../constants/http-quoted-string-token-pattern.constant';

/** PATTERNS **/

// does not require quoting
export const MimeTypeParameterValueNotRequiringQuotingPattern = `${HTTP_TOKEN_PATTERN}+`;
export const MimeTypeParameterValueNotRequiringQuotingRegexp = new RegExp(`^${MimeTypeParameterValueNotRequiringQuotingPattern}$`);

// requires quoting
export const MimeTypeParameterValueRequiringQuotingPattern = `${HTTP_QUOTED_STRING_TOKEN_PATTERN}+`;
export const MimeTypeParameterValueRequiringQuotingRegexp = new RegExp(`^${MimeTypeParameterValueRequiringQuotingPattern}$`);

// is quoted
export const MimeTypeParameterValueQuotedPattern = `"(?:[\\u0009\\u0020-\\u0021\\u0023-\\u005b\\u005d-\\u007e\\u0080-\\u00ff]|(?:\\\\")|(?:\\\\\\\\))+"`;
export const MimeTypeParameterValueQuotedRegexp = new RegExp(`^${MimeTypeParameterValueQuotedPattern}$`);

// value
export const MimeTypeParameterValuePattern = `(?:${MimeTypeParameterValueNotRequiringQuotingPattern})|(?:${MimeTypeParameterValueQuotedPattern}|(?:))`;
