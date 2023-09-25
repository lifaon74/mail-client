import { createEmailAddressFromString } from '../../../classes/__old/email-address/implementations/functions/create-email-address-from-string';
import { IEmailAddress } from '../../../classes/__old/email-address/email-address.type';

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
