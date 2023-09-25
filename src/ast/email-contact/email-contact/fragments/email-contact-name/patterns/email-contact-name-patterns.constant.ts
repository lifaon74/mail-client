
/** PATTERNS **/

// not quoted
export const EmailContactNamePattern = '[A-Za-z0-9!#$%&\'*+\\-/=?^_`{|}~.]+';
export const EmailContactNameRegexp = new RegExp(`^${EmailContactNamePattern}$`);

// quoted
// // [\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f] === [^\x09-\x0a\x0d\x20\x5c]
export const EmailContactNameQuotedPattern = '"(?:[^\\x09-\\x0a\\x0d\\x20\\x5c]|\\\\[^\\x0a\\x0d])+"';
export const EmailContactNameQuotedRegexp = new RegExp(`^${EmailContactNameQuotedPattern}$`);

