import { char_t } from '../../char.type';

export function is_numeric_char(
  input: char_t,
): boolean {
  return ((0x30 <= input) && (input <= 0x39));
}
