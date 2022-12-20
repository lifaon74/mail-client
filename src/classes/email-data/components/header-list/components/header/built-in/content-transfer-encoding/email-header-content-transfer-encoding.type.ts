import { IEmailHeader } from '../../email-header.type';
import {
  IEmailHeaderContentTransferEncodingGetMimeTypeTrait,
} from './traits/get-content-transfer-encoding/email-header-content-transfer-encoding.get-content-transfer-encoding.trait';

export interface IEmailHeaderContentTransferEncoding extends IEmailHeader, //
  IEmailHeaderContentTransferEncodingGetMimeTypeTrait
  //
{
}
