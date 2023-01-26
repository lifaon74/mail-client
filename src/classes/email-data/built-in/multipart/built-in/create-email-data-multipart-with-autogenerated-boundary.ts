import {
  createMimeTypeParameterBoundary,
} from '../../../../mime-type/components/mime-type-parameter-list/components/mime-type-parameter/built-in/boundary/create-mime-type-parameter-boundary.type';
import {
  generateBoundary,
  IGenerateBoundaryOptions,
} from '../../../../mime-type/components/mime-type-parameter-list/components/mime-type-parameter/built-in/boundary/generate-boundary';
import {
  IMimeTypeParameter,
} from '../../../../mime-type/components/mime-type-parameter-list/components/mime-type-parameter/mime-type-parameter.type';
import {
  createMimeTypeParameterListFromIterable,
} from '../../../../mime-type/components/mime-type-parameter-list/create-mime-type-parameter-list';
import { createSafeMimeType } from '../../../../mime-type/create-mime-type';
import {
  createEmailHeaderContentType,
} from '../../../components/header-list/components/header/built-in/content-type/create-email-header-content-type';
import { IEmailHeader } from '../../../components/header-list/components/header/email-header.type';
import { createEmailHeaderListFromIterable } from '../../../components/header-list/create-email-header-list-from-iterable';
import { createEmailDataMultipart, IEmailDataMultipartContent } from '../create-email-data-multipart';
import { IEmailDataMultipart } from '../email-data-multipart.type';

export interface ICreateEmailDataMultipartWithAutogeneratedBoundaryOptions {
  content: IEmailDataMultipartContent;
  boundaryOptions?: IGenerateBoundaryOptions;
  headers?: Iterable<IEmailHeader>;
  mimeTypeSubtype: string;
  mimeTypeParameters?: Iterable<IMimeTypeParameter>;
}

export function createEmailDataMultipartWithAutogeneratedBoundary(
  {
    content,
    boundaryOptions,
    headers = [],
    mimeTypeSubtype,
    mimeTypeParameters = [],
  }: ICreateEmailDataMultipartWithAutogeneratedBoundaryOptions,
): IEmailDataMultipart {
  const boundary: string = generateBoundary(
    boundaryOptions,
  );

  return createEmailDataMultipart({
    headers: createEmailHeaderListFromIterable([
      ...headers,
      createEmailHeaderContentType(
        createSafeMimeType({
          type: 'multipart',
          subtype: mimeTypeSubtype,
          parameters: createMimeTypeParameterListFromIterable([
            ...mimeTypeParameters,
            createMimeTypeParameterBoundary(boundary),
          ]),
        }),
      ),
    ]),
    content,
    boundary,
  });
}
