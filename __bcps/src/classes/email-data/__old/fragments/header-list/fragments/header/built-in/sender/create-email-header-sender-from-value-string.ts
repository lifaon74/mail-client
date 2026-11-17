import { createEmailContactFromString } from '../../../../../../../../email-contact/create-email-contact-from-string';
import { createEmailHeaderSender } from './create-email-header-sender';
import { IEmailHeaderSender } from './email-header-sender.type';

export function createEmailHeaderSenderFromValueString(
  input: string,
): IEmailHeaderSender {
  return createEmailHeaderSender(
    createEmailContactFromString(input),
  );
}
