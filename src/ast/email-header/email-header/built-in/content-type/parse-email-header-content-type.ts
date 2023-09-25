import {
  IEmailHeaderContentTypeAstNode,
  EmailHeaderContentTypeAstNodeType,
  EmailHeaderContentTypeAstNodeKey,
} from './email-header-content-type-ast-node.type';
import { parseMimeType } from '../../../../mime-type/parse-mime-type';

/** FUNCTION **/

export function parseEmailHeaderContentType(
  input: string,
): IEmailHeaderContentTypeAstNode {
  return {
    __type__: EmailHeaderContentTypeAstNodeType,
    key: EmailHeaderContentTypeAstNodeKey,
    mimeType: parseMimeType(input),
  };
}
