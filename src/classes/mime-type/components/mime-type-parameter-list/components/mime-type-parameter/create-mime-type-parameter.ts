import {
  createMimeTypeParameterKey,
  MIME_TYPE_PARAMETER_KEY_PATTERN,
} from './components/mime-type-parameter-key/create-mime-type-parameter-key';
import { IMimeTypeParameterKey } from './components/mime-type-parameter-key/mime-type-parameter-key.type';
import {
  createMimeTypeParameterValue,
  MIME_TYPE_PARAMETER_VALUE_STRING_PATTERN,
  unquoteMimeTypeParameterValueStringQuoted,
} from './components/mime-type-parameter-value/create-mime-type-parameter-value';
import { IMimeTypeParameterValue } from './components/mime-type-parameter-value/mime-type-parameter-value.type';
import { IMimeTypeParameter } from './mime-type-parameter.type';

export const MIME_TYPE_PARAMETER_PATTERN = `(${MIME_TYPE_PARAMETER_KEY_PATTERN})(?:=(${MIME_TYPE_PARAMETER_VALUE_STRING_PATTERN}))?`;
const MIME_TYPE_PARAMETER_REGEXP = new RegExp(`^${MIME_TYPE_PARAMETER_PATTERN}$`);

export interface ICreateMimeTypeParameterOptions {
  key: IMimeTypeParameterKey;
  value: IMimeTypeParameterValue | null;
}

export function createMimeTypeParameter(
  {
    key: _key,
    value:_value,
  }: ICreateMimeTypeParameterOptions,
): IMimeTypeParameter {

  const getKey = (): IMimeTypeParameterKey => {
    return _key;
  };

  const setKey = (
    value: IMimeTypeParameterKey,
  ): void => {
    _key = value;
  };

  const getValue = (): IMimeTypeParameterValue | null => {
    return _value;
  };

  const setValue = (
    value: IMimeTypeParameterValue | null,
  ): void => {
    _value = value;
  };

  const hasEmptyValue = (): boolean => {
    return (_value === null)
      || (_value.get() === '');
  };

  const toString = (): string => {
    return hasEmptyValue()
      ? _key.toString()
      : `${_key.toString()}=${(_value as IMimeTypeParameterValue).toString()}`;
  };

  return {
    getKey,
    getValue,
    setValue,
    toString,
  };
}

/*-----*/

export function createMimeTypeParameterFromString(
  input: string,
): IMimeTypeParameter {
  const match: RegExpExecArray | null = MIME_TYPE_PARAMETER_REGEXP.exec(input);
  if (match === null) {
    throw new Error(`Invalid parameter`);
  } else {
    const [, keyString, valueString] = match;

    const key: IMimeTypeParameterKey = createMimeTypeParameterKey(keyString);

    const value: IMimeTypeParameterValue | null = (valueString === void 0)
      ? null
      : createMimeTypeParameterValue(
        valueString.startsWith('"')
          ? unquoteMimeTypeParameterValueStringQuoted(valueString)
          : valueString,
      );

    return createMimeTypeParameter({
      key,
      value,
    });
  }
}

