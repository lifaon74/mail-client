import { createMimeTypeFromString } from '../../../../../../../mime-type/create-mime-type';
import { createEmailHeaderContentType } from './create-email-header-content-type';
import { IEmailHeaderContentType } from './email-header-content-type.type';

export function createEmailHeaderContentTypeFromValueString(
  input: string,
): IEmailHeaderContentType {
  return createEmailHeaderContentType(
    createMimeTypeFromString(input),
  );
}
