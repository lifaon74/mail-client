import { IAstNode } from '../../../__shared__/ast-node.type';
import { IMimeTypeParameterAstNode } from './fragments/mime-type-parameter/mime-type-parameter-ast-node.type';
import { isAstNode } from '../../../__shared__/is-ast-node';

export const MimeTypeParameterListAstNodeType = 'MimeTypeParameterList';

export type IMimeTypeParameterListAstNodeType = typeof MimeTypeParameterListAstNodeType;

export interface IMimeTypeParameterListAstNode extends IAstNode<IMimeTypeParameterListAstNodeType> {
  readonly items: readonly IMimeTypeParameterAstNode[];
}

export function isMimeTypeParameterListAstNode(
  input: object,
): input is IMimeTypeParameterListAstNode {
  return isAstNode<IMimeTypeParameterListAstNodeType>(input, MimeTypeParameterListAstNodeType);
}
