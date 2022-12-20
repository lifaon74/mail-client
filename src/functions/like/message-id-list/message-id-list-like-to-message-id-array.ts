import { IMessageId } from '../../../classes/message-id/message-id.type';
import { IListLike, listLikeToArray } from '../list/list-like-to-array';
import { IMessageIdLike, messageIdLikeToMessageId } from '../message-id/message-id-like-to-message-id';

export type IMessageIdListLike = IListLike<IMessageIdLike>;

export function messageIdListLikeToMessageIdArray(
  input: IMessageIdListLike,
): IMessageId[] {
  return listLikeToArray<IMessageIdLike, IMessageId>(
    input,
    messageIdLikeToMessageId,
  );
}
