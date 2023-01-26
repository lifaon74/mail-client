import { createMessageIdFromString } from '../../../../../../../message-id/create-message-id-from-string';
import { createEmailHeaderMessageId } from './create-email-header-message-id';
import { IEmailHeaderMessageId } from './email-header-message-id.type';

export function createEmailHeaderMessageIdFromValueString(
  input: string,
): IEmailHeaderMessageId {
  return createEmailHeaderMessageId(
    createMessageIdFromString(input),
  );
}
