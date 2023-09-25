const BASE64_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

export function* encodeUint8ArrayToBase64(
  uint8Array: Uint8Array,
): Generator<string> {
  const remaining: number = uint8Array.length % 3;
  const length: number = uint8Array.length - remaining;

  for (let i: number = 0; i < length; i += 3) {
    const a: number = uint8Array[i];
    const b: number = uint8Array[i + 1];
    const c: number = uint8Array[i + 2];

    yield BASE64_CHARS[(a >> 2) & 0b00111111];
    yield BASE64_CHARS[((a << 4) | (b >> 4)) & 0b00111111];
    yield BASE64_CHARS[((b << 2) | (c >> 6)) & 0b00111111];
    yield BASE64_CHARS[c & 0b00111111];
  }

  if (remaining === 1) {
    const a: number = uint8Array[length];
    yield BASE64_CHARS[(a >> 2) & 0b00111111];
    yield BASE64_CHARS[(a << 4) & 0b00111111];
    yield '=';
    yield '=';
  } else if (remaining === 2) {
    const a: number = uint8Array[length];
    const b: number = uint8Array[length + 1];
    yield BASE64_CHARS[(a >> 2) & 0b00111111];
    yield BASE64_CHARS[((a << 4) | (b >> 4)) & 0b00111111];
    yield BASE64_CHARS[(b << 2) & 0b00111111];
    yield '=';
  }
}
