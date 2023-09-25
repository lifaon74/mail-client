import { IEmailHeaderListAstNode } from './email-header-list-ast-node.type';
import { CRLF } from '../../../constants/crlf';
import { serializeEmailHeader } from '../email-header/serialize-email-header';

/** FUNCTION **/

export function serializeEmailHeaderList(
  {
    items,
  }: IEmailHeaderListAstNode,
): string {
  let output: string = '';

  for (let i: number = 0, l: number = items.length; i < l; i++) {
    if (output !== '') {
      output += CRLF;
    }

    output += serializeEmailHeader(items[i]);
  }

  return output;
}
