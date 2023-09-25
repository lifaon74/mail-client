import { IEmailContact } from '../../../../../../../../email-contact/email-contact.type';
import { createEmailHeader } from '../../implementations/classes/email-header.class';
import { IEmailHeader } from '../../email-header.type';
import { IEmailHeaderSender } from './email-header-sender.type';
import { HEADER_SENDER_KEY_NAME } from './header-sender-key.contant';

export function createEmailHeaderSender(
  _sender: IEmailContact,
): IEmailHeaderSender {
  const parent: IEmailHeader = createEmailHeader({
    key: HEADER_SENDER_KEY_NAME,
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
