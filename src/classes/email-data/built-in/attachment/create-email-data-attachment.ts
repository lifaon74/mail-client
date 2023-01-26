import { IMimeType } from '../../../mime-type/mime-type.type';
import { createEmailBodyFromTextAsBase64 } from '../../components/body/built-in/create-email-body-from-text-as-base64';
import {
  EMAIL_HEADER_CONTENT_TRANSFER_ENCODING_BASE64_CONSTANT,
} from '../../components/header-list/components/header/built-in/content-transfer-encoding/built-in/email-header.content-transfer-encoding.base64.constant';
import {
  createEmailHeaderContentType,
} from '../../components/header-list/components/header/built-in/content-type/create-email-header-content-type';
import { createEmailHeader } from '../../components/header-list/components/header/create-email-header';
import { IEmailHeader } from '../../components/header-list/components/header/email-header.type';
import { createEmailHeaderListFromIterable } from '../../components/header-list/create-email-header-list-from-iterable';
import { createEmailData } from '../../create-email-data';
import { IEmailDataAttachment } from './email-data-attachment.type';

export interface ICreateEmailDataAttachmentOptions {
  mimeType: IMimeType;
  fileName: string; // expected valid
  content: string;
  headers?: Iterable<IEmailHeader>;
}

export function createEmailDataAttachment(
  {
    mimeType: _mimeType,
    fileName: _fileName,
    content: _content,
    headers = [],
  }: ICreateEmailDataAttachmentOptions,
): IEmailDataAttachment {
  if (!_mimeType.getParameters().has('name')) {
    _mimeType.getParameters().set('name', _fileName);
  }

  const parent = createEmailData({
    headers: createEmailHeaderListFromIterable([
        ...headers,
      createEmailHeaderContentType(_mimeType),
      createEmailHeader({
        key: 'Content-Disposition',
        // createMimeTypeFromString(`attachment; filename="test.bin"`).toString(),
        value: `attachment; filename=${JSON.stringify(_fileName)}`,
      }),
      EMAIL_HEADER_CONTENT_TRANSFER_ENCODING_BASE64_CONSTANT,
    ]),
    body: createEmailBodyFromTextAsBase64(_content),
  });

  const getMimeType = (): IMimeType => {
    return _mimeType;
  };

  const getFileName = (): string => {
    return _fileName;
  };

  const getContent = (): string => {
    return _content;
  };

  return {
    ...parent,
    getMimeType,
    getFileName,
    getContent,
  };
}


