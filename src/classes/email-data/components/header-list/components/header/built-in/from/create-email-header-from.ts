import { IEmailContactList } from '../shared/email-concat/email-contact-list/email-contact-list.type';
import { createEmailHeaderContactList } from '../shared/email-concat/email-header-contact-list/create-email-header-contact-list';
import { IEmailHeaderFrom } from './email-header-from.type';
import { HEADER_FROM_KEY_NAME } from './header-from-key.contant';

export function createEmailHeaderFrom(
  emailContactList: IEmailContactList,
): IEmailHeaderFrom {
  return createEmailHeaderContactList({
    key: HEADER_FROM_KEY_NAME,
    emailContactList,
  });
}
