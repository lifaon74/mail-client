import { IAstNode } from '../../../../../../../__shared__/ast-node.type';

export const MimeTypeParameterValueAstNodeType = 'MimeTypeParameterValue';

export type IMimeTypeParameterValueAstNodeType = typeof MimeTypeParameterValueAstNodeType;

export type IMimeTypeParameterValueAstNodeQuoting =
  | 'no' // not quoted, but could be quoted without harm
  | 'yes-but-optional' // quoted, but could be unquoted without harm
  | 'yes' // quoted, and required
  ;

export interface IMimeTypeParameterValueAstNode extends IAstNode<IMimeTypeParameterValueAstNodeType> {
  readonly value: string;
  readonly quoting: IMimeTypeParameterValueAstNodeQuoting;
}

