import { isNumericChar } from './is-numeric-char';
import { CHAR_A_UPPER_CASE, CHAR_F_UPPER_CASE, CHAR_A_LOWER_CASE, CHAR_F_LOWER_CASE } from './chars.constant';

export function isHexChar(
  char: number,
): boolean {
  return isNumericChar(char)
    || ((CHAR_A_UPPER_CASE <= char) && (char <= CHAR_F_UPPER_CASE))
    || ((CHAR_A_LOWER_CASE <= char) && (char <= CHAR_F_LOWER_CASE))
    ;
}

