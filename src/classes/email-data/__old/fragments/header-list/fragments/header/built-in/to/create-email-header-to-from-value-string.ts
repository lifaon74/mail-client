import { createEmailContactListFromString } from '../shared/email-concat/email-contact-list/create-email-contact-list-from-string';
import { createEmailHeaderTo } from './create-email-header-to';
import { IEmailHeaderTo } from './email-header-to.type';

export function createEmailHeaderToFromValueString(
  input: string,
): IEmailHeaderTo {
  return createEmailHeaderTo(
    createEmailContactListFromString(input),
  );
}
