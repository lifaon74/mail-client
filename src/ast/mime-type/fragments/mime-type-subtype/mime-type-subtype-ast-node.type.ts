import { IAstNode } from '../../../__shared__/ast-node.type';

export const MimeTypeSubtypeAstNodeType = 'MimeTypeSubtype';

export type IMimeTypeSubtypeAstNodeType = typeof MimeTypeSubtypeAstNodeType;

export interface IMimeTypeSubtypeAstNode extends IAstNode<IMimeTypeSubtypeAstNodeType> {
  readonly value: string;
}



