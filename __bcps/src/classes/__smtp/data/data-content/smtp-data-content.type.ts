import { IToStringTrait } from '@lifaon/traits';
import { ISMTPDataContentGetBodyTrait } from './traits/get-body/smtp-data-content.get-body.trait';
import { ISMTPDataContentGetHeadersTrait } from './traits/get-headers/smtp-data-content.get-headers.trait';

export interface ISMTPDataContentHeader extends //
  ISMTPDataContentGetHeadersTrait,
  ISMTPDataContentGetBodyTrait,
  IToStringTrait
  //
{
}
