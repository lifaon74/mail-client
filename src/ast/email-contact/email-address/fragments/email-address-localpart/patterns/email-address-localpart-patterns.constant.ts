
/** PATTERNS **/

// not quoted
export const EmailAddressLocalpartPattern = '[A-Za-z0-9!#$%&\'*+\\-/=?^_`{|}~.]+';
export const EmailAddressLocalpartRegexp = new RegExp(`^${EmailAddressLocalpartPattern}$`);

// quoted
// // [\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f] === [^\x09-\x0a\x0d\x20\x5c]
export const EmailAddressLocalpartQuotedPattern = '"(?:[^\\x09-\\x0a\\x0d\\x20\\x5c]|\\\\[^\\x0a\\x0d])+"';
export const EmailAddressLocalpartQuotedRegexp = new RegExp(`^${EmailAddressLocalpartQuotedPattern}$`);

