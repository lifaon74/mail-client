import { IEmailHeader } from './email-header.type';

export interface ICreateEmailHeaderOptions {
  key: string; // expected valid
  value: string; // expected valid
}

export function createEmailHeader(
  {
    key: _key,
    value: _value,
  }: ICreateEmailHeaderOptions,
): IEmailHeader {

  const getKey = (): string => {
    return _key;
  };

  const setKey = (
    value: string,
  ): void => {
    _key = value;
  };

  const getValue = (): string => {
    return _value;
  };

  const setValue = (
    value: string,
  ): void => {
    _value = value;
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


