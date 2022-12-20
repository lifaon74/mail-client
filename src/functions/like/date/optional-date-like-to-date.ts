import { dateLikeToDate, IDateLike } from './date-like-to-date';

export type IOptionalDateLike =
  | IDateLike
  | undefined
  ;

export function optionalDateLikeToDate(
  input: IOptionalDateLike,
): Date {
  return (input === void 0)
    ? new Date()
    : dateLikeToDate(input);
}
