import { createEmailContactListFromString } from '../shared/email-concat/email-contact-list/create-email-contact-list-from-string';
import { createEmailHeaderReplyTo } from './create-email-header-reply-to';
import { IEmailHeaderReplyTo } from './email-header-reply-to.type';

export function createEmailHeaderReplyToFromValueString(
  input: string,
): IEmailHeaderReplyTo {
  return createEmailHeaderReplyTo(
    createEmailContactListFromString(input),
  );
}
