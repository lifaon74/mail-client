import { IEmailHeader } from '../../email-header.type';
import { IEmailHeaderSenderGetSenderTrait } from './traits/get-sender/email-header-sender.get-sender.trait';

export interface IEmailHeaderSender extends IEmailHeader, //
  IEmailHeaderSenderGetSenderTrait
  //
{
}
