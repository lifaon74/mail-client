import { IEmailAddress } from '../../../classes/email-address/email-address.type';
import { createEmailContact, createEmailContactFromString } from '../../../classes/email-contact/create-email-contact';
import { IEmailContact } from '../../../classes/email-contact/email-contact.type';
import { isEmailContact } from '../../../classes/email-contact/is-email-contact';

export type IEmailContactLike =
  | IEmailContact
  | IEmailAddress
  | string
  ;

export function emailContactLikeToEmailContact(
  input: IEmailContactLike,
): IEmailContact {
  return (typeof input === 'string')
    ? createEmailContactFromString(input)
    : (
      isEmailContact(input)
        ? input
        : createEmailContact({
          name: null,
          address: input,
        })
    );
}
