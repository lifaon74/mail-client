import { createReadonlyArray, IArrayNewInput, IReadonlyArrayTraitCollection } from '@lifaon/traits';
import { CRLF } from '../../../../../../../../../../../constants/crlf';
import { IEmailContact } from '../../../../../../../../../../email-contact/email-contact.type';
import { IEmailContactList } from './email-contact-list.type';
import { IEmailContactListToStringFunctionOptions } from './traits/to-string/email-contact-list.to-string.function-definition';

export type IEmailContactListInput = IArrayNewInput<IEmailContact>;

export function createEmailContactList(
  emailContacts: IEmailContactListInput,
): IEmailContactList {
  const parent: IReadonlyArrayTraitCollection<IEmailContact> = createReadonlyArray<IEmailContact>(emailContacts);

  const toString = (
    {
      withFoldingWhiteSpace = true,
    }: IEmailContactListToStringFunctionOptions = {},
  ): string => {
    const crlf: string = withFoldingWhiteSpace
      ? CRLF
      : '';

    return parent.reduce<string>((previousValue: string, currentValue: IEmailContact, index: number): string => {
      return `${(index === 0) ? '' : `${previousValue},${crlf} `}${currentValue.toString()}`;
    }, '');
  };

  return {
    ...parent,
    toString,
  };
}
