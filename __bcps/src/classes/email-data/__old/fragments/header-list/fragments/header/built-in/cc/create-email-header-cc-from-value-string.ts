import { createEmailContactListFromString } from '../shared/email-concat/email-contact-list/create-email-contact-list-from-string';
import { createEmailHeaderCc } from './create-email-header-cc';
import { IEmailHeaderCc } from './email-header-cc.type';

export function createEmailHeaderCcFromValueString(
  input: string,
): IEmailHeaderCc {
  return createEmailHeaderCc(
    createEmailContactListFromString(input),
  );
}
