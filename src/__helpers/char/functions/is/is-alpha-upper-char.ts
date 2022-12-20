import { char_t } from '../../char.type';

export function is_alpha_upper_char(
  input: char_t,
): boolean {
  return ((0x41 <= input) && (input <= 0x5a));
}
