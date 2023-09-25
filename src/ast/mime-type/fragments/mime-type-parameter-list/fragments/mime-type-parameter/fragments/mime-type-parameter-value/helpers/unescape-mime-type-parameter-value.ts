export function unescapeMimeTypeParameterValue(
  value: string,
): string {
  return value
    .replace('\\', '');
}
