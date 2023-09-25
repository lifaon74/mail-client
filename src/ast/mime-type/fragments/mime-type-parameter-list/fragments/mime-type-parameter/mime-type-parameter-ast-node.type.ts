import { IAstNode } from '../../../../../__shared__/ast-node.type';
import { IMimeTypeParameterValueAstNode } from './fragments/mime-type-parameter-value/mime-type-parameter-value-ast-node.type';
import { IMimeTypeParameterKeyAstNode } from './fragments/mime-type-parameter-key/mime-type-parameter-key-ast-node.type';

export const MimeTypeParameterAstNodeType = 'MimeTypeParameter';

export type IMimeTypeParameterAstNodeType = typeof MimeTypeParameterAstNodeType;

export interface IMimeTypeParameterAstNode extends IAstNode<IMimeTypeParameterAstNodeType> {
  readonly key: IMimeTypeParameterKeyAstNode;
  readonly value: IMimeTypeParameterValueAstNode;
}

