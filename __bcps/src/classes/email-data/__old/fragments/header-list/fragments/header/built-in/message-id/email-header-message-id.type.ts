import { IEmailHeader } from '../../email-header.type';
import { IEmailHeaderMessageIdGetMessageIdTrait } from './traits/get-message-id/email-header-message-id.get-message-id.trait';

export interface IEmailHeaderMessageId extends IEmailHeader, //
  IEmailHeaderMessageIdGetMessageIdTrait
  //
{
}
