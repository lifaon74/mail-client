import { IEmailContactList } from '../shared/email-concat/email-contact-list/email-contact-list.type';
import { createEmailHeaderContactList } from '../shared/email-concat/email-header-contact-list/create-email-header-contact-list';
import { IEmailHeaderTo } from './email-header-to.type';

export function createEmailHeaderTo(
  emailContactList: IEmailContactList,
): IEmailHeaderTo {
  return createEmailHeaderContactList({
    key: 'To',
    emailContactList,
  });
}
