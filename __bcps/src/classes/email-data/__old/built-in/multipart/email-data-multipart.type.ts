import { IEmailData } from '../../../email-data.type';
import { IEmailDataMultipartGetBoundaryTrait } from './traits/get-boundary/email-data-multipart.get-boundary.trait';

export interface IEmailDataMultipart extends IEmailData, //
  IEmailDataMultipartGetBoundaryTrait
  //
{
}
