import { CRLF } from '../../constants/crlf';
import { IEmailBody } from './components/body/email-body.type';
import { IEmailHeaderList } from './components/header-list/email-header-list.type';
import { IEmailData } from './email-data.type';

export interface ICreateEmailDataOptions {
  headers: IEmailHeaderList;
  body: IEmailBody;
}

export function createEmailData(
  {
    headers: _headers,
    body: _body,
  }: ICreateEmailDataOptions,
): IEmailData {

  const getHeaders = (): IEmailHeaderList => {
    return _headers;
  };

  const getBody = (): IEmailBody => {
    return _body;
  };

  const toString = (): string => {
    return _headers.toString() + CRLF
      + CRLF
      + _body.toString();
  };

  return {
    getHeaders,
    getBody,
    toString,
  };
}

