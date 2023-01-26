import { IEmailContactList } from '../shared/email-concat/email-contact-list/email-contact-list.type';
import { createEmailHeaderContactList } from '../shared/email-concat/email-header-contact-list/create-email-header-contact-list';
import { IEmailHeaderBcc } from './email-header-bcc.type';
import { HEADER_BCC_KEY_NAME } from './header-bcc-key.contant';

export function createEmailHeaderBcc(
  emailContactList: IEmailContactList,
): IEmailHeaderBcc {
  return createEmailHeaderContactList({
    key: HEADER_BCC_KEY_NAME,
    emailContactList,
  });
}
