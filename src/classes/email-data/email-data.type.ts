import { IToStringTrait } from '@lifaon/traits';
import { IEmailDataGetBodyTrait } from './traits/get-body/email-data.get-body.trait';
import { IEmailDataGetHeadersTrait } from './traits/get-headers/email-data.get-headers.trait';

export interface IEmailData extends //
  IEmailDataGetHeadersTrait,
  IEmailDataGetBodyTrait,
  IToStringTrait
  //
{
}
