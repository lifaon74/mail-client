import { IDomain } from '../domain/domain.type';
import { IEmailAddress } from './email-address.type';

export interface ICreateEmailAddressOptions {
  localpart: string; // expected valid
  domain: IDomain;
}

export function createEmailAddress(
  {
    localpart: _localpart,
    domain: _domain,
  }: ICreateEmailAddressOptions,
): IEmailAddress {

  const getLocalPart = (): string => {
    return _localpart;
  };

  const getLocalPartUnquoted = (): string => {
    return _localpart
      .replace(new RegExp('\\\\([^\\x0a\\x0d])', 'g'), '$1')
      .slice(1, -1);
  };

  const getDomain = (): IDomain => {
    return _domain;
  };

  const toString = (): string => {
    return `${_localpart}@${_domain.toString()}`;
  };

  return {
    getLocalPart,
    getLocalPartUnquoted,
    getDomain,
    toString,
  };
}

