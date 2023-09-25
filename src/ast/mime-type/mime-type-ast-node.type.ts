import { IAstNode } from '../__shared__/ast-node.type';
import { IMimeTypeTypeAstNode } from './fragments/mime-type-type/mime-type-type-ast-node.type';
import { IMimeTypeSubtypeAstNode } from './fragments/mime-type-subtype/mime-type-subtype-ast-node.type';
import { IMimeTypeParameterListAstNode } from './fragments/mime-type-parameter-list/mime-type-parameter-list-ast-node.type';

export const MimeTypeAstNodeType = 'MimeType';

export type IMimeTypeAstNodeType = typeof MimeTypeAstNodeType;

export interface IMimeTypeAstNode extends IAstNode<IMimeTypeAstNodeType> {
  readonly type: IMimeTypeTypeAstNode;
  readonly subtype: IMimeTypeSubtypeAstNode;
  readonly parameters: IMimeTypeParameterListAstNode;
}

