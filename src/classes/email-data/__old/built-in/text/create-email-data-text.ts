import {
  createMimeTypeParameterKey,
} from '../../../mime-type/fragments/mime-type-parameter-list/fragments/mime-type-parameter/fragments/mime-type-parameter-key/implementations/functions/create-mime-type-parameter-key';
import {
  createMimeTypeParameterValue,
} from '../../../mime-type/mime-type-parameter-value.class';
import {
  createMimeTypeParameter,
} from '../../../mime-type/mime-type-parameter.class';
import {
  IMimeTypeParameter,
} from '../../../mime-type/fragments/mime-type-parameter-list/fragments/mime-type-parameter/mime-type-parameter.type';
import {
  createMimeTypeParameterListFromIterable,
} from '../../../../mime-type/mime-type-parameters.class';
import { createSafeMimeType } from '../../../../mime-type/mime-type.class';
import { createEmailBodyText } from '../../fragments/body/built-in/text/create-email-body-text';
import {
  IContentTransferEncoding,
} from '../../fragments/header-list/fragments/header/built-in/content-transfer-encoding/content-transfer-encoding.type';
import {
  createEmailHeaderContentTransferEncoding,
} from '../../fragments/header-list/fragments/header/built-in/content-transfer-encoding/create-email-header-content-transfer-encoding';
import {
  createEmailHeaderContentType,
} from '../../fragments/header-list/fragments/header/built-in/content-type/implementations/functions/create-email-header-content-type';
import { IEmailHeader } from '../../fragments/header-list/fragments/header/email-header.type';
import { createEmailHeaderListFromIterable } from '../../fragments/header-list/implementations/functions/create-email-header-list-from-iterable';
import { createEmailData } from '../../implementations/functions/create-email-data';
import { IEmailData } from '../../../email-data.type';

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
