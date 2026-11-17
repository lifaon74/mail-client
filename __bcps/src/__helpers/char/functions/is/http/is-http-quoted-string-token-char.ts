import { char_t } from '../../../char.type';

export function is_http_quoted_string_token_char(
  input: char_t,
): boolean {
  return (
    (input === 0x09) // \t
    || ((0x20 <= input /* SP */) && (input <= 0x7e)) // ~
    || ((0x80 <= input) && (input <= 0xff)) // ÿ
  );
}
