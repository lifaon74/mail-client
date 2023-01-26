import { IEmailBody } from '../../email-body.type';
import {
  IEmailBodyTextGetContentTransferEncodingTrait
} from './traits/get-content-transfer-encoding/create-email-body-text.get-content-transfer-encoding.trait';
import { IEmailBodyTextGetTextTrait } from './traits/get-text/create-email-body-text.get-text.trait';

export interface IEmailBodyText extends IEmailBody, //
  IEmailBodyTextGetTextTrait,
  IEmailBodyTextGetContentTransferEncodingTrait
  //
{
}
