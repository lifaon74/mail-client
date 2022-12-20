import { IToStringTrait } from '@lifaon/traits';
import { IMessageIdGetLeftTrait } from './traits/get-left/message-id.get-left.trait';
import { IMessageIdGetRightTrait } from './traits/get-right/message-id.get-right.trait';

export interface IMessageId extends //
  IMessageIdGetLeftTrait,
  IMessageIdGetRightTrait,
  IToStringTrait
  //
{
}
