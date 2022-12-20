import { char_t } from '../../../char.type';

export function is_http_white_space_char(
  input: char_t,
): boolean {
  return (
    (input === 0x20) // SP
    || (input === 0x09) // \t
    || (input === 0x0d) // \r
    || (input === 0x0a) // \n
  );
}
