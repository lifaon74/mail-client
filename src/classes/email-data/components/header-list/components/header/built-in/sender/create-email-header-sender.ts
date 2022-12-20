import { IEmailContact } from '../../../../../../../email-contact/email-contact.type';
import { createEmailHeader } from '../../create-email-header';
import { IEmailHeader } from '../../email-header.type';
import { IEmailHeaderSender } from './email-header-sender.type';

export function createEmailHeaderSender(
  _sender: IEmailContact,
): IEmailHeaderSender {
  const parent: IEmailHeader = createEmailHeader({
    key: 'Sender',
    value: '',
  });

  const getSender = (): IEmailContact => {
    return _sender;
  };

  const getValue = (): string => {
    return getSender().toString();
  };

  const toString = (): string => {
    return `${parent.getKey()}: ${getValue()}`;
  };

  return {
    ...parent,
    getValue,
    getSender,
    toString,
  };
}
