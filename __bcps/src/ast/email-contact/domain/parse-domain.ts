import { IDomainAstNode, DomainAstNodeType } from './domain-ast-node.type';

/** FUNCTION **/

export function parseDomain(
  input: string,
): IDomainAstNode {
  try {
    const url: URL = new URL(`https://${input}`);
    if (input === url.hostname) {
      return {
        __type__: DomainAstNodeType,
        value: input,
      };
    } else {
      throw null;
    }
  } catch {
    throw new Error(`Invalid ${DomainAstNodeType}`);
  }
}
