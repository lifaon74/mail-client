import { char_t } from '../../char.type';

export function is_alpha_lower_char(
  input: char_t,
): boolean {
  return ((0x61 <= input) && (input <= 0x7a));
}
