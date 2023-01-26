import { IMimeType } from '../../../../../../../mime-type/mime-type.type';
import { createEmailHeader } from '../../create-email-header';
import { IEmailHeader } from '../../email-header.type';
import { IEmailHeaderContentType } from './email-header-content-type.type';
import { HEADER_CONTENT_TYPE_KEY_NAME } from './header-content-type-key.contant';

export function createEmailHeaderContentType(
  _mimeType: IMimeType,
): IEmailHeaderContentType {
  const parent: IEmailHeader = createEmailHeader({
    key: HEADER_CONTENT_TYPE_KEY_NAME,
    value: '',
  });

  const getValue = (): string => {
    return _mimeType.toString();
  };

  const getMimeType = (): IMimeType => {
    return _mimeType;
  };

  const toString = (): string => {
    return `${parent.getKey()}: ${getValue()}`;
  };

  return {
    ...parent,
    getValue,
    getMimeType,
    toString,
  };
}
