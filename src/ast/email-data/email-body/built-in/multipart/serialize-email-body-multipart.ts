import { IEmailBodyMultipartAstNode } from './email-body-multipart-ast-node.type';
import { CRLF } from '../../../../../constants/crlf';
import { IEmailDataAstNode } from '../../../email-data/email-data-ast-node.type';
import { serializeEmailData } from '../../../email-data/serialize-email-data';

/** FUNCTION **/

export function serializeEmailBodyMultipart(
  {
    boundary,
    prelude,
    parts,
  }: IEmailBodyMultipartAstNode,
): string {
  return ((prelude === '') ? '' : (prelude + CRLF))
    + parts
      .map((data: IEmailDataAstNode): string => {
        return `--${boundary}` + CRLF
          + serializeEmailData(data);
      })
      .join('')
    + `--${boundary}--`;
}
