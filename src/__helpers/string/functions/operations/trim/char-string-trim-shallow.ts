import { char_string_t } from '../../../char-string.type';
import { get_char_string_trim_end_index } from './get-char-string-trim-end-index';
import { get_char_string_trim_start_index } from './get-char-string-trim-start-index';

export function char_string_trim_shallow(
  input: char_string_t,
): char_string_t {
  return input.subarray(
    get_char_string_trim_start_index(input),
    get_char_string_trim_end_index(input),
  );
}
