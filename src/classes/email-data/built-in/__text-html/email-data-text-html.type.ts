import { IEmailData } from '../../email-data.type';
import { IEmailDataTextHTMLGetHTMLTrait } from './traits/get-html/create-email-data-text-html.get-html.trait';

export interface IEmailDataTextHTML extends IEmailData, //
  IEmailDataTextHTMLGetHTMLTrait
  //
{
}
