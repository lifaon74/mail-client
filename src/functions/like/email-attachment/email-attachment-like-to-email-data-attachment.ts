import { IEmailDataAttachment } from '../../../classes/email-data/__old/built-in/attachment/email-data-attachment.type';

export type IEmailAttachmentLike =
  | IEmailDataAttachment
// | File
  ;

export function emailAttachmentLikeToEmailDataAttachment(
  input: IEmailAttachmentLike,
): IEmailDataAttachment {
  return input;
}

