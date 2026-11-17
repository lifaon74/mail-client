import { ISMTPDataContentHeader } from './smtp-data-content-header.type';

export function createSMTPDataContentHeader(
  _key: string,
  _value: string,
): ISMTPDataContentHeader {

  const getKey = (): string => {
    return _key;
  };

  const getValue = (): string => {
    return _value;
  };

  const toString = (): string => {
    return `${_key}: ${_value}`;
  };

  return {
    getKey,
    getValue,
    toString,
  };
}

/*-----*/

export function createSMTPDataContentHeaderFromString(
  input: string,
): ISMTPDataContentHeader {
  throw 'TODO'; // TODO
}

