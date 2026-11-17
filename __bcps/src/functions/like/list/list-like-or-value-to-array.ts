import { IListLike, IListLikeToArrayMapFunction, listLikeToArray } from './list-like-to-array';

export type IListLikeOrValue<GValue> =
  | IListLike<GValue>
  | GValue
  ;

export function listLikeOrValueToListLike<GValue>(
  input: IListLikeOrValue<GValue>,
): IListLike<GValue> {
  if (
    (Symbol.iterator in (input as any))
    || (typeof (input as any).length === 'number')
  ) {
    return input as IListLike<GValue>;
  } else {
    return [
      input,
    ] as IListLike<GValue>;
  }
}

// export interface IListLikeOrValueToArrayIsValueFunction<GValue> {
//   (
//     value: IListLikeOrValue<GValue>,
//   ): value is GValue;
// }

export function listLikeOrValueToArray<GValue>(
  input: IListLikeOrValue<GValue>,
): GValue[];
export function listLikeOrValueToArray<GIn, GOut>(
  input: IListLikeOrValue<GIn>,
  mapper: IListLikeToArrayMapFunction<GIn, GOut>,
): GOut[];
export function listLikeOrValueToArray<GIn, GOut>(
  input: IListLikeOrValue<GIn>,
  mapper?: IListLikeToArrayMapFunction<GIn, GOut>,
): GOut[] {
  return listLikeToArray<GIn, GOut>(
    listLikeOrValueToListLike<GIn>(input),
    mapper as IListLikeToArrayMapFunction<GIn, GOut>,
  );
}

