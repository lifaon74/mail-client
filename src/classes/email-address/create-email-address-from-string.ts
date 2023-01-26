import { createDomainFromString } from '../domain/create-domain-from-string';
import { createEmailAddress } from './create-email-address';
import { IEmailAddress } from './email-address.type';

const EMAIL_ADDRESS_LOCAL_PART_REGEXP: RegExp = new RegExp('^[A-Za-z0-9!#$%&\'*+\\-/=?^_`{|}~.]+$');

// [\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f] === [^\x09-\x0a\x0d\x20\x5c]
const EMAIL_ADDRESS_QUOTED_LOCAL_PART_REGEXP: RegExp = new RegExp('^"(?:[^\\x09-\\x0a\\x0d\\x20\\x5c]|\\\\[^\\x0a\\x0d])+"$');

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
      EMAIL_ADDRESS_LOCAL_PART_REGEXP.test(localpart)
      || EMAIL_ADDRESS_QUOTED_LOCAL_PART_REGEXP.test(localpart)
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

/*-------*/

function createInvalidEmailAddressError(
  message: string,
): Error {
  return new Error(`Invalid email address: ${message}`);
}
