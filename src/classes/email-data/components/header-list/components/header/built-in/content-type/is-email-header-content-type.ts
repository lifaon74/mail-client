import { IEmailHeader } from '../../email-header.type';
import { IEmailHeaderContentType } from './email-header-content-type.type';

export function isEmailHeaderContentType(
  value: IEmailHeader,
): value is IEmailHeaderContentType {
  return 'getMimeType' in value;
}
