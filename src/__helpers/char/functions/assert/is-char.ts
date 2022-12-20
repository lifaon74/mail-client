import { u32 } from '@lifaon/number-types';
import { char_t } from '../../char.type';

export function is_char(
  input: u32,
): input is char_t {
  return (input < 0x80);
}

// export function is_char(
//   input: number,
// ): input is char_t {
//   return (input >= 0)
//     && (input < 0x80);
// }

