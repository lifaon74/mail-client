import { IToStringTrait } from '@lifaon/traits';
import { IEmailContactGetAddressTrait } from './traits/get-address/email-contact.get-address.trait';
import { IEmailContactGetNameTrait } from './traits/get-name/email-contact.get-name.trait';
import { IEmailContactSetNameTrait } from './traits/set-name/email-contact.set-name.trait';

export interface IEmailContact extends //
  IEmailContactGetNameTrait,
  IEmailContactSetNameTrait,
  IEmailContactGetAddressTrait,
  IToStringTrait
  //
{
}
