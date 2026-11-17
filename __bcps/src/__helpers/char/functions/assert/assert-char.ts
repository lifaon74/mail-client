import { char_t } from '../../char.type';
import { get_expected_char_error_message } from './errors/get-expected-char-error-message';

export function assert_char(
  found: char_t,
  expected: char_t,
): void {
  if (found !== expected) {
    throw new Error(get_expected_char_error_message(found, expected));
  }
}

