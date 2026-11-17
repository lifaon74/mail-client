import { u32 } from '@lifaon/number-types';
import { get_not_a_char_error_message } from '../../../char/functions/assert/errors/get-not-a-char-error-message';
import { is_char } from '../../../char/functions/assert/is-char';
import { char_string_t } from '../../char-string.type';
import { char_string_new } from '../char-string-new';

export function char_string_from_string(
  input: string,
): char_string_t {
  const length: u32 = input.length;
  const output: char_string_t = char_string_new(length);
  for (let i = 0; i < length; i++) {
    const value: u32 = input.charCodeAt(i);
    if (is_char(value)) {
      output[i] = input.charCodeAt(i);
    } else {
      throw new Error(`${get_not_a_char_error_message(value)} at position ${i}`);
    }
  }
  return output;
}
