import { HTTP_TOKEN_PATTERN } from '../../../../../constants/http-token-pattern.constant';

/** PATTERNS **/

export const MimeTypeSubtypePattern = `${HTTP_TOKEN_PATTERN}+`;
export const MimeTypeSubtypeRegexp = new RegExp(`^${MimeTypeSubtypePattern}$`);

