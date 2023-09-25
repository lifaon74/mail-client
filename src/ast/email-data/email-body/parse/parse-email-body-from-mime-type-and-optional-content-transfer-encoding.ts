import { IEmailBodyAstNode } from '../email-body-ast-node.type';
import {
  IContentTransferEncoding,
} from '../../../email-header/email-header/built-in/content-transfer-encoding/content-transfer-encoding.type';
import {
  parseEmailBodyTextFromMimeTypeAndContentTransferEncoding,
} from '../built-in/text/parse/parse-email-body-text-from-mime-type-and-content-transfer-encoding';
import { IMimeTypeAstNode } from '../../../mime-type/mime-type-ast-node.type';
import { parseEmailBodyGeneric } from '../built-in/__generic__/parse-email-body-generic';
import { parseEmailBodyMultipartFromMimeType } from '../built-in/multipart/parse-email-body-multipart-from-mime-type';

export function parseEmailBodyFromMimeTypeAndOptionalContentTransferEncoding(
  input: string,
  mimeType: IMimeTypeAstNode,
  contentTransferEncoding: IContentTransferEncoding | undefined,
): IEmailBodyAstNode {

  const type: string = mimeType.type.value;

  if (type === 'text') {
    if (contentTransferEncoding === void 0) {
      throw new Error(`Missing contentTransferEncoding`);
    } else {
      return parseEmailBodyTextFromMimeTypeAndContentTransferEncoding(
        input,
        mimeType,
        contentTransferEncoding,
      );
    }
  } else if (type === 'multipart') {
    return parseEmailBodyMultipartFromMimeType(
      input,
      mimeType,
    );
  } else {
    return parseEmailBodyGeneric(
      input,
    );
  }
}
