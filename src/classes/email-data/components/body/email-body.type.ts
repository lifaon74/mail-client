import { IToStringTrait } from '@lifaon/traits';
import { IEmailBodyGetDataTrait } from './traits/get-data/email-body.get-data.trait';

export interface IEmailBody extends //
  IEmailBodyGetDataTrait,
  IToStringTrait
  //
{
}
