import { IEmailHeader } from '../../../../email-header.type';
import { IGetEmailContactListTrait } from '../traits/get-email-contact-list/get-email-contact-list.trait';

export interface IEmailHeaderContactList extends IEmailHeader, //
  IGetEmailContactListTrait
  //
{
}
