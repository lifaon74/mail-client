export function printErroredUint8ArrayBuffer(
  buffer: Uint8Array,
  start: number,
  end: number,
  extra: number = 30,
): void {
  const chunkBeforeStyle: string = '';
  const chunkErroredStyle: string = 'color: red; font-weight: bold';
  const chunkAfterStyle: string = 'color: rgba(255, 0, 0, 0.7);';

  const chunkBeforeStart: number = Math.max(0, start - extra);
  const chunkAfterEnd: number = Math.min(buffer.length, end + extra);

  const chunkBefore: Uint8Array = buffer.subarray(chunkBeforeStart, start);
  const chunkErrored: Uint8Array = buffer.subarray(start, end);
  const chunkAfter: Uint8Array = buffer.subarray(end, chunkAfterEnd);

  const before = (value: string = '...'): string => {
    return (chunkBeforeStart === 0)
      ? ''
      : value;
  };

  const after = (value: string = '...'): string => {
    return (chunkAfterEnd === buffer.length)
      ? ''
      : value;
  };

  const afterIfNotEmpty = (input: string, after: string): string => {
    return (input === '')
      ? ''
      : `${input}${after}`;
  };

  const bytes = (chunk: Uint8Array): string => {
    return chunk.join(', ');
  };

  const chars = (chunk: Uint8Array): string => {
    return new TextDecoder().decode(chunk);
  };

  console.log(`from index ${start} to ${end}:`);
  console.log(`%c${before()}${afterIfNotEmpty(bytes(chunkBefore), ', ')}%c${afterIfNotEmpty(bytes(chunkErrored), ', ')}%c${bytes(chunkAfter)}${after()}`, chunkBeforeStyle, chunkErroredStyle, chunkAfterStyle);
  console.log(`%c${before()}${chars(chunkBefore)}%c${chars(chunkErrored)}%c${chars(chunkAfter)}${after()}`, chunkBeforeStyle, chunkErroredStyle, chunkAfterStyle);
}
