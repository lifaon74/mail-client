import { IEmailDataAttachment } from '../../../classes/email-data/__old/built-in/attachment/email-data-attachment.type';
import {
  emailAttachmentLikeToEmailDataAttachment,
  IEmailAttachmentLike,
} from '../email-attachment/email-attachment-like-to-email-data-attachment';
import { IListLike, listLikeToArray } from '../list/list-like-to-array';

export type IEmailAttachmentListLike = IListLike<IEmailAttachmentLike>;

export function emailAttachmentListLikeToEmailDataAttachmentArray(
  input: IEmailAttachmentListLike,
): IEmailDataAttachment[] {
  return listLikeToArray<IEmailAttachmentLike, IEmailDataAttachment>(
    input,
    emailAttachmentLikeToEmailDataAttachment,
  );
}

