import {
  createMimeTypeParameterKey,
} from '../../../mime-type/components/mime-type-parameter-list/components/mime-type-parameter/components/mime-type-parameter-key/create-mime-type-parameter-key';
import {
  createMimeTypeParameterValue,
} from '../../../mime-type/components/mime-type-parameter-list/components/mime-type-parameter/components/mime-type-parameter-value/create-mime-type-parameter-value';
import {
  createMimeTypeParameter,
} from '../../../mime-type/components/mime-type-parameter-list/components/mime-type-parameter/create-mime-type-parameter';
import {
  IMimeTypeParameter,
} from '../../../mime-type/components/mime-type-parameter-list/components/mime-type-parameter/mime-type-parameter.type';
import {
  createMimeTypeParameterListFromIterable,
} from '../../../mime-type/components/mime-type-parameter-list/create-mime-type-parameter-list';
import { createSafeMimeType } from '../../../mime-type/create-mime-type';
import { createEmailBodyText } from '../../components/body/built-in/text/create-email-body-text';
import {
  IContentTransferEncoding,
} from '../../components/header-list/components/header/built-in/content-transfer-encoding/content-transfer-encoding.type';
import {
  createEmailHeaderContentTransferEncoding,
} from '../../components/header-list/components/header/built-in/content-transfer-encoding/create-email-header-content-transfer-encoding';
import {
  createEmailHeaderContentType,
} from '../../components/header-list/components/header/built-in/content-type/create-email-header-content-type';
import { IEmailHeader } from '../../components/header-list/components/header/email-header.type';
import { createEmailHeaderListFromIterable } from '../../components/header-list/create-email-header-list-from-iterable';
import { createEmailData } from '../../create-email-data';
import { IEmailData } from '../../email-data.type';

export interface ICreateEmailDataTextOptions {
  text: string;
  contentTransferEncoding?: IContentTransferEncoding;
  headers?: Iterable<IEmailHeader>;
  mimeTypeSubtype: string;
  mimeTypeParameters?: Iterable<IMimeTypeParameter>;
}

export function createEmailDataText(
  {
    text,
    contentTransferEncoding = 'base64',
    headers = [],
    mimeTypeSubtype,
    mimeTypeParameters = [
      createMimeTypeParameter({
        key: createMimeTypeParameterKey('charset'),
        value: createMimeTypeParameterValue('utf8'),
      }),
    ],
  }: ICreateEmailDataTextOptions,
): IEmailData {
  return createEmailData({
    headers: createEmailHeaderListFromIterable([
      ...headers,
      createEmailHeaderContentType(
        createSafeMimeType({
          type: 'text',
          subtype: mimeTypeSubtype,
          parameters: createMimeTypeParameterListFromIterable(
            mimeTypeParameters,
          ),
        }),
      ),
      createEmailHeaderContentTransferEncoding(
        contentTransferEncoding,
      ),
    ]),
    body: createEmailBodyText({
      text,
      contentTransferEncoding,
    }),
  });
}
