import { IEmailHeaderFromKey, EMAIL_HEADER_FROM_KEY } from './email-header-from-key.contant';
import { EmailHeader } from '../../email-header.class';
import { MimeTypeClass } from '../../../../../mime-type/mime-type.class';

export class EmailHeaderFrom extends EmailHeader<IEmailHeaderFromKey> {
  constructor(
    mimeType: MimeTypeClass | string,
  ) {
    super(
      EMAIL_HEADER_FROM_KEY,
      (typeof mimeType === 'string')
        ? mimeType
        : mimeType.toString(),
    );
  }
}


export class EmailHeaderContactList<GKey extends string> extends EmailHeader<GKey> {
  constructor(
    key: GKey,
    emailContactList: IEmailContactList,
  ) {
    super(
      key,
      (typeof mimeType === 'string')
        ? mimeType
        : mimeType.toString(),
    );
  }

  get mimeType(): MimeTypeClass {
    return MimeTypeClass.parse(this.value);
  }

  set mimeType(
    mimeType: MimeTypeClass,
  ) {
    this.value = mimeType.toString();
  }
}

/*

export function createEmailHeaderContactList(
  {
    key,
    emailContactList: _emailContactList,
  }: ICreateEmailHeaderContactListOptions,
): IEmailHeaderContactList {
  if (_emailContactList.getLength() === 0) {
    throw new Error(`'${key}' must contain at least one address`);
  }

  const parent: IEmailHeader = createEmailHeader({
    key,
    value: '',
  });

  const getEmailContactList = (): IEmailContactList => {
    return _emailContactList;
  };

  const toString = (
    options?: IEmailContactListToStringFunctionOptions,
  ): string => {
    return `${parent.getKey()}: ${getEmailContactList().toString(options)}`;
  };

  return {
    ...parent,
    getEmailContactList,
    toString,
  };
}


 */
