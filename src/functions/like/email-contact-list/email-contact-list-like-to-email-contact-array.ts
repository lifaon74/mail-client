import { IEmailContact } from '../../../classes/email-contact/email-contact.type';
import { emailContactLikeToEmailContact, IEmailContactLike } from '../email-contact/email-contact-like-to-email-contact';
import { IListLike, listLikeToArray } from '../list/list-like-to-array';

export type IEmailContactListLike = IListLike<IEmailContactLike>;

export function emailContactListLikeToEmailContactArray(
  input: IEmailContactListLike,
): IEmailContact[] {
  return listLikeToArray<IEmailContactLike, IEmailContact>(
    input,
    emailContactLikeToEmailContact,
  );
}
