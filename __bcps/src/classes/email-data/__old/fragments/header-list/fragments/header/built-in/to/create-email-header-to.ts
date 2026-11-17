import { IEmailContactList } from '../shared/email-concat/email-contact-list/email-contact-list.type';
import { createEmailHeaderContactList } from '../shared/email-concat/email-header-contact-list/create-email-header-contact-list';
import { IEmailHeaderTo } from './email-header-to.type';
import { HEADER_TO_KEY_NAME } from './header-to-key.contant';

export function createEmailHeaderTo(
  emailContactList: IEmailContactList,
): IEmailHeaderTo {
  return createEmailHeaderContactList({
    key: HEADER_TO_KEY_NAME,
    emailContactList,
  });
}
