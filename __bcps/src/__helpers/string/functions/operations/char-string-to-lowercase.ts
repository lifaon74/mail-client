import { char_to_lowercase } from '../../../char/functions/operations/char-to-lowercase';
import { char_string_t } from '../../char-string.type';

export function char_string_to_lowercase(
  input: char_string_t,
): char_string_t {
  // const output: Uint8Array = new Uint8Array(input.length);
  // for (let i = 0, l = input.length; i < l; i++) {
  //   output[i] = char_to_lowercase(input[i]);
  // }
  // return output;
  return Uint8Array.from(input, char_to_lowercase);
}

