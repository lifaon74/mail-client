import { char_string_t } from '../../char-string.type';

export function char_string_to_string(
  input: char_string_t,
): string {
  return String.fromCharCode.apply(null, input);
}

