import { createIterator, IIteratorTraitCollection } from '@lifaon/traits';
import {
  createMimeTypeParameterKey,
  createMimeTypeParameterKeyFromString,
} from './components/mime-type-parameter/components/mime-type-parameter-key/create-mime-type-parameter-key';
import { IMimeTypeParameterKey } from './components/mime-type-parameter/components/mime-type-parameter-key/mime-type-parameter-key.type';
import {
  createMimeTypeParameterValue,
  createMimeTypeParameterValueFromString,
  unquoteMimeTypeParameterValueStringQuoted,
} from './components/mime-type-parameter/components/mime-type-parameter-value/create-mime-type-parameter-value';
import {
  IMimeTypeParameterValue,
} from './components/mime-type-parameter/components/mime-type-parameter-value/mime-type-parameter-value.type';
import { createMimeTypeParameter, MIME_TYPE_PARAMETER_PATTERN } from './components/mime-type-parameter/create-mime-type-parameter';
import { IMimeTypeParameter } from './components/mime-type-parameter/mime-type-parameter.type';
import { IMimeTypeParameterList } from './mime-type-parameter-list.type';

// const NAME_AND_VALUE_REGEXP: RegExp = new RegExp(`\\s*(${HTTP_TOKEN_PATTERN}+)(?:=(${HTTP_TOKEN_PATTERN}+|(?:"(?:${HTTP_TOKEN_PATTERN}|(?:\\\\")|(?:\\\\\\\\))+")))?\\s*(?:;|$)`, 'g');
const MIME_TYPE_PARAMETER_LIST_KEY_AND_VALUE_REGEXP: RegExp = new RegExp(`\\s*${MIME_TYPE_PARAMETER_PATTERN}\\s*(?:;|$)`, 'g');

export function createMimeTypeParameterList(
  _map: Map<string, IMimeTypeParameter> = new Map<string, IMimeTypeParameter>(),
): IMimeTypeParameterList {

  /* ITEMS */

  const getItem = (
    key: string,
  ): IMimeTypeParameter | undefined => {
    if (_map.has(key)) {
      return _map.get(key);
    } else {
      return void 0;
    }
  };

  const addItem = (
    item: IMimeTypeParameter,
  ): void => {
    _map.set(
      item.toString(),
      item,
    );
  };

  const listItems = (): IIteratorTraitCollection<void, IMimeTypeParameter, void> => {
    return createIterator<void, IMimeTypeParameter, void>(_map.values());
  };

  /* STRING TO STRING */

  const getSize = (): number => {
    return _map.size;
  };

  const get = (
    key: string,
  ): string | undefined => {
    const item: IMimeTypeParameter | undefined = getItem(key);
    if (item === void 0) {
      return void 0;
    } else {
      const value: IMimeTypeParameterValue | null = item.getValue();
      return (value === null)
        ? ''
        : value.get();
    }
  };

  const set = (
    key: string,
    value: string,
  ): void => {
    const _key: IMimeTypeParameterKey = createMimeTypeParameterKeyFromString(key);

    const _value: IMimeTypeParameterValue | null = (value === '')
      ? null
      : createMimeTypeParameterValueFromString(value);

    addItem(
      createMimeTypeParameter({
        key: _key,
        value: _value,
      }),
    );
  };

  const has = (
    key: string,
  ): boolean => {
    return _map.has(key);
  };

  const _delete = (
    key: string,
  ): void => {
    if (_map.has(key)) {
      throw new Error(`Key does not exist`);
    } else {
      _map.delete(key);
    }
  };

  const iterator = (): IIteratorTraitCollection<void, [string, string], void> => {
    return listItems()
      .map<[string, string]>((value: IMimeTypeParameter): [string, string] => {
        const _value: IMimeTypeParameterValue | null = value.getValue();
        return [
          value.getKey().toString(),
          (_value === null)
            ? ''
            : _value.toString(),
        ];
      });
  };

  const toString = (): string => {
    let output: string = '';
    const iterator: Iterator<IMimeTypeParameter> = _map.values();
    let result: IteratorResult<IMimeTypeParameter>;

    if (!(result = iterator.next()).done) {
      output += result.value.toString();
    }

    while (!(result = iterator.next()).done) {
      output += `; ${result.value.toString()}`;
    }

    return output;
  };

  return {
    getItem,
    addItem,
    listItems,
    getSize,
    get,
    set,
    has,
    delete: _delete,
    [Symbol.iterator]: iterator,
    toString,
  };
}

/*-----*/

export function createMimeTypeParameterListFromString(
  input: string,
): IMimeTypeParameterList {
  let match: RegExpExecArray | null;
  let index: number = 0;
  const items: IMimeTypeParameter[] = [];

  while ((match = MIME_TYPE_PARAMETER_LIST_KEY_AND_VALUE_REGEXP.exec(input)) !== null) {
    if ((index === 0) && (match.index !== 0)) {
      throw new Error(`Invalid parameters`);
    }

    const [, keyString, valueString] = match;

    const key: IMimeTypeParameterKey = createMimeTypeParameterKey(keyString);

    const value: IMimeTypeParameterValue | null = (valueString === void 0)
      ? null
      : createMimeTypeParameterValue(
        valueString.startsWith('"')
          ? unquoteMimeTypeParameterValueStringQuoted(valueString)
          : valueString,
      );

    items.push(
      createMimeTypeParameter({
        key,
        value,
      }),
    );

    index = match.index + match[0].length;
  }

  if (index !== input.length) {
    throw new Error(`Invalid parameters`);
  }

  return createMimeTypeParameterListFromIterable(items);
}

export function createMimeTypeParameterListFromIterable(
  items: Iterable<IMimeTypeParameter>,
): IMimeTypeParameterList {
  const _map: Map<string, IMimeTypeParameter> = new Map<string, IMimeTypeParameter>();

  const iterator: Iterator<IMimeTypeParameter> = items[Symbol.iterator]();
  let result: IteratorResult<IMimeTypeParameter>;
  while (!(result = iterator.next()).done) {
    const key: string = result.value.getKey().toString();
    if (_map.has(key)) {
      throw new Error(`Key already exists`);
    } else {
      _map.set(key, result.value);
    }
  }

  return createMimeTypeParameterList(_map);
}
