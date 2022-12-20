import { createEmailHeader } from '../../../../create-email-header';
import { IEmailHeader } from '../../../../email-header.type';
import { IMessageIdList } from '../message-id-list/message-id-list.type';
import { IMessageIdListToStringFunctionOptions } from '../message-id-list/traits/to-string/message-id-list.to-string.function-definition';
import { IEmailHeaderMessageIdList } from './email-header-message-id-list.type';

export interface ICreateEmailHeaderMessageIdListOptions {
  key: string;
  messageIdList: IMessageIdList;
}

export function createEmailHeaderMessageIdList(
  {
    key,
    messageIdList: _messageIdList,
  }: ICreateEmailHeaderMessageIdListOptions,
): IEmailHeaderMessageIdList {
  if (_messageIdList.getLength() === 0) {
    throw new Error(`'${key}' must contain at least one address`);
  }

  const parent: IEmailHeader = createEmailHeader({
    key,
    value: '',
  });

  const getMessageIdList = (): IMessageIdList => {
    return _messageIdList;
  };

  const toString = (
    options?: IMessageIdListToStringFunctionOptions,
  ): string => {
    return `${parent.getKey()}: ${getMessageIdList().toString(options)}`;
  };

  return {
    ...parent,
    getMessageIdList,
    toString,
  };
}
