export type IListLike<GValue> =
  | ArrayLike<GValue>
  | Iterable<GValue>
  ;

export interface IListLikeToArrayMapFunction<GIn, GOut> {
  (
    value: GIn,
  ): GOut;
}

export function listLikeToArray<GValue>(
  input: IListLike<GValue>,
): GValue[];
export function listLikeToArray<GIn, GOut>(
  input: IListLike<GIn>,
  mapper: IListLikeToArrayMapFunction<GIn, GOut>,
): GOut[];
export function listLikeToArray<GIn, GOut>(
  input: IListLike<GIn>,
  mapper?: IListLikeToArrayMapFunction<GIn, GOut>,
): GOut[] {
  return Array.from<GIn, GOut>(input, mapper as IListLikeToArrayMapFunction<GIn, GOut>);
}

