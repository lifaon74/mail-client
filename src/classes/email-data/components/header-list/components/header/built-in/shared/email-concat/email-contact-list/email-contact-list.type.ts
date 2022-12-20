import { IReadonlyArrayTraitCollection } from '@lifaon/traits';
import { IEmailContact } from '../../../../../../../../../email-contact/email-contact.type';
import { IEmailContactListToStringTrait } from './traits/to-string/email-contact-list.to-string.trait';

export interface IEmailContactList extends //
  IReadonlyArrayTraitCollection<IEmailContact>,
  IEmailContactListToStringTrait
  //
{
}
