import { IEmailContactList } from '../shared/email-concat/email-contact-list/email-contact-list.type';
import { createEmailHeaderContactList } from '../shared/email-concat/email-header-contact-list/create-email-header-contact-list';
import { IEmailHeaderFrom } from './email-header-from.type';

export function createEmailHeaderFrom(
  emailContactList: IEmailContactList,
): IEmailHeaderFrom {
  return createEmailHeaderContactList({
    key: 'From',
    emailContactList,
  });
}
