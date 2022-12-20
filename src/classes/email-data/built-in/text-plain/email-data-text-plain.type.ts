import { IEmailData } from '../../email-data.type';
import { IEmailDataTextPlainGetTextTrait } from './traits/get-text/create-email-data-text-plain.get-text.trait';

export interface IEmailDataTextPlain extends IEmailData, //
  IEmailDataTextPlainGetTextTrait
  //
{
}
