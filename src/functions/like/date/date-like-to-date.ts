export type IDateLike =
  | Date
  | number
  ;

export function dateLikeToDate(
  input: IDateLike,
): Date {
  return (typeof input === 'number')
    ? new Date(input)
    : input;
}
