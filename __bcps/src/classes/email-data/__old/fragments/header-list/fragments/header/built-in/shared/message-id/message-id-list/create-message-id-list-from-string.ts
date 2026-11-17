import { createMessageIdFromString } from '../../../../../../../../../../message-id/implementations/functions/create-message-id-from-string';
import { createMessageIdList } from './create-message-id-list';
import { IMessageIdList } from './message-id-list.type';

export function createMessageIdListFromString(
  input: string,
): IMessageIdList {
  return createMessageIdList(
    input.split(/,\s*/).map(createMessageIdFromString),
  );
}
