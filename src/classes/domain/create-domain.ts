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

/*-----*/

export function createDomainFromString(
  input: string,
): IDomain {
  try {
    const url: URL = new URL(`https://${input}`);
    if (input === url.hostname) {
      return createDomain(input);
    } else {
      throw null;
    }
  } catch {
    throw new Error(`Invalid domain`);
  }
}

