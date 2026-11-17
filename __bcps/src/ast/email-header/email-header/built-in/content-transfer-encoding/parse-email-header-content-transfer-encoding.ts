import {
  IEmailHeaderContentTransferEncodingAstNode,
  EmailHeaderContentTransferEncodingAstNodeType,
  EmailHeaderContentTransferEncodingAstNodeKey,
} from './email-header-content-transfer-encoding-ast-node.type';

/** FUNCTION **/

export function parseEmailHeaderContentTransferEncoding(
  input: string,
): IEmailHeaderContentTransferEncodingAstNode {
  return {
    __type__: EmailHeaderContentTransferEncodingAstNodeType,
    key: EmailHeaderContentTransferEncodingAstNodeKey,
    value: input,
  };
}
