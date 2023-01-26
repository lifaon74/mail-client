import { IEmailBody } from './email-body.type';

export function createEmailBody(
  _data: string,
): IEmailBody {

  const getData = (): string => {
    return _data;
  };

  const toString = getData;

  return {
    getData,
    toString,
  };
}
