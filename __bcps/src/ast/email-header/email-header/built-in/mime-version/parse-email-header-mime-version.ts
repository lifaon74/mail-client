import {
  IEmailHeaderMimeVersionAstNode,
  EmailHeaderMimeVersionAstNodeType,
  EmailHeaderMimeVersionAstNodeKey,
} from './email-header-mime-version-ast-node.type';

/** FUNCTION **/

export function parseEmailHeaderMimeVersion(
  input: string,
): IEmailHeaderMimeVersionAstNode {
  const version: number = Number(input);
  if (Number.isNaN(version)) {
    throw new Error(`Invalid ${EmailHeaderMimeVersionAstNodeType}`);
  } else {
    return {
      __type__: EmailHeaderMimeVersionAstNodeType,
      key: EmailHeaderMimeVersionAstNodeKey,
      version,
    };
  }
}
