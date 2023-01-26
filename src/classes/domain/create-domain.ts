import { IDomain } from './domain.type';

export function createDomain(
  _value: string,
): IDomain {

  const get = (): string => {
    return _value;
  };

  const toString = get;

  return {
    get,
    toString,
  };
}
