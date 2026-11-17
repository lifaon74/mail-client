import { char_t } from '../../../char.type';
import { get_char_debug_string_value } from './get-char-debug-string-value';

export function get_expected_char_error_message(
  found: char_t,
  expected: char_t,
): string {
  return `Expected ${get_char_debug_string_value(expected)}, found ${get_char_debug_string_value(found)}`;
}
