import { IEmailData } from '../../../email-data.type';
import { IEmailDataAttachmentGetContentTrait } from './traits/get-content/create-email-data-attachment.get-content.trait';
import { IEmailDataAttachmentGetFileNameTrait } from './traits/get-file-name/create-email-data-attachment.get-file-name.trait';
import { IEmailDataAttachmentGetMimeTypeTrait } from './traits/get-mime-type/create-email-data-attachment.get-mime-type.trait';

export interface IEmailDataAttachment extends IEmailData, //
  IEmailDataAttachmentGetContentTrait,
  IEmailDataAttachmentGetFileNameTrait,
  IEmailDataAttachmentGetMimeTypeTrait
  //
{
}
