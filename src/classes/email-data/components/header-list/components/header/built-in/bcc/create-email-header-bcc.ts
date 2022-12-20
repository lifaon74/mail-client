import { IEmailContactList } from '../shared/email-concat/email-contact-list/email-contact-list.type';
import { createEmailHeaderContactList } from '../shared/email-concat/email-header-contact-list/create-email-header-contact-list';
import { IEmailHeaderBcc } from './email-header-bcc.type';

export function createEmailHeaderBcc(
  emailContactList: IEmailContactList,
): IEmailHeaderBcc {
  return createEmailHeaderContactList({
    key: 'Bcc',
    emailContactList,
  });
}
