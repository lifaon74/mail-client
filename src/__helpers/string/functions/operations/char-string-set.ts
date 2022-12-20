import { char_string_t } from '../../char-string.type';

export function char_string_set(
  input: char_string_t,
  chunk: char_string_t,
  offset?: number,
): void {
  input.set(chunk, offset);
}

