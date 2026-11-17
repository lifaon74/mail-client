export function escapeMimeTypeParameterValue(
  value: string,
): string {
  return value
    .replace('\\', '\\\\')
    .replace('"', '\\"');
}
