import { u32 } from '@lifaon/number-types';
import { char_string_t } from '../../char-string.type';
import { char_string_length } from '../char-string-length';
import { char_string_new } from '../char-string-new';
import { char_string_set } from './char-string-set';

export function char_string_join(
  inputs: ArrayLike<char_string_t>,
  separator: char_string_t,
): char_string_t {
  const inputsLength: u32 = inputs.length;
  const separatorLength: u32 = char_string_length(separator);
  let totalLength: u32 = separatorLength * Math.max(0, inputsLength - 1);

  for (let i = 0; i < inputsLength; i++) {
    totalLength += char_string_length(inputs[i]);
  }

  const output: char_string_t = char_string_new(totalLength);

  totalLength = 0;
  for (let i = 0; i < inputsLength; i++) {
    if (i > 0) {
      char_string_set(output, separator, totalLength);
      totalLength += separatorLength;
    }
    char_string_set(output, inputs[i], totalLength);
    totalLength += char_string_length(inputs[i]);
  }

  return output;
}

