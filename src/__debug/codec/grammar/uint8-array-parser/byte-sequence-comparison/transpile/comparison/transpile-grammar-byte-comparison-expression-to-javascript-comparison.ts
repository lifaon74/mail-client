import {
  IGrammarByteComparisonExpressionAstNode,
} from '../../../../ast/grammar-byte-sequence-comparison/comparisons/grammar-byte-comparison-expression-ast-node.type';
import { ILines } from '../../../../../../../misc/lines/lines.type';
import {
  isGrammarByteComparisonAndAstNode,
} from '../../../../ast/grammar-byte-sequence-comparison/comparisons/and/grammar-byte-comparison-and-ast-node.type';
import { transpileGrammarByteComparisonAndToJavascriptComparison } from './transpile-grammar-byte-comparison-and-to-javascript-comparison';
import {
  isGrammarByteComparisonEqualsAstNode,
} from '../../../../ast/grammar-byte-sequence-comparison/comparisons/equals/grammar-byte-comparison-equals-ast-node.type';
import {
  transpileGrammarByteComparisonEqualsToJavascriptComparison,
} from './transpile-grammar-byte-comparison-equals-to-javascript-comparison';
import {
  isGrammarByteComparisonGreaterThanAstNode,
} from '../../../../ast/grammar-byte-sequence-comparison/comparisons/greater-than/grammar-byte-comparison-greater-than-ast-node.type';
import {
  transpileGrammarByteComparisonGreaterThanToJavascriptComparison,
} from './transpile-grammar-byte-comparison-greater-than-to-javascript-comparison';
import {
  isGrammarByteComparisonGreaterThanOrEqualsAstNode,
} from '../../../../ast/grammar-byte-sequence-comparison/comparisons/greater-than-or-equals/grammar-byte-comparison-greater-than-or-equals-ast-node.type';
import {
  transpileGrammarByteComparisonGreaterThanOrEqualsToJavascriptComparison,
} from './transpile-grammar-byte-comparison-greater-than-or-equals-to-javascript-comparison';
import {
  isGrammarByteComparisonLowerThanAstNode,
} from '../../../../ast/grammar-byte-sequence-comparison/comparisons/lower-than/grammar-byte-comparison-lower-than-ast-node.type';
import {
  transpileGrammarByteComparisonLowerThanToJavascriptComparison,
} from './transpile-grammar-byte-comparison-lower-than-to-javascript-comparison';
import {
  isGrammarByteComparisonLowerThanOrEqualsAstNode,
} from '../../../../ast/grammar-byte-sequence-comparison/comparisons/lower-than-or-equals/grammar-byte-comparison-lower-than-or-equals-ast-node.type';
import {
  transpileGrammarByteComparisonLowerThanOrEqualsToJavascriptComparison,
} from './transpile-grammar-byte-comparison-lower-than-or-equals-to-javascript-comparison';
import {
  isGrammarByteComparisonNotAstNode,
} from '../../../../ast/grammar-byte-sequence-comparison/comparisons/not/grammar-byte-comparison-not-ast-node.type';
import { transpileGrammarByteComparisonNotToJavascriptComparison } from './transpile-grammar-byte-comparison-not-to-javascript-comparison';
import {
  isGrammarByteComparisonNotEqualsAstNode,
} from '../../../../ast/grammar-byte-sequence-comparison/comparisons/not-equals/grammar-byte-comparison-not-equals-ast-node.type';
import {
  transpileGrammarByteComparisonNotEqualsToJavascriptComparison,
} from './transpile-grammar-byte-comparison-not-equals-to-javascript-comparison';
import {
  isGrammarByteComparisonOrAstNode,
} from '../../../../ast/grammar-byte-sequence-comparison/comparisons/or/grammar-byte-comparison-or-ast-node.type';
import { transpileGrammarByteComparisonOrToJavascriptComparison } from './transpile-grammar-byte-comparison-or-to-javascript-comparison';
import { IGenericAstNode } from '../../../../../../../ast/__shared__/generic-ast-node.type';

export function transpileGrammarByteComparisonExpressionToJavascriptComparison(
  node: IGrammarByteComparisonExpressionAstNode,
  value: string,
): ILines {
  if (isGrammarByteComparisonAndAstNode(node)) {
    return transpileGrammarByteComparisonAndToJavascriptComparison(node, value);
  } else if (isGrammarByteComparisonEqualsAstNode(node)) {
    return transpileGrammarByteComparisonEqualsToJavascriptComparison(node, value);
  } else if (isGrammarByteComparisonGreaterThanAstNode(node)) {
    return transpileGrammarByteComparisonGreaterThanToJavascriptComparison(node, value);
  } else if (isGrammarByteComparisonGreaterThanOrEqualsAstNode(node)) {
    return transpileGrammarByteComparisonGreaterThanOrEqualsToJavascriptComparison(node, value);
  } else if (isGrammarByteComparisonLowerThanAstNode(node)) {
    return transpileGrammarByteComparisonLowerThanToJavascriptComparison(node, value);
  } else if (isGrammarByteComparisonLowerThanOrEqualsAstNode(node)) {
    return transpileGrammarByteComparisonLowerThanOrEqualsToJavascriptComparison(node, value);
  } else if (isGrammarByteComparisonNotAstNode(node)) {
    return transpileGrammarByteComparisonNotToJavascriptComparison(node, value);
  } else if (isGrammarByteComparisonNotEqualsAstNode(node)) {
    return transpileGrammarByteComparisonNotEqualsToJavascriptComparison(node, value);
  } else if (isGrammarByteComparisonOrAstNode(node)) {
    return transpileGrammarByteComparisonOrToJavascriptComparison(node, value);
  } else {
    throw new Error(`Unknown node: ${(node as IGenericAstNode).__type__}`);
  }
}
