import { u32 } from '@lifaon/number-types';
import { char_string_t } from '../char-string.type';

export function char_string_new(
  size: u32,
): char_string_t {
  return new Uint8Array(size);
}
