import { IMimeVersionHeaderName } from './mime-version/mime-version-header-name.constant';
import { IDateHeaderName } from './date/date-header-name.constant';
import { IContentTypeHeaderName } from '../email-header/built-in/content-type/content-type-header-name.constant';
import { IContentTransferEncodingHeaderName } from './content-transfer-encoding-header-name/content-transfer-encoding-header-name.constant';

export type IWellKnownEmailHeaderNames =
  | IMimeVersionHeaderName
  | IContentTypeHeaderName
  | IContentTransferEncodingHeaderName
  | IDateHeaderName
  ;
