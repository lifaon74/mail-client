import { IEmailHeader } from './components/header/email-header.type';
import { createEmailHeaderList } from './create-email-header-list';
import { IEmailHeaderList } from './email-header-list.type';

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
