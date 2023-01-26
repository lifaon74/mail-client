import { createEmailHeaderSubject } from './create-email-header-subject';
import { IEmailHeaderSubject } from './email-header-subject.type';

export function createEmailHeaderSubjectFromValueString(
  input: string,
): IEmailHeaderSubject {
  return createEmailHeaderSubject(
    input,
  );
}
