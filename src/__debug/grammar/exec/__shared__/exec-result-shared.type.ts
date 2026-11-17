import { IAstNode } from '../../../../ast/ast-node.type';

export interface IExecResultShared<GType extends string> extends IAstNode<GType> {
  readonly start: number;
  readonly end: number;
}
