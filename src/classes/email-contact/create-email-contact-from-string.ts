import { createEmailAddressFromString } from '../email-address/create-email-address-from-string';
import { createEmailContactNameFromString } from './components/email-contact-name/create-email-contact-name';
import { createEmailContact } from './create-email-contact';
import { IEmailContact } from './email-contact.type';

export function createEmailContactFromString(
  input: string,
): IEmailContact {
  const index: number = input.lastIndexOf('<');

  if (index === -1) {
    return createEmailContact({
      name: null,
      address: createEmailAddressFromString(input),
    });
  } else if (input.endsWith('>')) {
    const name: string = input.slice(0, index).trimEnd();
    const address: string = input.slice(index + 1, -1);
    return createEmailContact({
      name: (name === '')
        ? null
        : createEmailContactNameFromString(name),
      address: createEmailAddressFromString(address),
    });
  } else {
    throw new Error(`Invalid email contact format`);
  }
}
