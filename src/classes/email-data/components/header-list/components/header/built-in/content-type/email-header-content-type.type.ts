import { IEmailHeader } from '../../email-header.type';
import { IEmailHeaderContentTypeGetMimeTypeTrait } from './traits/get-mime-type/email-header-content-type.get-mime-type.trait';

export interface IEmailHeaderContentType extends IEmailHeader, //
  IEmailHeaderContentTypeGetMimeTypeTrait
  //
{
}
