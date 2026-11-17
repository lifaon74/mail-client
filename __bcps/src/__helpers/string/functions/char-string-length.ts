import { u32 } from '@lifaon/number-types';
import { char_string_t } from '../char-string.type';

export function char_string_length(
  input: char_string_t,
): u32 {
  return input.length;
}
