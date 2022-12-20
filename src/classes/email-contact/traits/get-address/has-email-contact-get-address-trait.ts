import { IEmailContactGetAddressTrait } from './email-contact.get-address.trait';

export function hasEmailContactGetAddressTrait(
  value: unknown,
): value is IEmailContactGetAddressTrait {
  return (typeof (value as any).getAddress === 'function')
}
