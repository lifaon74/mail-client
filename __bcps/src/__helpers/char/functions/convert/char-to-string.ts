import { char_t } from '../../char.type';

export function char_to_string(
  input: char_t,
): string {
  return String.fromCharCode(input);
}

