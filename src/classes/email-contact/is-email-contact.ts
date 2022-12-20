import { IEmailContact } from './email-contact.type';
import { hasEmailContactGetAddressTrait } from './traits/get-address/has-email-contact-get-address-trait';
import { hasEmailContactGetNameTrait } from './traits/get-name/has-email-contact-get-name-trait';
import { hasEmailContactSetNameTrait } from './traits/set-name/has-email-contact-set-name-trait';

export function isEmailContact(
  value: unknown,
): value is IEmailContact {
  return hasEmailContactGetAddressTrait(value)
    && hasEmailContactGetNameTrait(value)
    && hasEmailContactSetNameTrait(value)
    ;
}
