import { createIterator, IIteratorTraitCollection } from '@lifaon/traits';
import { CRLF } from '../../../../constants/crlf';
import { createEmailHeader } from './components/header/create-email-header';
import { IEmailHeader } from './components/header/email-header.type';
import { IEmailHeaderList } from './email-header-list.type';

export function createEmailHeaderList(
  _map: Map<string, IEmailHeader> = new Map<string, IEmailHeader>(),
): IEmailHeaderList {

  /* ITEMS */

  const getItem = (
    key: string,
  ): IEmailHeader | undefined => {
    if (_map.has(key)) {
      return _map.get(key);
    } else {
      return void 0;
    }
  };

  const addItem = (
    item: IEmailHeader,
  ): void => {
    _map.set(
      item.toString(),
      item,
    );
  };

  const listItems = (): IIteratorTraitCollection<void, IEmailHeader, void> => {
    return createIterator<void, IEmailHeader, void>(_map.values());
  };

  /* STRING TO STRING */

  const getSize = (): number => {
    return _map.size;
  };

  const get = (
    key: string,
  ): string | undefined => {
    const item: IEmailHeader | undefined = getItem(key);
    if (item === void 0) {
      return void 0;
    } else {
      return item.getValue();
    }
  };

  const set = (
    key: string,
    value: string,
  ): void => {
    addItem(
      createEmailHeader({
        key,
        value,
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
      .map<[string, string]>((value: IEmailHeader): [string, string] => {
        return [
          value.getKey(),
          value.getValue(),
        ];
      });
  };

  const toString = (): string => {
    let output: string = '';
    const iterator: Iterator<IEmailHeader> = _map.values();
    let result: IteratorResult<IEmailHeader>;

    if (!(result = iterator.next()).done) {
      output += result.value.toString();
    }

    while (!(result = iterator.next()).done) {
      output += `${CRLF}${result.value.toString()}`;
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

export function createEmailHeaderListFromIterable(
  items: Iterable<IEmailHeader>,
): IEmailHeaderList {
  const _map: Map<string, IEmailHeader> = new Map<string, IEmailHeader>();

  const iterator: Iterator<IEmailHeader> = items[Symbol.iterator]();
  let result: IteratorResult<IEmailHeader>;
  while (!(result = iterator.next()).done) {
    const key: string = result.value.getKey().toString();
    if (_map.has(key)) {
      throw new Error(`Key already exists`);
    } else {
      _map.set(key, result.value);
    }
  }

  return createEmailHeaderList(_map);
}
