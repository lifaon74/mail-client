import { IEmailBodyTextAstNode } from '../email-body-text-ast-node.type';
import {
  IContentTransferEncoding,
} from '../../../../../email-header/email-header/built-in/content-transfer-encoding/content-transfer-encoding.type';
import { IMimeTypeAstNode } from '../../../../../mime-type/mime-type-ast-node.type';
import {
  IMimeTypeParameterAstNode,
} from '../../../../../mime-type/fragments/mime-type-parameter-list/fragments/mime-type-parameter/mime-type-parameter-ast-node.type';
import {
  parseEmailBodyTextFromCharsetAndContentTransferEncoding,
} from './parse-email-body-text-from-charset-and-content-transfer-encoding';

/** FUNCTION **/

export function parseEmailBodyTextFromMimeTypeAndContentTransferEncoding(
  input: string,
  mimeType: IMimeTypeAstNode,
  contentTransferEncoding: IContentTransferEncoding,
): IEmailBodyTextAstNode {
  const charsetMimeTypeParameterAstNode: IMimeTypeParameterAstNode | undefined = mimeType.parameters.items.find((parameter: IMimeTypeParameterAstNode): boolean => {
    return parameter.key.value === 'charset';
  });

  const charset: string = (charsetMimeTypeParameterAstNode === void 0)
    ? 'utf-8'
    : normalizeCharset(charsetMimeTypeParameterAstNode!.value.value);

  return parseEmailBodyTextFromCharsetAndContentTransferEncoding(
    input,
    charset,
    contentTransferEncoding,
  );
}

export function normalizeCharset(
  charset: string,
): string {
  charset = charset.toLowerCase();

  if (
    (charset === 'utf-8')
    || (charset === 'utf8')
    || (charset === 'unicode-1-1-utf-8')
  ) {
    return 'utf-8';
  } else {
    return charset;
  }
}


