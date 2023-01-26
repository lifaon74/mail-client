import { createEmailHeaderMessageIdList } from '../shared/message-id/email-header-message-id-list/create-email-header-contact-list';
import { IMessageIdList } from '../shared/message-id/message-id-list/message-id-list.type';
import { IEmailHeaderReferences } from './email-header-references.type';
import { HEADER_REFERENCES_KEY_NAME } from './header-references-key.contant';

export function createEmailHeaderReferences(
  messageIdList: IMessageIdList,
): IEmailHeaderReferences {
  return createEmailHeaderMessageIdList({
    key: HEADER_REFERENCES_KEY_NAME,
    messageIdList,
  });
}
