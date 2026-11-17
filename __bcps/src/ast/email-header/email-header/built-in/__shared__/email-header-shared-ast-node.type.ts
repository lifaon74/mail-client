import { IAstNode } from '../../../../__shared__/ast-node.type';

export interface IEmailHeaderSharedAstNode<GType extends string, GKey extends string> extends IAstNode<GType> {
  readonly key: GKey;
}
