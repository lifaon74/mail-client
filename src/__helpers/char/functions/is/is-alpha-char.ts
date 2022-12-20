import { char_t } from '../../char.type';
import { is_alpha_lower_char } from './is-alpha-lower-char';
import { is_alpha_upper_char } from './is-alpha-upper-char';

export function is_alpha_char(
  input: char_t,
): boolean {
  return is_alpha_lower_char(input)
    || is_alpha_upper_char(input);
}
