import { IEmailDataAstNode } from './email-data-ast-node.type';
import { CRLF } from '../../../constants/crlf';
import { serializeEmailHeaderList } from '../../email-header/email-header-list/serialize-email-header-list';
import { serializeEmailBody } from '../email-body/serialize-email-body';

/** FUNCTION **/

export function serializeEmailData(
  {
    headers,
    body,
  }: IEmailDataAstNode,
): string {
  return serializeEmailHeaderList(headers) + CRLF
    + CRLF
    + serializeEmailBody(body)
    + CRLF
    ;
  // + this.#body.toString({
  //     mode: 'base64',
  //     split: 'auto',
  //   });
}
