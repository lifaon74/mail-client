import { IAstNode } from '../../../__shared__/ast-node.type';

export const MimeTypeTypeAstNodeType = 'MimeTypeType';

export type IMimeTypeTypeAstNodeType = typeof MimeTypeTypeAstNodeType;

export interface IMimeTypeTypeAstNode extends IAstNode<IMimeTypeTypeAstNodeType> {
  readonly value: string;
}



