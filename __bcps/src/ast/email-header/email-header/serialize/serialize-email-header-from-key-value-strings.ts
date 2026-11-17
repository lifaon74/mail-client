/** FUNCTION **/

export function serializeEmailHeaderFromKeyValueStrings(
  key: string,
  value: string,
): string {
  return `${key}: ${value}`;
}
