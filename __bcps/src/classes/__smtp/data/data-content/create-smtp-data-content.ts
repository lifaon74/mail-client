import { ISMTPDataContentHeader } from './smtp-data-content.type';

export function createSMTPDataContent(
  _key: string,
  _value: string,
): ISMTPDataContentHeader {

  const getHeaders = (): string => {
    return _key;
  };

  const getBody = (): string => {
    return _value;
  };

  const toString = (): string => {
    return `${_key}: ${_value}`;
  };

  return {
    getHeaders,
    getBody,
    toString,
  };
}

/*-----*/

export function createSMTPDataContentFromString(
  input: string,
): ISMTPDataContentHeader {
  throw 'TODO'; // TODO
}

