import { parseEmailAddress } from '../ast/email-contact/email-address/parse-email-address';
import { parseEmailContact } from '../ast/email-contact/email-contact/parse-email-contact';
import { parseEmailContactList } from '../ast/email-contact/email-contact-list/parse-email-contact-list';

export function emailAddressDebug(): void {
  // const emailAddress = parseEmailAddress('a@b.com');
  // const emailAddress = parseEmailAddress('"John.\\"Doe."@example.com');
  // const emailAddress = parseEmailAddress('valentin.richard@example.com');
  // console.log(emailAddress);

  // console.log(parseEmailContact(`"valentin.richard" <valentin.richard@infomaniak.com>`));
  console.log(parseEmailContact(`valentin.richard+to2@infomaniak.com`));
  console.log(parseEmailContactList(`valentin.richard@infomaniak.com, valentin.richard+to2@infomaniak.com, "valentin.richard" <valentin.richard@infomaniak.com>`));
}
