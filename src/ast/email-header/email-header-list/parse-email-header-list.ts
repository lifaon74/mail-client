import { IEmailHeaderListAstNode, EmailHeaderListAstNodeType } from './email-header-list-ast-node.type';
import { CRLF } from '../../../constants/crlf';
import { parseEmailHeader } from '../email-header/parse-email-header';
import { IEmailHeaderAstNode } from '../email-header/email-header-ast-node.type';

/** FUNCTION **/

export function parseEmailHeaderList(
  input: string,
): IEmailHeaderListAstNode {
  const headers: string[] = [];

  const appendLine = (
    line: string,
  ): void => {
    if (
      line.startsWith(' ')
      || line.startsWith('\t')
    ) {
      if (headers.length === 0) {
        throw new Error(`Not an header list`);
      } else {
        headers[headers.length - 1] += line;
      }
    } else {
      headers.push(line);
    }
  };

  let position: number = 0;

  while (true) {
    const index: number = input.indexOf(CRLF, position);
    if (index === -1) {
      appendLine(input.slice(position));
      break;
    } else {
      appendLine(input.slice(position, index));
      position = index + 2;
    }
  }

  return {
    __type__: EmailHeaderListAstNodeType,
    items: headers.map((header: string): IEmailHeaderAstNode => {
      return parseEmailHeader(header);
    }),
  };
}
