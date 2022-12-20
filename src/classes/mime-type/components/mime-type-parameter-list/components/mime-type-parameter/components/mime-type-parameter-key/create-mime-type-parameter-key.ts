import { NEW } from '@lifaon/traits';
import { HTTP_TOKEN_PATTERN } from '../../../../../../../../constants/http-token-pattern.constant';
import { IMimeTypeParameterKey } from './mime-type-parameter-key.type';

export const MIME_TYPE_PARAMETER_KEY_PATTERN = `${HTTP_TOKEN_PATTERN}+`;

const MIME_TYPE_PARAMETER_KEY_REGEXP = new RegExp(`^${MIME_TYPE_PARAMETER_KEY_PATTERN}$`);

export function createMimeTypeParameterKey(
  _value: string, // expected valid
): IMimeTypeParameterKey {
  const _new = createMimeTypeParameterKey;

  const get = (): string => {
    return _value;
  };

  const set = (value: string): void => {
    if (MIME_TYPE_PARAMETER_KEY_REGEXP.test(value)) {
      _value = value;
    } else {
      throw new Error(`Invalid key`);
    }
  };

  const toString = get;

  return {
    [NEW]: _new,
    get,
    set,
    toString,
  };
}

/*-----*/

export function createMimeTypeParameterKeyFromString(
  input: string,
): IMimeTypeParameterKey {
  const instance: IMimeTypeParameterKey = createMimeTypeParameterKey('');
  instance.set(input);
  return instance;
}

