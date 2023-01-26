import { IEmailAddress } from '../email-address/email-address.type';
import { IEmailContactName } from './components/email-contact-name/email-contact-name.type';
import { IEmailContact } from './email-contact.type';

export interface ICreateEmailContactOptions {
  name: IEmailContactName | null;
  address: IEmailAddress;
}

export function createEmailContact(
  {
    name: _name,
    address: _address,
  }: ICreateEmailContactOptions,
): IEmailContact {

  const getName = (): IEmailContactName | null => {
    return _name;
  };

  const setName = (
    value: IEmailContactName | null,
  ): void => {
    _name = value;
  };

  const getAddress = (): IEmailAddress => {
    return _address;
  };

  const hasEmptyName = (): boolean => {
    return (_name === null)
      || (_name.get() === '');
  };

  const toString = (): string => {
    return hasEmptyName()
      ? `<${_address.toString()}>`
      : `${(_name as IEmailContactName).toString()} <${_address.toString()}>`;
  };

  return {
    getName,
    setName,
    getAddress,
    toString,
  };
}
