import { createEmailContactListFromString } from '../shared/email-concat/email-contact-list/create-email-contact-list-from-string';
import { createEmailHeaderFrom } from './create-email-header-from';
import { IEmailHeaderFrom } from './email-header-from.type';

export function createEmailHeaderFromFromValueString(
  input: string,
): IEmailHeaderFrom {
  return createEmailHeaderFrom(
    createEmailContactListFromString(input),
  );
}
