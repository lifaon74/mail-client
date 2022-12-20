import { IEmailHeader } from '../../../../email-header.type';
import { IGetMessageIdListTrait } from '../traits/get-message-id-list/get-message-id-list.trait';

export interface IEmailHeaderMessageIdList extends IEmailHeader, //
  IGetMessageIdListTrait
  //
{
}
