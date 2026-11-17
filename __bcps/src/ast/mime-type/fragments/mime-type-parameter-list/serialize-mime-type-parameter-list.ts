import { IMimeTypeParameterListAstNode } from './mime-type-parameter-list-ast-node.type';
import { serializeMimeTypeParameter } from './fragments/mime-type-parameter/serialize-mime-type-parameter';

/** FUNCTION **/

export function serializeMimeTypeParameterList(
  {
    items,
  }: IMimeTypeParameterListAstNode,
): string {
  let output: string = '';

  for (let i: number = 0, l: number = items.length; i < l; i++) {
    if (output !== '') {
      output += '; ';
    }

    output += serializeMimeTypeParameter(items[i]);
  }

  return output;
}
