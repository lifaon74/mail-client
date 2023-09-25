import {
  IGrammarByteComparisonExpressionAstNode,
} from '../../../grammar-byte-sequence-comparison/comparisons/grammar-byte-comparison-expression-ast-node.type';
import {
  isGrammarByteComparisonAndAstNode,
} from '../../../grammar-byte-sequence-comparison/comparisons/and/grammar-byte-comparison-and-ast-node.type';
import {
  isGrammarByteComparisonEqualsAstNode,
} from '../../../grammar-byte-sequence-comparison/comparisons/equals/grammar-byte-comparison-equals-ast-node.type';
import {
  isGrammarByteComparisonGreaterThanAstNode,
} from '../../../grammar-byte-sequence-comparison/comparisons/greater-than/grammar-byte-comparison-greater-than-ast-node.type';
import {
  isGrammarByteComparisonGreaterThanOrEqualsAstNode,
} from '../../../grammar-byte-sequence-comparison/comparisons/greater-than-or-equals/grammar-byte-comparison-greater-than-or-equals-ast-node.type';
import {
  isGrammarByteComparisonLowerThanAstNode,
} from '../../../grammar-byte-sequence-comparison/comparisons/lower-than/grammar-byte-comparison-lower-than-ast-node.type';
import {
  isGrammarByteComparisonLowerThanOrEqualsAstNode,
} from '../../../grammar-byte-sequence-comparison/comparisons/lower-than-or-equals/grammar-byte-comparison-lower-than-or-equals-ast-node.type';
import {
  isGrammarByteComparisonNotAstNode,
} from '../../../grammar-byte-sequence-comparison/comparisons/not/grammar-byte-comparison-not-ast-node.type';
import {
  isGrammarByteComparisonNotEqualsAstNode,
} from '../../../grammar-byte-sequence-comparison/comparisons/not-equals/grammar-byte-comparison-not-equals-ast-node.type';
import {
  isGrammarByteComparisonOrAstNode,
} from '../../../grammar-byte-sequence-comparison/comparisons/or/grammar-byte-comparison-or-ast-node.type';
import { IGenericAstNode } from '../../../../../../../ast/__shared__/generic-ast-node.type';
import { optimizeGrammarByteComparisonEquals } from './optimize-grammar-byte-comparison-equals';
import { optimizeGrammarByteComparisonNotEquals } from './optimize-grammar-byte-comparison-not-equals';
import { optimizeGrammarByteComparisonGreaterThanOrEquals } from './optimize-grammar-byte-comparison-greater-than-or-equals';
import { optimizeGrammarByteComparisonGreaterThan } from './optimize-grammar-byte-comparison-greater-than';
import { optimizeGrammarByteComparisonLowerThan } from './optimize-grammar-byte-comparison-lower-than';
import { optimizeGrammarByteComparisonLowerThanOrEquals } from './optimize-grammar-byte-comparison-lower-than-or-equals';
import { optimizeGrammarByteComparisonOr } from './optimize-grammar-byte-comparison-or';
import { optimizeGrammarByteComparisonAnd } from './optimize-grammar-byte-comparison-and';
import { optimizeGrammarByteComparisonNot } from './optimize-grammar-byte-comparison-not';

export function optimizeGrammarByteComparisonExpression(
  node: IGrammarByteComparisonExpressionAstNode,
): IGrammarByteComparisonExpressionAstNode {
  if (isGrammarByteComparisonAndAstNode(node)) {
    return optimizeGrammarByteComparisonAnd(node);
  } else if (isGrammarByteComparisonEqualsAstNode(node)) {
    return optimizeGrammarByteComparisonEquals(node);
  } else if (isGrammarByteComparisonGreaterThanAstNode(node)) {
    return optimizeGrammarByteComparisonGreaterThan(node);
  } else if (isGrammarByteComparisonGreaterThanOrEqualsAstNode(node)) {
    return optimizeGrammarByteComparisonGreaterThanOrEquals(node);
  } else if (isGrammarByteComparisonLowerThanAstNode(node)) {
    return optimizeGrammarByteComparisonLowerThan(node);
  } else if (isGrammarByteComparisonLowerThanOrEqualsAstNode(node)) {
    return optimizeGrammarByteComparisonLowerThanOrEquals(node);
  } else if (isGrammarByteComparisonNotAstNode(node)) {
    return optimizeGrammarByteComparisonNot(node);
  } else if (isGrammarByteComparisonNotEqualsAstNode(node)) {
    return optimizeGrammarByteComparisonNotEquals(node);
  } else if (isGrammarByteComparisonOrAstNode(node)) {
    return optimizeGrammarByteComparisonOr(node);
  } else {
    throw new Error(`Unknown node: ${(node as IGenericAstNode).__type__}`);
  }
}
