import { MimeTypeParameterKeyPattern } from '../fragments/mime-type-parameter-key/patterns/mime-type-parameter-key-patterns.constant';
import { MimeTypeParameterValuePattern } from '../fragments/mime-type-parameter-value/patterns/mime-type-parameter-value-patterns.constant';

/** PATTERNS **/

export const MimeTypeParameterPattern = `(${MimeTypeParameterKeyPattern})(?:=(${MimeTypeParameterValuePattern}))?`;
export const MimeTypeParameterRegexp = new RegExp(`^${MimeTypeParameterPattern}$`);
