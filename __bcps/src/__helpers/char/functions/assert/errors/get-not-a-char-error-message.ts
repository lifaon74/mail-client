import { get_char_debug_string_value } from './get-char-debug-string-value';

export function get_not_a_char_error_message(
  input: number,
): string {
  return `Expected character in the range [0-127], found ${get_char_debug_string_value(input)}`;
}
