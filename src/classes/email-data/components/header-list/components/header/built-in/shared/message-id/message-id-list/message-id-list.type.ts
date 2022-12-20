import { IReadonlyArrayTraitCollection } from '@lifaon/traits';
import { IMessageId } from '../../../../../../../../../message-id/message-id.type';
import { IMessageIdListToStringTrait } from './traits/to-string/message-id-list.to-string.trait';

export interface IMessageIdList extends //
  IReadonlyArrayTraitCollection<IMessageId>,
  IMessageIdListToStringTrait
  //
{
}
