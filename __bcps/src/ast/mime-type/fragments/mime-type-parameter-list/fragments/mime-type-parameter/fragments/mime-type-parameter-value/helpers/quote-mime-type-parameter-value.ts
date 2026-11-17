import { escapeMimeTypeParameterValue } from './escape-mime-type-parameter-value';

export function quoteMimeTypeParameterValue(
  value: string,
): string {
  return `"${escapeMimeTypeParameterValue(value)}"`;
}
