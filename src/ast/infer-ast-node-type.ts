import { IGenericAstNode } from './generic-ast-node.type';
import { IAstNode } from './ast-node.type';

export type InferAstNodeType<GAstNode extends IGenericAstNode> =
  GAstNode extends IAstNode<infer GType>
    ? GType
    : never;
