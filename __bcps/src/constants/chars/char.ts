export function char(
  input: string,
): number {
  if (input.length === 1) {
    const c: number = input.charCodeAt(0);
    if (c < 0x80) {
      return c;
    } else {
      throw new Error(`Expected char lower than ${0x80} (0x80).`);
    }
  } else {
    throw new Error(`Expected input with length of 1.`);
  }
}
