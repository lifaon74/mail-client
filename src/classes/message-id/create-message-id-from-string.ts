import { createMessageId } from './create-message-id';
import { IMessageId } from './message-id.type';

export function createMessageIdFromString(
  input: string,
): IMessageId {
  const parts: string[] = input.split('@');
  if (parts.length === 2) {
    return createMessageId({
      left: parts[0],
      right: parts[1],
    });
  } else {
    throw new Error(`Invalid MessageId`);
  }
}
