import { IToStringTrait } from '@lifaon/traits';
import { IEmailContactNameGetEscapedTrait } from './traits/get-escaped/email-contact-name.get-escaped.trait';
import { IEmailContactNameGetQuotedTrait } from './traits/get-quoted/email-contact-name.get-quoted.trait';
import { IEmailContactNameGetTrait } from './traits/get/email-contact-name.get.trait';
import { IEmailContactNameRequiresQuotingTrait } from './traits/requires-quoting/email-contact-name.requires-quoting.trait';
import { IEmailContactNameSetTrait } from './traits/set/email-contact-name.set.trait';

export interface IEmailContactName extends //
  IEmailContactNameGetTrait,
  IEmailContactNameSetTrait,
  IEmailContactNameRequiresQuotingTrait,
  IEmailContactNameGetEscapedTrait,
  IEmailContactNameGetQuotedTrait,
  IToStringTrait
  //
{
}
