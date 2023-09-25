import { CRLF } from '../../../../../constants/crlf';
import {
  isMimeTypeParameterBoundary,
} from '../../../../mime-type/boundary/is-mime-type-parameter-boundary';
import {
  MIME_TYPE_PARAMETER_BOUNDARY_KEY_NAME,
} from '../../../../mime-type/boundary/mime-type-parameter-boundary-key.contant';
import {
  IMimeTypeParameterValue,
} from '../../../mime-type/fragments/mime-type-parameter-list/fragments/mime-type-parameter/fragments/mime-type-parameter-value/mime-type-parameter-value.type';
import {
  IMimeTypeParameter,
} from '../../../mime-type/fragments/mime-type-parameter-list/fragments/mime-type-parameter/mime-type-parameter.type';
import { IMimeTypeParameterList } from '../../../mime-type/fragments/mime-type-parameter-list/mime-type-parameter-list.type';
import { createMimeTypeFromString } from '../../../../mime-type/mime-type.class';
import { IMimeType } from '../../../mime-type/mime-type.type';
import { createEmailBody } from '../../../email-body.class';
import {
  EMAIL_HEADER_CONTENT_TYPE_KEY,
} from '../../fragments/header-list/fragments/header/built-in/content-type/email-header-content-type-key.contant';
import {
  isEmailHeaderContentType,
} from '../../fragments/header-list/fragments/header/built-in/content-type/is-email-header-content-type';
import { IEmailHeader } from '../../fragments/header-list/fragments/header/email-header.type';
import { IEmailHeaderList } from '../../fragments/header-list/email-header-list.type';
import { createEmailData } from '../../implementations/functions/create-email-data';
import { IEmailData } from '../../../email-data.type';
import { IEmailDataMultipart } from './email-data-multipart.type';

export type IEmailDataMultipartContent = readonly IEmailData[];

export interface ICreateEmailDataMultipartOptions {
  headers: IEmailHeaderList,
  content: IEmailDataMultipartContent,
  boundary?: string;
}

export function createEmailDataMultipart(
  {
    headers: _headers,
    content: _content,
    boundary: _boundary = getBoundaryFromEmailHeaderListOrThrow(_headers),
  }: ICreateEmailDataMultipartOptions,
): IEmailDataMultipart {
  const _boundaryPrefixed: string = `--${_boundary}`;

  const parent = createEmailData({
    headers: _headers,
    body: createEmailBody(
      _content
        .map((data: IEmailData): string => {
          return _boundaryPrefixed + CRLF
            + data.toString() + CRLF
            + CRLF;
        })
        .join('')
      + `--${_boundary}--`,
    ),
  });

  const getContent = (): IEmailDataMultipartContent => {
    return _content;
  };

  const getBoundary = (): string => {
    return _boundary;
  };

  return {
    ...parent,
    getBoundary,
  };
}

/*-------------*/

function getBoundaryFromEmailHeaderListOrThrow(
  emailHeaderList: IEmailHeaderList,
): string {
  const boundary: string | undefined = getBoundaryFromEmailHeaderList(emailHeaderList);
  if (boundary === void 0) {
    throw new Error(`Unable to locate boundary`);
  } else {
    return boundary;
  }
}

function getBoundaryFromEmailHeaderList(
  emailHeaderList: IEmailHeaderList,
): string | undefined {
  const item: IEmailHeader | undefined = emailHeaderList.getItem(EMAIL_HEADER_CONTENT_TYPE_KEY);

  if (item === void 0) {
    return void 0;
  } else {
    return getBoundaryFromEmailHeader(item);
  }
}

function getBoundaryFromEmailHeader(
  emailHeader: IEmailHeader,
): string | undefined {
  if (emailHeader.getKey() === EMAIL_HEADER_CONTENT_TYPE_KEY) {
    if (isEmailHeaderContentType(emailHeader)) {
      return getBoundaryFromMimeType(emailHeader.getMimeType());
    } else {
      return getBoundaryFromMimeType(createMimeTypeFromString(emailHeader.getValue()));
    }
  } else {
    return void 0;
  }
}

function getBoundaryFromMimeType(
  mimeType: IMimeType,
): string | undefined {
  return getBoundaryFromMimeTypeParameterList(mimeType.getParameters());
}

function getBoundaryFromMimeTypeParameterList(
  mimeTypeParameterList: IMimeTypeParameterList,
): string | undefined {
  const item: IMimeTypeParameter | undefined = mimeTypeParameterList.getItem(MIME_TYPE_PARAMETER_BOUNDARY_KEY_NAME);

  if (item === void 0) {
    return void 0;
  } else {
    return getBoundaryFromMimeTypeParameter(item);
  }
}

function getBoundaryFromMimeTypeParameter(
  mimeTypeParameter: IMimeTypeParameter,
): string | undefined {
  if (mimeTypeParameter.getKey().get() === MIME_TYPE_PARAMETER_BOUNDARY_KEY_NAME) {
    if (isMimeTypeParameterBoundary(mimeTypeParameter)) {
      return mimeTypeParameter.getBoundary();
    } else {
      const value: IMimeTypeParameterValue | null = mimeTypeParameter.getValue();
      if (value === null) {
        return void 0;
      } else {
        return value.get();
      }
    }
  } else {
    return void 0;
  }
}
