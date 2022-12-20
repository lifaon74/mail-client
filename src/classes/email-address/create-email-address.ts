import { createDomainFromString } from '../domain/create-domain';
import { IDomain } from '../domain/domain.type';
import { IEmailAddress } from './email-address.type';

const LOCAL_PART_REGEXP: RegExp = new RegExp('^[A-Za-z0-9!#$%&\'*+\\-/=?^_`{|}~.]+$');

// [\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f] === [^\x09-\x0a\x0d\x20\x5c]
const QUOTED_LOCAL_PART_REGEXP: RegExp = new RegExp('^"(?:[^\\x09-\\x0a\\x0d\\x20\\x5c]|\\\\[^\\x0a\\x0d])+"$');

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

/*-----*/

export function createEmailAddressFromString(
  input: string,
): IEmailAddress {
  const index: number = input.lastIndexOf('@');

  if (index === -1) {
    throw createInvalidEmailAddressError(`missing @`);
  }

  const localpart: string = input.slice(0, index);
  const domain: string = input.slice(index + 1);

  /* LOCALPART */
  if (
    !(
      LOCAL_PART_REGEXP.test(localpart)
      || QUOTED_LOCAL_PART_REGEXP.test(localpart)
    )
    || (localpart.length > 64)
  ) {
    throw createInvalidEmailAddressError(`invalid localpart`);
  }

  return createEmailAddress({
    localpart,
    domain: createDomainFromString(domain),
  });
}

/*---------*/

function createInvalidEmailAddressError(
  message: string,
): Error {
  return new Error(`Invalid email address: ${message}`);
}
