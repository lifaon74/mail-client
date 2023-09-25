import { IGrammarExpressionAstNode } from '../../../ast/grammar-expression/grammar-expression-ast-node.type';
import { ILines } from '../../../../../../misc/lines/lines.type';
import { isGrammarAlternativeAstNode } from '../../../ast/grammar-alternative/grammar-alternative-ast-node.type';
import {
  transpileGrammarAlternativeToUint8ArrayParser,
} from '../../alternative/transpile/transpile-grammar-alternative-to-uint8-array-parser';
import {
  isGrammarByteSequenceComparisonAstNode,
} from '../../../ast/grammar-byte-sequence-comparison/grammar-byte-sequence-comparison-ast-node.type';
import {
  transpileGrammarByteSequenceComparisonToUint8ArrayParser,
} from '../../byte-sequence-comparison/transpile/transpile-grammar-byte-sequence-comparison-to-uint8-array-parser';
import { isGrammarConcatAstNode } from '../../../ast/grammar-concat/grammar-concat-ast-node.type';
import {
  transpileGrammarConcatToUint8ArrayParser,
} from '../../concat/transpile/transpile-grammar-concat-to-uint8-array-parser';
import { isGrammarRepeatAstNode } from '../../../ast/grammar-repeat/grammar-repeat-ast-node.type';
import {
  transpileGrammarRepeatToUint8ArrayParser,
} from '../../repeat/transpile/transpile-grammar-repeat-to-uint8-array-parser';
import { isGrammarRuleIdentifierAstNode } from '../../../ast/grammar-rule-identifier/grammar-rule-identifier-ast-node.type';
import {
  transpileGrammarRuleIdentifierToUint8ArrayParser,
} from '../../rule-identifier/transpile/transpile-grammar-rule-identifier-to-uint8-array-parser';
import { IGenericAstNode } from '../../../../../../ast/__shared__/generic-ast-node.type';
import { isGrammarEndAstNode } from '../../../ast/grammar-end/grammar-end-ast-node.type';
import { transpileGrammarEndToUint8ArrayParser } from '../../end/transpile/transpile-grammar-end-to-uint8-array-parser';

export function transpileGrammarExpressionToUint8ArrayParser(
  node: IGrammarExpressionAstNode,
): ILines {
  if (isGrammarAlternativeAstNode(node)) {
    return transpileGrammarAlternativeToUint8ArrayParser(node);
  } else if (isGrammarByteSequenceComparisonAstNode(node)) {
    return transpileGrammarByteSequenceComparisonToUint8ArrayParser(node);
  } else if (isGrammarConcatAstNode(node)) {
    return transpileGrammarConcatToUint8ArrayParser(node);
  } else if (isGrammarEndAstNode(node)) {
    return transpileGrammarEndToUint8ArrayParser(node);
  } else if (isGrammarRepeatAstNode(node)) {
    return transpileGrammarRepeatToUint8ArrayParser(node);
  } else if (isGrammarRuleIdentifierAstNode(node)) {
    return transpileGrammarRuleIdentifierToUint8ArrayParser(node);
  } else {
    throw new Error(`Unknown node: ${(node as IGenericAstNode).__type__}`);
  }
}
