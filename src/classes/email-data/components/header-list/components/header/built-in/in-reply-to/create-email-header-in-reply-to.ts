import { createEmailHeaderMessageIdList } from '../shared/message-id/email-header-message-id-list/create-email-header-contact-list';
import { IMessageIdList } from '../shared/message-id/message-id-list/message-id-list.type';
import { IEmailHeaderInReplyTo } from './email-header-in-reply-to.type';

export function createEmailHeaderInReplyTo(
  messageIdList: IMessageIdList,
): IEmailHeaderInReplyTo {
  return createEmailHeaderMessageIdList({
    key: 'In-Reply-To',
    messageIdList,
  });
}
