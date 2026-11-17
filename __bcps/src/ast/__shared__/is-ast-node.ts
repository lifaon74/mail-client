import { IAstNode } from './ast-node.type';

export function isAstNode<GType extends string>(
  input: object,
  type: GType,
): input is IAstNode<GType> {
  return (input as any).__type__ === type;
}

// export function isAstNode<GAstNode extends IGenericAstNode>(
//   input: object,
//   type: InferAstNodeType<GAstNode>,
// ): input is GAstNode {
//   return (input as any).__type__ === type;
// }
