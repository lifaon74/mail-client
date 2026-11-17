import {
  IEmailHeaderContentTransferEncodingAstNode,
  EmailHeaderContentTransferEncodingAstNodeKey,
} from './email-header-content-transfer-encoding-ast-node.type';
import { serializeEmailHeaderFromKeyValueStrings } from '../../serialize/serialize-email-header-from-key-value-strings';

/** FUNCTION **/

export function serializeEmailHeaderContentTransferEncoding(
  {
    value,
  }: IEmailHeaderContentTransferEncodingAstNode,
): string {
  return serializeEmailHeaderFromKeyValueStrings(
    EmailHeaderContentTransferEncodingAstNodeKey,
    value,
  );
}
