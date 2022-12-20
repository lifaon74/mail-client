import { IToStringTrait } from '@lifaon/traits';
import { IEmailAddressGetDomainTrait } from './traits/get-domain/email-address.get-domain.trait';
import { IEmailAddressGetLocalPartUnquotedTrait } from './traits/get-local-part-unquoted/email-address.get-local-part-unquoted.trait';
import { IEmailAddressGetLocalPartTrait } from './traits/get-local-part/email-address.get-local-part.trait';

export interface IEmailAddress extends //
  IEmailAddressGetLocalPartTrait,
  IEmailAddressGetLocalPartUnquotedTrait,
  IEmailAddressGetDomainTrait,
  IToStringTrait
  //
{
}
