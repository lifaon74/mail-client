import { isNumericChar } from './is-numeric-char';
import { isAlphaUpperCaseChar } from './is-alpha-upper-case-char';
import { isAlphaLowerCaseChar } from './is-alpha-lower-case-char';

export function isAlphaNumericChar(char: number): boolean {
  return isNumericChar(char)
    || isAlphaUpperCaseChar(char)
    || isAlphaLowerCaseChar(char)
    ;
}
