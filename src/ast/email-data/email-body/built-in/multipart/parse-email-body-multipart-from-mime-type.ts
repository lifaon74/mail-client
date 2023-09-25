import { IEmailBodyMultipartAstNode, EmailBodyMultipartAstNodeType } from './email-body-multipart-ast-node.type';
import {
  IContentTransferEncoding,
} from '../../../../email-header/email-header/built-in/content-transfer-encoding/content-transfer-encoding.type';
import { IMimeTypeAstNode } from '../../../../mime-type/mime-type-ast-node.type';
import {
  IMimeTypeParameterAstNode,
} from '../../../../mime-type/fragments/mime-type-parameter-list/fragments/mime-type-parameter/mime-type-parameter-ast-node.type';
import { serializeMimeType } from '../../../../mime-type/serialize-mime-type';
import { CRLF, CRLF_LENGTH } from '../../../../../constants/crlf';
import { IEmailDataAstNode } from '../../../email-data/email-data-ast-node.type';
import { parseEmailData } from '../../../email-data/parse-email-data';

/** FUNCTION **/

export function parseEmailBodyMultipartFromMimeType(
  input: string,
  mimeType: IMimeTypeAstNode,
): IEmailBodyMultipartAstNode {
  const boundaryMimeTypeParameterAstNode: IMimeTypeParameterAstNode | undefined = mimeType.parameters.items.find((parameter: IMimeTypeParameterAstNode): boolean => {
    return parameter.key.value === 'boundary';
  });

  if (boundaryMimeTypeParameterAstNode === void 0) {
    throw new Error(`Missing boundary in mimeType: ${serializeMimeType(mimeType)}`);
  } else {
    const boundary: string = boundaryMimeTypeParameterAstNode!.value.value;

    const parts: string[] = input.split(`--${boundary}` + CRLF);
    const end: string = `--${boundary}--`;
    if (parts.length < 2) {
      throw new Error(`Not enough parts.`);
    } else {
      const preludePart: string = parts.shift()!;

      const prelude: string = preludePart.endsWith(CRLF)
        ? preludePart.slice(0, -CRLF_LENGTH)
        : preludePart;
      const lastPartIndex: number = parts.length - 1;
      const lastPart: string = parts[lastPartIndex];

      if (lastPart.endsWith(end)) {
        parts[lastPartIndex] = parts[lastPartIndex].slice(0, -end.length);

        return {
          __type__: EmailBodyMultipartAstNodeType,
          boundary,
          prelude,
          parts: parts.map((part: string): IEmailDataAstNode => {
            return parseEmailData(part);
          }),
        };
      } else {
        throw new Error(`Invalid last part.`);
      }
    }
  }
}
