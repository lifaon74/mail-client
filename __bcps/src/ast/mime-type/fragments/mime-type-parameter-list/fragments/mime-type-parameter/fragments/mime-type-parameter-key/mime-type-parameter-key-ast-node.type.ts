import { IAstNode } from '../../../../../../../__shared__/ast-node.type';

export const MimeTypeParameterKeyAstNodeType = 'MimeTypeParameterKey';

export type IMimeTypeParameterKeyAstNodeType = typeof MimeTypeParameterKeyAstNodeType;

export interface IMimeTypeParameterKeyAstNode extends IAstNode<IMimeTypeParameterKeyAstNodeType> {
  readonly value: string;
}



