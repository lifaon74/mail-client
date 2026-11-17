import { ILines } from '../../../../../../misc/lines/lines.type';
import { indentLines } from '../../../../../../misc/lines/functions/indent-lines';
import { IGrammarEndAstNode } from '../../../ast/grammar-end/grammar-end-ast-node.type';

export function transpileGrammarEndToUint8ArrayParser(
  node: IGrammarEndAstNode,
): ILines {
  return [
    `(buffer, index) => {`,
    ...indentLines([
      `return endUint8ArrayParser(buffer, index);`,
    ]),
    `}`,
  ];
}


