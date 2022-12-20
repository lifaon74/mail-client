import { IToStringTrait } from '@lifaon/traits';
import { IEmailHeaderGetKeyTrait } from './traits/get-key/email-header.get-key.trait';
import { IEmailHeaderGetValueTrait } from './traits/get-value/email-header.get-value.trait';

export interface IEmailHeader extends //
  IEmailHeaderGetKeyTrait,
  IEmailHeaderGetValueTrait,
  IToStringTrait
  //
{
}
