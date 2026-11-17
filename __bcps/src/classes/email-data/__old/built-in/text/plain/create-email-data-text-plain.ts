import { IEmailData } from '../../../../email-data.type';
import { createEmailDataText, ICreateEmailDataTextOptions } from '../create-email-data-text';

export interface ICreateEmailDataTextPlainOptions extends Omit<ICreateEmailDataTextOptions, 'mimeTypeSubtype'> {
}

export function createEmailDataTextPlain(
  options: ICreateEmailDataTextPlainOptions,
): IEmailData {
  return createEmailDataText({
    ...options,
    mimeTypeSubtype: 'plain',
  });
}
