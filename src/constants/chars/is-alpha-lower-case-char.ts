import { CHAR_A_LOWER_CASE, CHAR_Z_LOWER_CASE } from './chars.constant';

export function isAlphaLowerCaseChar(
  char: number,
): boolean {
  return (CHAR_A_LOWER_CASE <= char) && (char <= CHAR_Z_LOWER_CASE);
}
