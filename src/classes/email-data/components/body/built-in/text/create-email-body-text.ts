import {
  IContentTransferEncoding
} from '../../../header-list/components/header/built-in/content-transfer-encoding/content-transfer-encoding.type';
import { createEmailBody } from '../../create-email-body';
import { createEmailBodyFromTextAsBase64 } from '../create-email-body-from-text-as-base64';
import { IEmailBodyText } from './email-body-text.type';

export interface ICreateEmailBodyTextOptions {
  text: string;
  contentTransferEncoding: IContentTransferEncoding;
}

export function createEmailBodyText(
  {
    text: _text,
    contentTransferEncoding: _contentEncoding,
  }: ICreateEmailBodyTextOptions,
): IEmailBodyText {
  const parent = createEmailBody(
    _text,
  );

  // TODO continue here and implement multipart
  // createEmailBodyFromTextAsBase64

  const getText = (): string => {
    return _text;
  };

  const getContentTransferEncoding = (): IContentTransferEncoding => {
    return _contentEncoding;
  };

  return {
    ...parent,
    getText,
    getContentTransferEncoding,
  };
}
