import { IMessageId } from '../../../classes/message-id/message-id.type';

export type IMessageIdLike =
  | IMessageId
  ;

export function messageIdLikeToMessageId(
  input: IMessageIdLike,
): IMessageId {
  return input;
}
