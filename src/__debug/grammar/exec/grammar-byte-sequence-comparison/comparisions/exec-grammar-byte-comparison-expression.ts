import {
  IGrammarByteComparisonEqualsAstNode,
  isGrammarByteComparisonEqualsAstNode,
} from '../../../ast/grammar-byte-sequence-comparison/comparisons/equals/grammar-byte-comparison-equals-ast-node.type';
import {
  IGrammarByteComparisonAndAstNode,
  isGrammarByteComparisonAndAstNode,
} from '../../../ast/grammar-byte-sequence-comparison/comparisons/and/grammar-byte-comparison-and-ast-node.type';
import {
  IGrammarByteComparisonGreaterThanOrEqualsAstNode,
  isGrammarByteComparisonGreaterThanOrEqualsAstNode,
} from '../../../ast/grammar-byte-sequence-comparison/comparisons/greater-than-or-equals/grammar-byte-comparison-greater-than-or-equals-ast-node.type';
import {
  IGrammarByteComparisonExpressionAstNode,
} from '../../../ast/grammar-byte-sequence-comparison/comparisons/grammar-byte-comparison-expression-ast-node.type';
import {
  isGrammarByteComparisonGreaterThanAstNode,
  IGrammarByteComparisonGreaterThanAstNode,
} from '../../../ast/grammar-byte-sequence-comparison/comparisons/greater-than/grammar-byte-comparison-greater-than-ast-node.type';
import {
  isGrammarByteComparisonLowerThanAstNode,
  IGrammarByteComparisonLowerThanAstNode,
} from '../../../ast/grammar-byte-sequence-comparison/comparisons/lower-than/grammar-byte-comparison-lower-than-ast-node.type';
import {
  isGrammarByteComparisonLowerThanOrEqualsAstNode,
  IGrammarByteComparisonLowerThanOrEqualsAstNode,
} from '../../../ast/grammar-byte-sequence-comparison/comparisons/lower-than-or-equals/grammar-byte-comparison-lower-than-or-equals-ast-node.type';
import {
  isGrammarByteComparisonNotAstNode,
  IGrammarByteComparisonNotAstNode,
} from '../../../ast/grammar-byte-sequence-comparison/comparisons/not/grammar-byte-comparison-not-ast-node.type';
import {
  isGrammarByteComparisonNotEqualsAstNode,
  IGrammarByteComparisonNotEqualsAstNode,
} from '../../../ast/grammar-byte-sequence-comparison/comparisons/not-equals/grammar-byte-comparison-not-equals-ast-node.type';
import {
  isGrammarByteComparisonOrAstNode,
  IGrammarByteComparisonOrAstNode,
} from '../../../ast/grammar-byte-sequence-comparison/comparisons/or/grammar-byte-comparison-or-ast-node.type';
import { IGenericAstNode } from '../../../../../ast/generic-ast-node.type';

export function execGrammarByteComparisonEquals(
  node: IGrammarByteComparisonEqualsAstNode,
  value: number,
): boolean {
  return value === node.value;
}

export function execGrammarByteComparisonNotEquals(
  node: IGrammarByteComparisonNotEqualsAstNode,
  value: number,
): boolean {
  return value !== node.value;
}

export function execGrammarByteComparisonGreaterThan(
  node: IGrammarByteComparisonGreaterThanAstNode,
  value: number,
): boolean {
  return value > node.value;
}

export function execGrammarByteComparisonGreaterThanOrEquals(
  node: IGrammarByteComparisonGreaterThanOrEqualsAstNode,
  value: number,
): boolean {
  return value >= node.value;
}

export function execGrammarByteComparisonLowerThan(
  node: IGrammarByteComparisonLowerThanAstNode,
  value: number,
): boolean {
  return value < node.value;
}

export function execGrammarByteComparisonLowerThanOrEquals(
  node: IGrammarByteComparisonLowerThanOrEqualsAstNode,
  value: number,
): boolean {
  return value <= node.value;
}

export function execGrammarByteComparisonAnd(
  node: IGrammarByteComparisonAndAstNode,
  value: number,
): boolean {
  for (let i: number = 0, l: number = node.expressions.length; i < l; i++) {
    if (!execGrammarByteComparisonExpression(node.expressions[i], value)) {
      return false;
    }
  }
  return true;
}

export function execGrammarByteComparisonOr(
  node: IGrammarByteComparisonOrAstNode,
  value: number,
): boolean {
  for (let i: number = 0, l: number = node.expressions.length; i < l; i++) {
    if (execGrammarByteComparisonExpression(node.expressions[i], value)) {
      return true;
    }
  }
  return false;
}

export function execGrammarByteComparisonNot(
  node: IGrammarByteComparisonNotAstNode,
  value: number,
): boolean {
  return !execGrammarByteComparisonExpression(node.expression, value);
}

export function execGrammarByteComparisonExpression(
  node: IGrammarByteComparisonExpressionAstNode,
  value: number,
): boolean {
  if (isGrammarByteComparisonAndAstNode(node)) {
    return execGrammarByteComparisonAnd(node, value);
  } else if (isGrammarByteComparisonEqualsAstNode(node)) {
    return execGrammarByteComparisonEquals(node, value);
  } else if (isGrammarByteComparisonGreaterThanAstNode(node)) {
    return execGrammarByteComparisonGreaterThan(node, value);
  } else if (isGrammarByteComparisonGreaterThanOrEqualsAstNode(node)) {
    return execGrammarByteComparisonGreaterThanOrEquals(node, value);
  } else if (isGrammarByteComparisonLowerThanAstNode(node)) {
    return execGrammarByteComparisonLowerThan(node, value);
  } else if (isGrammarByteComparisonLowerThanOrEqualsAstNode(node)) {
    return execGrammarByteComparisonLowerThanOrEquals(node, value);
  } else if (isGrammarByteComparisonNotAstNode(node)) {
    return execGrammarByteComparisonNot(node, value);
  } else if (isGrammarByteComparisonNotEqualsAstNode(node)) {
    return execGrammarByteComparisonNotEquals(node, value);
  } else if (isGrammarByteComparisonOrAstNode(node)) {
    return execGrammarByteComparisonOr(node, value);
  } else {
    throw new Error(`Unknown node: ${(node as IGenericAstNode).__type__}`);
  }
}
