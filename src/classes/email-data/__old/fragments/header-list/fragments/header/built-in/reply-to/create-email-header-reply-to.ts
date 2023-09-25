import { IEmailContactList } from '../shared/email-concat/email-contact-list/email-contact-list.type';
import { createEmailHeaderContactList } from '../shared/email-concat/email-header-contact-list/create-email-header-contact-list';
import { IEmailHeaderReplyTo } from './email-header-reply-to.type';
import { HEADER_REPLY_TO_KEY_NAME } from './header-reply-to-key.contant';

export function createEmailHeaderReplyTo(
  emailContactList: IEmailContactList,
): IEmailHeaderReplyTo {
  return createEmailHeaderContactList({
    key: HEADER_REPLY_TO_KEY_NAME,
    emailContactList,
  });
}
