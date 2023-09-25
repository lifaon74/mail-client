import { IDomainAstNode } from './domain-ast-node.type';

/** FUNCTION **/

export function serializeDomain(
  input: IDomainAstNode,
): string {
  return input.value;
}
