import { CHAR_0, CHAR_9 } from './chars.constant';

export function isNumericChar(
  char: number,
): boolean {
  return (CHAR_0 <= char) && (char <= CHAR_9);
}
