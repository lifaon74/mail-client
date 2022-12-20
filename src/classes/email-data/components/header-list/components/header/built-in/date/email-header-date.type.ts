import { IEmailHeader } from '../../email-header.type';
import { IEmailHeaderDateGetDateTrait } from './traits/get-date/email-header-date.get-date.trait';

export interface IEmailHeaderDate extends IEmailHeader, //
  IEmailHeaderDateGetDateTrait
  //
{
}
