const CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

export interface IGenerateBoundaryOptions {
  length?: number;
  randomChars?: number;
}

export function generateBoundary(
  {
    length = 36,
    randomChars = 24,
  }: IGenerateBoundaryOptions = {},
): string {
  randomChars = Math.min(randomChars, length);

  const randomValues: Uint8Array = crypto.getRandomValues(new Uint8Array(length));
  const ratio: number = CHARS.length / 256;

  let output: string = '-'.repeat(length - randomChars);

  for (let i = length - randomChars; i < length; i++) {
    output += CHARS[Math.floor(randomValues[i] * ratio)];
  }

  return output;
}

