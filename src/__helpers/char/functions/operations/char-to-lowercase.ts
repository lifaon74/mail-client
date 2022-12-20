import { char_t } from '../../char.type';
import { is_alpha_upper_char } from '../is/is-alpha-upper-char';

export function char_to_lowercase(
  input: char_t,
): char_t {
  return is_alpha_upper_char(input)
    ? (input + 0x20)
    : input;
}

