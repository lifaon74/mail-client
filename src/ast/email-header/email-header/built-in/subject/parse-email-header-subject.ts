import {
  IEmailHeaderSubjectAstNode,
  EmailHeaderSubjectAstNodeType,
  EmailHeaderSubjectAstNodeKey,
} from './email-header-subject-ast-node.type';

/** FUNCTION **/

export function parseEmailHeaderSubject(
  input: string,
): IEmailHeaderSubjectAstNode {
  return {
    __type__: EmailHeaderSubjectAstNodeType,
    key: EmailHeaderSubjectAstNodeKey,
    value: input,
  };
}
