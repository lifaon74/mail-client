import { IEmailHeaderDateAstNode, EmailHeaderDateAstNodeType, EmailHeaderDateAstNodeKey } from './email-header-date-ast-node.type';
import { convertEmailDataDateHeaderToDate } from './functions/convert-email-data-date-header-to-date';

/** FUNCTION **/

export function parseEmailHeaderDate(
  input: string,
): IEmailHeaderDateAstNode {
  return {
    __type__: EmailHeaderDateAstNodeType,
    key: EmailHeaderDateAstNodeKey,
    date: convertEmailDataDateHeaderToDate(input),
  };
}
