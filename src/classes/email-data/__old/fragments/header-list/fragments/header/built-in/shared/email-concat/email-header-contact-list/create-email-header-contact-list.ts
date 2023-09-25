import { createEmailHeader } from '../../../../implementations/classes/email-header.class';
import { IEmailHeader } from '../../../../email-header.type';
import { IEmailContactList } from '../email-contact-list/email-contact-list.type';
import {
  IEmailContactListToStringFunctionOptions,
} from '../email-contact-list/traits/to-string/email-contact-list.to-string.function-definition';
import { IEmailHeaderContactList } from './email-header-contact-list.type';

export interface ICreateEmailHeaderContactListOptions {
  key: string;
  emailContactList: IEmailContactList;
}

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
