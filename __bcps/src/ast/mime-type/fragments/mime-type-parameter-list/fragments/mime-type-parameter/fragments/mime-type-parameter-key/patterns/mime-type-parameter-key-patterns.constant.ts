import { HTTP_TOKEN_PATTERN } from '../../../../../../../../../constants/http-token-pattern.constant';

/** PATTERNS **/

export const MimeTypeParameterKeyPattern = `${HTTP_TOKEN_PATTERN}+`;
export const MimeTypeParameterKeyRegexp = new RegExp(`^${MimeTypeParameterKeyPattern}$`);
