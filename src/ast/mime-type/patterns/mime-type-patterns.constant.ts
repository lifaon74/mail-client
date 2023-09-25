import { MimeTypeTypePattern } from '../fragments/mime-type-type/patterns/mime-type-type-patterns.constant';
import { MimeTypeSubtypePattern } from '../fragments/mime-type-subtype/patterns/mime-type-subtype-patterns.constant';

/** PATTERNS **/

export const MimeTypeTypeAndSubtypePattern = `(${MimeTypeTypePattern})/(${MimeTypeSubtypePattern})`;
export const MimeTypeTypeAndSubtypeRegexp = new RegExp(`^${MimeTypeTypeAndSubtypePattern}$`);

