import { IEmailContactList } from '../shared/email-concat/email-contact-list/email-contact-list.type';
import { createEmailHeaderContactList } from '../shared/email-concat/email-header-contact-list/create-email-header-contact-list';
import { IEmailHeaderCc } from './email-header-cc.type';
import { HEADER_CC_KEY_NAME } from './header-cc-key.contant';

export function createEmailHeaderCc(
  emailContactList: IEmailContactList,
): IEmailHeaderCc {
  return createEmailHeaderContactList({
    key: HEADER_CC_KEY_NAME,
    emailContactList,
  });
}
