import { createEmailAddressFromString } from '../../../classes/email-address/create-email-address-from-string';
import { IEmailAddress } from '../../../classes/email-address/email-address.type';

export type IEmailAddressLike =
  | IEmailAddress
  | string
  ;

export function emailAddressLikeToEmailAddress(
  input: IEmailAddressLike,
): IEmailAddress {
  return (typeof input === 'string')
    ? createEmailAddressFromString(input)
    : input;
}
