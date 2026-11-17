export function arrayIndexOf(
  array: ArrayLike<any>,
  value: any,
  fromIndex: number = 0,
): number {
  const array_length: number = array.length;
  for (let i = fromIndex; i < array_length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
