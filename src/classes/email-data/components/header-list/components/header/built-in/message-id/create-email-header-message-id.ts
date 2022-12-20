import { IMessageId } from '../../../../../../../message-id/message-id.type';
import { createEmailHeader } from '../../create-email-header';
import { IEmailHeader } from '../../email-header.type';
import { IEmailHeaderMessageId } from './email-header-message-id.type';

export function createEmailHeaderMessageId(
  _messageId: IMessageId,
): IEmailHeaderMessageId {
  const parent: IEmailHeader = createEmailHeader({
    key: 'Message-ID',
    value: '',
  });

  const getValue = (): string => {
    return _messageId.toString();
  };

  const getMessageId = (): IMessageId => {
    return _messageId;
  };

  const toString = (): string => {
    return `${parent.getKey()}: ${getValue()}`;
  };

  return {
    ...parent,
    getValue,
    getMessageId,
    toString,
  };
}

