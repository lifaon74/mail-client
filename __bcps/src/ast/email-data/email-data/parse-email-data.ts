import { IEmailDataAstNode, EmailDataAstNodeType } from './email-data-ast-node.type';
import { CRLF, CRLF_LENGTH } from '../../../constants/crlf';
import { parseEmailHeaderList } from '../../email-header/email-header-list/parse-email-header-list';
import { IEmailHeaderListAstNode } from '../../email-header/email-header-list/email-header-list-ast-node.type';
import { parseEmailBodyFromHeaders } from '../email-body/parse/parse-email-body-from-headers';

/** FUNCTION **/

export function parseEmailData(
  input: string,
): IEmailDataAstNode {
  const index: number = input.indexOf(CRLF + CRLF);

  if ((index === -1) || !input.endsWith(CRLF)) {
    throw new Error(`Invalid ${EmailDataAstNodeType}`);
  } else {
    const headers: IEmailHeaderListAstNode = parseEmailHeaderList(input.slice(0, index));

    return {
      __type__: EmailDataAstNodeType,
      headers,
      body: parseEmailBodyFromHeaders(
        input.slice(index + CRLF_LENGTH + CRLF_LENGTH, -CRLF_LENGTH),
        headers,
      ),
    };
  }
}
