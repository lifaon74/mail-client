import {
  CHAR_0,
  CHAR_9,
  CHAR_A_UPPER_CASE,
  CHAR_F_UPPER_CASE,
  CHAR_A_LOWER_CASE,
  CHAR_F_LOWER_CASE,
} from '../constants/chars/chars.constant';

export function parseSingleHexChar(
  char: number,
): number {
  if ((CHAR_0 <= char) && (char <= CHAR_9)) {
    return char - CHAR_0;
  } else if ((CHAR_A_UPPER_CASE <= char) && (char <= CHAR_F_UPPER_CASE)) {
    return char - CHAR_A_UPPER_CASE + 10;
  } else if ((CHAR_A_LOWER_CASE <= char) && (char <= CHAR_F_LOWER_CASE)) {
    return char - CHAR_A_LOWER_CASE + 10;
  } else {
    return -1;
  }
}

