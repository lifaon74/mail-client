import { createEmailAddressFromString } from '../classes/email-address/create-email-address-from-string';

export function emailAddressDebug(): void {
  // const emailAddress = createEmailAddressFromString('a@b.com');
  // const emailAddress = createEmailAddressFromString('"John.\\"Doe."@example.com');
  const emailAddress = createEmailAddressFromString('valentin.richard@example.com');

  console.log(emailAddress.toString());
}
