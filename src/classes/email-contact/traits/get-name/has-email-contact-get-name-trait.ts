import { IEmailContactGetNameTrait } from './email-contact.get-name.trait';

export function hasEmailContactGetNameTrait(
  value: unknown,
): value is IEmailContactGetNameTrait {
  return (typeof (value as any).getName === 'function')
}
