import { char_string_t } from '../../char-string.type';

export function char_string_shallow_slice(
  input: char_string_t,
  begin?: number,
  end?: number,
): char_string_t {
  return input.subarray(begin, end);
}
