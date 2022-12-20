import { char_t } from '../../../char.type';
import { is_alpha_numeric_char } from '../is-alpha-numeric-char';

export function is_http_token_char(
  input: char_t,
): boolean {
  return (
    is_alpha_numeric_char(input)
    || (input === 0x21) // !
    || (input === 0x23) // #
    || (input === 0x24) // $
    || (input === 0x25) // %
    || (input === 0x26) // &
    || (input === 0x27) // '
    || (input === 0x2a) // *
    || (input === 0x2b) // +
    || (input === 0x2d) // -
    || (input === 0x2e) // .
    || (input === 0x5e) // ^
    || (input === 0x5f) // _
    || (input === 0x60) // `
    || (input === 0x7c) // |
    || (input === 0x7e) // ~
  );
}
