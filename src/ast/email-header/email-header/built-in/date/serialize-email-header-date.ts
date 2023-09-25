import { IEmailHeaderDateAstNode, EmailHeaderDateAstNodeKey } from './email-header-date-ast-node.type';
import { formatDateToEmailDataDateHeader } from './functions/format-date-to-email-data-date-header';
import { serializeEmailHeaderFromKeyValueStrings } from '../../serialize/serialize-email-header-from-key-value-strings';

/** FUNCTION **/

export function serializeEmailHeaderDate(
  {
    date,
  }: IEmailHeaderDateAstNode,
): string {
  return serializeEmailHeaderFromKeyValueStrings(
    EmailHeaderDateAstNodeKey,
    formatDateToEmailDataDateHeader(date)
  );
}
