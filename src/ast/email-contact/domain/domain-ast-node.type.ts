import { IAstNode } from '../../__shared__/ast-node.type';

export const DomainAstNodeType = 'Domain';

export type IDomainAstNodeType = typeof DomainAstNodeType;

export interface IDomainAstNode extends IAstNode<IDomainAstNodeType> {
  readonly value: string;
}



