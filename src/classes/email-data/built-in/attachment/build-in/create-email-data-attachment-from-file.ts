import { createMimeTypeFromString } from '../../../../mime-type/create-mime-type';
import { createEmailDataAttachment, ICreateEmailDataAttachmentOptions } from '../create-email-data-attachment';
import { IEmailDataAttachment } from '../email-data-attachment.type';

export interface ICreateEmailDataAttachmentFromFileOptions extends Omit<ICreateEmailDataAttachmentOptions, 'mimeType' | 'fileName' | 'content'> {
  file: File;
}

export function createEmailDataAttachmentFromFile(
  {
    file,
    ...options
  }: ICreateEmailDataAttachmentFromFileOptions,
): Promise<IEmailDataAttachment> {
  return file.text()
    .then((content: string): IEmailDataAttachment => {
      return createEmailDataAttachment({
        ...options,
        mimeType: createMimeTypeFromString(file.type),
        fileName: file.name,
        content,
      });
    });
}
