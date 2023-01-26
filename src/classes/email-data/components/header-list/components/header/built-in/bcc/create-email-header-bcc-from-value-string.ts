import { createEmailContactListFromString } from '../shared/email-concat/email-contact-list/create-email-contact-list-from-string';
import { createEmailHeaderBcc } from './create-email-header-bcc';
import { IEmailHeaderBcc } from './email-header-bcc.type';

export function createEmailHeaderBccFromValueString(
  input: string,
): IEmailHeaderBcc {
  return createEmailHeaderBcc(
    createEmailContactListFromString(input),
  );
}
