import { createEmailAddressFromString } from '../email-address/create-email-address';
import { IEmailAddress } from '../email-address/email-address.type';
import { createEmailContactNameFromString } from './components/email-contact-name/create-email-contact-name';
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

/*-----*/

export function createEmailContactFromString(
  input: string,
): IEmailContact {
  const index: number = input.lastIndexOf('<');

  if (index === -1) {
    return createEmailContact({
      name: null,
      address: createEmailAddressFromString(input),
    });
  } else if (input.endsWith('>')) {
    const name: string = input.slice(0, index).trimEnd();
    const address: string = input.slice(index + 1, -1);
    return createEmailContact({
      name: (name === '')
        ? null
        : createEmailContactNameFromString(name),
      address: createEmailAddressFromString(address),
    });
  } else {
    throw new Error(`Invalid email contact format`);
  }
}

