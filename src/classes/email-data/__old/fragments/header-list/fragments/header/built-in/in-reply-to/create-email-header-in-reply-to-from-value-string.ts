import { createMessageIdListFromString } from '../shared/message-id/message-id-list/create-message-id-list-from-string';
import { createEmailHeaderInReplyTo } from './create-email-header-in-reply-to';
import { IEmailHeaderInReplyTo } from './email-header-in-reply-to.type';

export function createEmailHeaderInReplyToFromValueString(
  input: string,
): IEmailHeaderInReplyTo {
  return createEmailHeaderInReplyTo(
    createMessageIdListFromString(input),
  );
}
