export function iterableToArray<GValue>(
  input: Iterable<GValue>,
): GValue[] {
  return Array.isArray(input)
    ? input
    : Array.from(input);
}
