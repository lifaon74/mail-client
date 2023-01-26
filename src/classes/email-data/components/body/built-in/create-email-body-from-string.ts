import { createEmailBody } from '../create-email-body';
import { IEmailBody } from '../email-body.type';

export function createEmailBodyFromString(
  input: string,
): IEmailBody {
  return createEmailBody(input);
}
