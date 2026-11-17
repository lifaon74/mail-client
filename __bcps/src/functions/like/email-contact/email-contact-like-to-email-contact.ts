import { IEmailAddress } from '../../../classes/__old/email-address/email-address.type';
import { createEmailContact } from '../../../classes/__old/email-contact/__old/create-email-contact';
import { createEmailContactFromString } from '../../../classes/__old/email-contact/__old/create-email-contact-from-string';
import { IEmailContact } from '../../../classes/__old/email-contact/__old/email-contact.type';
import { isEmailContact } from '../../../classes/__old/email-contact/__old/is-email-contact';

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
