import { u32 } from '@lifaon/number-types';
import { is_http_white_space_char } from '../../../../char/functions/is/http/is-http-white-space-char';
import { char_string_t } from '../../../char-string.type';
import { char_string_length } from '../../char-string-length';

export function get_char_string_trim_end_index(
  input: char_string_t,
): number {
  let index: u32 = char_string_length(input) - 1;
  while (
    (index >= 0)
    && is_http_white_space_char(input[index])
    ) {
    index--;
  }
  return index + 1;

}
