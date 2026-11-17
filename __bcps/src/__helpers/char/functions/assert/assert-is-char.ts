import { u32 } from '@lifaon/number-types';
import { char_t } from '../../char.type';
import { get_not_a_char_error_message } from './errors/get-not-a-char-error-message';
import { is_char } from './is-char';

export function assert_is_char(
  input: u32,
): asserts input is char_t {
  if (!is_char(input)) {
    throw new Error(get_not_a_char_error_message(input));
  }
}

