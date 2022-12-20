import { char_t } from '../../../char.type';
import { char_to_string } from '../../convert/char-to-string';

export function get_char_debug_string_value(
  input: char_t,
): string {
  return `'${char_to_string(input)}' (0x${input.toString(16).padStart(2, '0')})`;
}
