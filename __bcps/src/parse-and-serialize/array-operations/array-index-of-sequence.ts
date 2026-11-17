export function arrayIndexOfSequence(
  array: ArrayLike<any>,
  sequence: ArrayLike<any>,
  fromIndex: number = 0,
): number {
  const array_length: number = array.length;
  const sequence_length: number = sequence.length;
  const end: number = Math.max(0, array_length - sequence_length);

  array_loop: for (let i = fromIndex; i < end; i++) {
    for (let j = 0; j < sequence_length; j++) {
      if (array[i + j] !== sequence_length[j]) {
        continue array_loop;
      }
    }
    return i;
  }
  return -1;
}
