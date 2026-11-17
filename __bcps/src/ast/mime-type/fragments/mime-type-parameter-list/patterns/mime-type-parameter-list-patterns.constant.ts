import { MimeTypeParameterPattern } from '../fragments/mime-type-parameter/patterns/mime-type-parameter-patterns.constant';

/** PATTERNS **/

export const MimeTypeParameterListKeyAndValueRegexp: RegExp = new RegExp(`\\s*${MimeTypeParameterPattern}\\s*(?:;|$)`, 'g');
