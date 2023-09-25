import { IEmailHeaderListAstNode } from '../../../email-header/email-header-list/email-header-list-ast-node.type';
import { IEmailBodyAstNode } from '../email-body-ast-node.type';
import {
  IEmailHeaderContentTypeAstNode,
  isEmailHeaderContentTypeAstNode,
} from '../../../email-header/email-header/built-in/content-type/email-header-content-type-ast-node.type';
import {
  IEmailHeaderContentTransferEncodingAstNode,
  isEmailHeaderContentTransferEncodingAstNode,
} from '../../../email-header/email-header/built-in/content-transfer-encoding/email-header-content-transfer-encoding-ast-node.type';
import { parseEmailBodyGeneric } from '../built-in/__generic__/parse-email-body-generic';
import {
  parseEmailBodyFromMimeTypeAndOptionalContentTransferEncoding,
} from './parse-email-body-from-mime-type-and-optional-content-transfer-encoding';

export function parseEmailBodyFromHeaders(
  input: string,
  headers: IEmailHeaderListAstNode,
): IEmailBodyAstNode {
  const contentTypeNode: IEmailHeaderContentTypeAstNode | undefined = headers.items.find<IEmailHeaderContentTypeAstNode>(isEmailHeaderContentTypeAstNode);

  if (contentTypeNode !== void 0) {
    const contentTransferEncodingNode: IEmailHeaderContentTransferEncodingAstNode | undefined = headers.items.find<IEmailHeaderContentTransferEncodingAstNode>(isEmailHeaderContentTransferEncodingAstNode);

    return parseEmailBodyFromMimeTypeAndOptionalContentTransferEncoding(
      input,
      contentTypeNode.mimeType,
      contentTransferEncodingNode?.value,
    );
  } else {
    return parseEmailBodyGeneric(
      input,
    );
  }
}
