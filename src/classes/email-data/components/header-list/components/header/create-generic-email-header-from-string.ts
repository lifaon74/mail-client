import { createEmailHeader } from './create-email-header';
import { IEmailHeader } from './email-header.type';

export function createGenericEmailHeaderFromString(
  input: string,
): IEmailHeader {
  const index: number = input.indexOf(': ');

  return createEmailHeader({
    key: input.slice(0, index),
    value: input.slice(index + 2),
  });
}
