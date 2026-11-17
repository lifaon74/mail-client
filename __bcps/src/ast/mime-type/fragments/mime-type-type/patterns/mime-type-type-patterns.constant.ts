import { HTTP_TOKEN_PATTERN } from '../../../../../constants/http-token-pattern.constant';

/** PATTERNS **/

export const MimeTypeTypePattern = `${HTTP_TOKEN_PATTERN}+`;
export const MimeTypeTypeRegexp = new RegExp(`^${MimeTypeTypePattern}$`);

