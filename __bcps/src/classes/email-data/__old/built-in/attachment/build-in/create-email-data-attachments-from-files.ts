import { IEmailHeader } from '../../../fragments/header-list/fragments/header/email-header.type';
import { IEmailDataAttachment } from '../email-data-attachment.type';
import { createEmailDataAttachmentFromFile, ICreateEmailDataAttachmentFromFileOptions } from './create-email-data-attachment-from-file';

export interface ICreateEmailDataAttachmentsFromFilesOptions extends Omit<ICreateEmailDataAttachmentFromFileOptions, 'file'> {
  files: readonly File[];
  headers?: Iterable<IEmailHeader>;
}

export function createEmailDataAttachmentsFromFiles(
  {
    files,
    ...options
  }: ICreateEmailDataAttachmentsFromFilesOptions,
): Promise<IEmailDataAttachment[]> {
  return Promise.all(
    files.map((file: File): Promise<IEmailDataAttachment> => {
      return createEmailDataAttachmentFromFile({
        ...options,
        file,
      });
    }),
  );
}
