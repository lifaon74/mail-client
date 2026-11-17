import { CHAR_A_UPPER_CASE, CHAR_Z_UPPER_CASE } from './chars.constant';

export function isAlphaUpperCaseChar(
  char: number,
): boolean {
  return (CHAR_A_UPPER_CASE <= char) && (char <= CHAR_Z_UPPER_CASE);
}
