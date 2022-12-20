import { char_t } from '../../char.type';
import { is_alpha_lower_char } from '../is/is-alpha-lower-char';

export function char_to_uppercase(
  input: char_t,
): char_t {
  return is_alpha_lower_char(input)
    ? (input - 0x20)
    : input;
}

