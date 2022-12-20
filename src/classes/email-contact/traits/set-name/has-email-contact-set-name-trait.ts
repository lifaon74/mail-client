import { IEmailContactSetNameTrait } from './email-contact.set-name.trait';

export function hasEmailContactSetNameTrait(
  value: unknown,
): value is IEmailContactSetNameTrait {
  return (typeof (value as any).setName === 'function')
}
