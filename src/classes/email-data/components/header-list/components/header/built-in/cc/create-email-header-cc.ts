import { IEmailContactList } from '../shared/email-concat/email-contact-list/email-contact-list.type';
import { createEmailHeaderContactList } from '../shared/email-concat/email-header-contact-list/create-email-header-contact-list';
import { IEmailHeaderCc } from './email-header-cc.type';

export function createEmailHeaderCc(
  emailContactList: IEmailContactList,
): IEmailHeaderCc {
  return createEmailHeaderContactList({
    key: 'Cc',
    emailContactList,
  });
}
