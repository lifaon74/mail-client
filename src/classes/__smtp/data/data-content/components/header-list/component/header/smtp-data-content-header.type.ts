import { IToStringTrait } from '@lifaon/traits';
import { ISMTPDataContentHeaderGetKeyTrait } from './traits/get-key/smtp-data-content-header.get-key.trait';
import { ISMTPDataContentHeaderGetValueTrait } from './traits/get-value/smtp-data-content-header.get-value.trait';

export interface ISMTPDataContentHeader extends //
  ISMTPDataContentHeaderGetKeyTrait,
  ISMTPDataContentHeaderGetValueTrait,
  IToStringTrait
  //
{
}
