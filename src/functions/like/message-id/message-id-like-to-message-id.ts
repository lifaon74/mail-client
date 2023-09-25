import { IMessageId } from '../../../classes/message-id/__old/message-id.type';

export type IMessageIdLike =
  | IMessageId
  ;

export function messageIdLikeToMessageId(
  input: IMessageIdLike,
): IMessageId {
  return input;
}
