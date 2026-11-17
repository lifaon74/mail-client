import { createEmailContactFromString } from '../../../../../../../../../../email-contact/create-email-contact-from-string';
import { createEmailContactList } from './create-email-contact-list';
import { IEmailContactList } from './email-contact-list.type';

export function createEmailContactListFromString(
  input: string,
): IEmailContactList {
  return createEmailContactList(
    input.split(/,\s*/).map(createEmailContactFromString),
  );
}
