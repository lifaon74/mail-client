export interface ISpecializer<GIn, GOut extends GIn> {
  (
    input: GIn,
  ): GOut | null;
}

export function sequentialSpecializers<GIn, GOut extends GIn>(
  specializers: Iterable<ISpecializer<GIn, GOut>>,
): ISpecializer<GIn, GOut> {
  return (
    input: GIn,
  ): GOut | null => {
    const iterator: Iterator<ISpecializer<GIn, GOut>> = specializers[Symbol.iterator]();
    let result: IteratorResult<ISpecializer<GIn, GOut>>;
    while (!(result = iterator.next()).done) {
      const specialized: GOut | null = result.value(input);
      if (specialized !== null) {
        return specialized;
      }
    }
    return null;
  };
}

export function memoizeSpecializer<GIn extends WeakKey, GOut extends GIn>(
  specializer: ISpecializer<GIn, GOut>,
): ISpecializer<GIn, GOut> {
  const memoized: WeakMap<GIn, GOut | null> = new WeakMap<GIn, GOut | null>();
  return (
    input: GIn,
  ): GOut | null => {
    if (!memoized.has(input)) {
      memoized.set(input, specializer(input));
    }
    return memoized.get(input)!;
  };
}

// export interface ISpecializer<GIn> {
//   <GOut extends GIn>(
//     input: GIn,
//   ): GOut | null;
// }
//
// export function createSequentialSpecializer<GIn>(
//   specializers: Iterable<ISpecializer<GIn>>,
// ): ISpecializer<GIn> {
//   return <GOut extends GIn>(
//     input: GIn,
//   ): GOut | null => {
//     const iterator: Iterator<ISpecializer<GIn>> = specializers[Symbol.iterator]();
//     let result: IteratorResult<ISpecializer<GIn>>;
//     while (!(result = iterator.next()).done) {
//       const specialized: GOut | null = result.value(input);
//       if (specialized !== null) {
//         return specialized;
//       }
//     }
//     return null;
//   };
// }
