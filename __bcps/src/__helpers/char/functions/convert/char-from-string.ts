import { u32 } from '@lifaon/number-types';
import { char_t } from '../../char.type';
import { assert_is_char } from '../assert/assert-is-char';

export function char_from_string(
  input: string,
): char_t {
  if (input.length === 1) {
    const value: u32 = input.charCodeAt(0);
    assert_is_char(value);
    return value;
  } else {
    throw new Error(`input's length !== 1`);
  }
}

