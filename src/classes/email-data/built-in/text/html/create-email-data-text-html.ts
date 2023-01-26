import { IEmailData } from '../../../email-data.type';
import { createEmailDataText, ICreateEmailDataTextOptions } from '../create-email-data-text';

export interface ICreateEmailDataTextPlainOptions extends Omit<ICreateEmailDataTextOptions, 'mimeTypeSubtype' | 'text'> {
  html: string;
}

export function createEmailDataTextHTML(
  {
    html,
    ...options
  }: ICreateEmailDataTextPlainOptions,
): IEmailData {
  return createEmailDataText({
    ...options,
    text: html,
    mimeTypeSubtype: 'html',
  });
}
