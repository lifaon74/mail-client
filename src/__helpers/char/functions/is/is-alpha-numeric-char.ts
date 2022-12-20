import { char_t } from '../../char.type';
import { is_alpha_char } from './is-alpha-char';
import { is_numeric_char } from './is-numeric-char';

export function is_alpha_numeric_char(
  input: char_t,
): boolean {
  return is_alpha_char(input)
    || is_numeric_char(input);
}
