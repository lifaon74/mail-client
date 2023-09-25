import { GrammarRule } from './grammar/ast/grammar-rule/grammar-rule';
import { GrammarConcat } from './grammar/ast/grammar-concat/grammar-concat';
import {
  CHAR_DOUBLE_QUOTE,
  CHAR_EQUALS,
  CHAR_BACKSLASH,
  CHAR_SLASH,
  CHAR_SEMI_COLON,
  CHAR_SP,
  CHAR_LEFT_PARENTHESIS,
  CHAR_RIGHT_PARENTHESIS,
  CHAR_LEFT_ANGLE_BRACKET,
  CHAR_RIGHT_ANGLE_BRACKET,
  CHAR_AT_SIGN,
  CHAR_COMMA,
  CHAR_LEFT_SQUARE_BRACKET,
  CHAR_RIGHT_SQUARE_BRACKET,
  CHAR_QUESTION_MARK,
  CHAR_COLON,
} from '../../constants/chars/chars.constant';
import { IGrammarAstNode } from './grammar/ast/grammar/grammar-ast-node.type';
import { Grammar } from './grammar/ast/grammar/grammar';
import { ILines } from '../../misc/lines/lines.type';
import { linesToString } from '../../misc/lines/functions/lines-to-string';
import { GrammarAlternative } from './grammar/ast/grammar-alternative/grammar-alternative';
import { indentLines } from '../../misc/lines/functions/indent-lines';
import { GrammarRuleIdentifier } from './grammar/ast/grammar-rule-identifier/grammar-rule-identifier';
import { optimizeGrammar } from './grammar/ast/optimize/optimize-grammar';
import { GrammarByteRange } from './grammar/ast/grammar-byte-sequence-comparison/shortcuts/grammar-byte-range';
import { GrammarByteComparison } from './grammar/ast/grammar-byte-sequence-comparison/shortcuts/grammar-byte-comparison';
import { range } from './grammar/ast/grammar-byte-sequence-comparison/comparisons/range/grammar-byte-comparison-range.shortcut';
import { or } from './grammar/ast/grammar-byte-sequence-comparison/comparisons/or/grammar-byte-comparison-or.shortcut';
import { eq } from './grammar/ast/grammar-byte-sequence-comparison/comparisons/equals/grammar-byte-comparison-equals.shortcut';
import { nor } from './grammar/ast/grammar-byte-sequence-comparison/comparisons/not-or/grammar-byte-comparison-not-or.shortcut';
import { GrammarRepeatOneOrMore } from './grammar/ast/grammar-repeat/shortcuts/grammar-repeat-one-or-more';
import { GrammarRepeatZeroOrMore } from './grammar/ast/grammar-repeat/shortcuts/grammar-repeat-zero-or-more';
import { GrammarString } from './grammar/ast/grammar-byte-sequence-comparison/shortcuts/grammar-string';
import { GrammarOptional } from './grammar/ast/grammar-repeat/shortcuts/grammar-optional';
import { alternativeUint8ArrayParser } from './grammar/uint8-array-parser/alternative/transpile/alternative-uint8-array-parser';
import { concatUint8ArrayParser } from './grammar/uint8-array-parser/concat/transpile/concat-uint8-array-parser';
import { repeatUint8ArrayParser } from './grammar/uint8-array-parser/repeat/transpile/repeat-uint8-array-parser';
import { ruleUint8ArrayParser } from './grammar/uint8-array-parser/rule/transpile/rule-uint8-array-parser';
import { transpileGrammarToUint8ArrayParser } from './grammar/uint8-array-parser/grammar/transpile/transpile-grammar-to-uint8-array-parser';
import { IUint8ArrayParserRules } from './grammar/uint8-array-parser/types/uint8-array-parser-rules.type';
import { IGrammarForUint8ArrayParser } from './grammar/uint8-array-parser/types/grammar-for-uint8-array-parser.type';
import {
  byteSequenceComparisonUint8ArrayParser,
} from './grammar/uint8-array-parser/byte-sequence-comparison/transpile/byte-sequence-comparison-uint8-array-parser';
import { stringToLines } from '../../misc/lines/functions/string-to-lines';
import { printErroredUint8ArrayBuffer } from './grammar/uint8-array-parser/__shared__/ast/error/print/print-errored-uint8-array-buffer';
import { GrammarEnd } from './grammar/ast/grammar-end/grammar-end';
import { endUint8ArrayParser } from './grammar/uint8-array-parser/end/transpile/end-uint8-array-parser';
import { printGenericParsedUint8Array } from './grammar/uint8-array-parser/__shared__/ast/print-generic-parsed-uint8-array';
import { ABNF_CORE_RULES } from './grammar/abnf/core-rules';
import { IGenericParsedUint8ArrayAstNode } from './grammar/uint8-array-parser/__shared__/ast/parsed-uint8-array-ast-node.type';
import {
  isParsedUint8ArrayAlternativeAstNode,
  IParsedUint8ArrayAlternativeAstNode,
} from './grammar/uint8-array-parser/alternative/ast/parsed-uint8-array-alternative-ast-node.type';
import {
  isParsedUint8ArrayByteSequenceComparisonAstNode,
  IParsedUint8ArrayByteSequenceComparisonAstNode,
} from './grammar/uint8-array-parser/byte-sequence-comparison/ast/parsed-uint8-array-byte-sequence-comparison-ast-node.type';
import {
  isParsedUint8ArrayConcatAstNode,
  IParsedUint8ArrayConcatAstNode,
} from './grammar/uint8-array-parser/concat/ast/parsed-uint8-array-concat-ast-node.type';
import { isParsedUint8ArrayEndAstNode } from './grammar/uint8-array-parser/end/ast/parsed-uint8-array-end-ast-node.type';
import {
  isParsedUint8ArrayRepeatAstNode,
  IParsedUint8ArrayRepeatAstNode,
} from './grammar/uint8-array-parser/repeat/ast/parsed-uint8-array-repeat-ast-node.type';
import {
  isParsedUint8ArrayRuleAstNode,
  IParsedUint8ArrayRuleAstNode,
} from './grammar/uint8-array-parser/rule/ast/parsed-uint8-array-rule-ast-node.type';
import { IGrammarRulesMap } from './grammar/ast/optimize/types/grammar-rules-map.type';
import { IGrammarRuleAstNode } from './grammar/ast/grammar-rule/grammar-rule-ast-node.type';
import { IGrammarExpressionAstNode } from './grammar/ast/grammar-expression/grammar-expression-ast-node.type';
import {
  isGrammarAlternativeAstNode,
  IGrammarAlternativeAstNode,
} from './grammar/ast/grammar-alternative/grammar-alternative-ast-node.type';
import {
  isGrammarByteSequenceComparisonAstNode,
  IGrammarByteSequenceComparisonAstNode,
} from './grammar/ast/grammar-byte-sequence-comparison/grammar-byte-sequence-comparison-ast-node.type';
import { isGrammarConcatAstNode, IGrammarConcatAstNode } from './grammar/ast/grammar-concat/grammar-concat-ast-node.type';
import { isGrammarEndAstNode } from './grammar/ast/grammar-end/grammar-end-ast-node.type';
import { isGrammarRepeatAstNode, IGrammarRepeatAstNode } from './grammar/ast/grammar-repeat/grammar-repeat-ast-node.type';
import {
  isGrammarRuleIdentifierAstNode,
  IGrammarRuleIdentifierAstNode,
} from './grammar/ast/grammar-rule-identifier/grammar-rule-identifier-ast-node.type';
import {
  IGrammarByteComparisonAndAstNode,
  isGrammarByteComparisonAndAstNode,
} from './grammar/ast/grammar-byte-sequence-comparison/comparisons/and/grammar-byte-comparison-and-ast-node.type';
import {
  IGrammarByteComparisonExpressionAstNode,
} from './grammar/ast/grammar-byte-sequence-comparison/comparisons/grammar-byte-comparison-expression-ast-node.type';
import {
  isGrammarByteComparisonEqualsAstNode,
  IGrammarByteComparisonEqualsAstNode,
} from './grammar/ast/grammar-byte-sequence-comparison/comparisons/equals/grammar-byte-comparison-equals-ast-node.type';
import {
  isGrammarByteComparisonGreaterThanAstNode,
  IGrammarByteComparisonGreaterThanAstNode,
} from './grammar/ast/grammar-byte-sequence-comparison/comparisons/greater-than/grammar-byte-comparison-greater-than-ast-node.type';
import {
  isGrammarByteComparisonGreaterThanOrEqualsAstNode,
  IGrammarByteComparisonGreaterThanOrEqualsAstNode,
} from './grammar/ast/grammar-byte-sequence-comparison/comparisons/greater-than-or-equals/grammar-byte-comparison-greater-than-or-equals-ast-node.type';
import {
  isGrammarByteComparisonLowerThanAstNode,
  IGrammarByteComparisonLowerThanAstNode,
} from './grammar/ast/grammar-byte-sequence-comparison/comparisons/lower-than/grammar-byte-comparison-lower-than-ast-node.type';
import {
  isGrammarByteComparisonLowerThanOrEqualsAstNode,
  IGrammarByteComparisonLowerThanOrEqualsAstNode,
} from './grammar/ast/grammar-byte-sequence-comparison/comparisons/lower-than-or-equals/grammar-byte-comparison-lower-than-or-equals-ast-node.type';
import {
  isGrammarByteComparisonNotAstNode,
  IGrammarByteComparisonNotAstNode,
} from './grammar/ast/grammar-byte-sequence-comparison/comparisons/not/grammar-byte-comparison-not-ast-node.type';
import {
  isGrammarByteComparisonNotEqualsAstNode,
  IGrammarByteComparisonNotEqualsAstNode,
} from './grammar/ast/grammar-byte-sequence-comparison/comparisons/not-equals/grammar-byte-comparison-not-equals-ast-node.type';
import {
  isGrammarByteComparisonOrAstNode,
  IGrammarByteComparisonOrAstNode,
} from './grammar/ast/grammar-byte-sequence-comparison/comparisons/or/grammar-byte-comparison-or-ast-node.type';
import { IGenericAstNode } from '../../ast/__shared__/generic-ast-node.type';
import { u8 } from '../../byte-sequence/byte_t.type';

export type IDecoderResult<GValue> = IteratorResult<void, GValue>;

export type IDecoder<GValue> = Iterator<void, GValue, u8>;

export interface IDecoderFactory<GValue> {
  (): IDecoder<GValue>;
}

export type IDecoderGenerator<GValue> = Generator<void, GValue, u8>;

export interface IDecoderIterable<GValue> {
  [Symbol.iterator]: IDecoderFactory<GValue>;
}

export type IEncoder = Iterator<u8, void, void>;

/*---------*/

// export function textEncoder(
//   input: string,
// ): IEncoder {
//   new TextEncoder().encode(input);
// }

/*---------*/

/*
tutorial: https://tomassetti.me/guide-parsing-algorithms-terminology/

https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form
https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form

https://github.com/dhconnelly/prettybnf
from bnf to abnf: https://softwareengineering.stackexchange.com/questions/356419/is-repetition-expressed-in-backus-naur-form-by-recursive-production-definitions

 */

export function compileAndOptimizeGrammarToUint8ArrayParser(
  grammar: IGrammarAstNode,
): IGrammarForUint8ArrayParser {
  return compileGrammarToUint8ArrayParser(
    optimizeGrammar(grammar),
  );
}

export function compileGrammarToUint8ArrayParser(
  grammar: IGrammarAstNode,
): IGrammarForUint8ArrayParser {
  const code: string = linesToString(
    transpileGrammarToUint8ArrayParser(
      grammar,
    ),
  );

  // console.log(code);

  const VARIABLES = {
    alternativeUint8ArrayParser,
    byteSequenceComparisonUint8ArrayParser,
    concatUint8ArrayParser,
    endUint8ArrayParser,
    repeatUint8ArrayParser,
    ruleUint8ArrayParser,
  };

  const fnc = new Function('VARIABLES', 'rules', linesToString([
    `const {`,
    ...indentLines([
      ...Object.keys(VARIABLES).flatMap((variable: string): ILines => {
        return [
          `${variable},`,
        ];
      }),
    ]),
    `} = VARIABLES;`,
    `return (${code})(rules);`,
  ])) as any;

  return (
    rules?: IUint8ArrayParserRules,
  ): IUint8ArrayParserRules => {
    return fnc(VARIABLES, rules);
  };
}

/*---------*/

export interface IExploreParsedUint8ArrayCallback<GReturn> {
  (
    node: IParsedUint8ArrayRuleAstNode,
  ): GReturn;
}

export function exploreParsedUint8ArrayAlternative<GReturn>(
  {
    child,
  }: IParsedUint8ArrayAlternativeAstNode,
  rule: string,
  callback: IExploreParsedUint8ArrayCallback<GReturn>,
): GReturn[] {
  return exploreGenericParsedUint8Array<GReturn>(
    child,
    rule,
    callback,
  );
}

export function exploreParsedUint8ArrayByteSequenceComparison<GReturn>(
  node: IParsedUint8ArrayByteSequenceComparisonAstNode,
  rule: string,
  callback: IExploreParsedUint8ArrayCallback<GReturn>,
): GReturn[] {
  return [];
}

export function exploreParsedUint8ArrayConcat<GReturn>(
  {
    children,
  }: IParsedUint8ArrayConcatAstNode,
  rule: string,
  callback: IExploreParsedUint8ArrayCallback<GReturn>,
): GReturn[] {
  return children.flatMap((child: IGenericParsedUint8ArrayAstNode) => {
    return exploreGenericParsedUint8Array<GReturn>(
      child,
      rule,
      callback,
    );
  });
}

export function exploreParsedUint8ArrayRepeat<GReturn>(
  {
    children,
  }: IParsedUint8ArrayRepeatAstNode,
  rule: string,
  callback: IExploreParsedUint8ArrayCallback<GReturn>,
): GReturn[] {
  return children.flatMap((child: IGenericParsedUint8ArrayAstNode) => {
    return exploreGenericParsedUint8Array<GReturn>(
      child,
      rule,
      callback,
    );
  });
}

export function exploreParsedUint8ArrayRule<GReturn>(
  node: IParsedUint8ArrayRuleAstNode,
  rule: string,
  callback: IExploreParsedUint8ArrayCallback<GReturn>,
): GReturn[] {
  if (node.name === rule) {
    return [
      callback(node),
    ];
  } else {
    return exploreGenericParsedUint8Array<GReturn>(
      node.child,
      rule,
      callback,
    );
  }
}

export function exploreGenericParsedUint8Array<GReturn>(
  node: IGenericParsedUint8ArrayAstNode,
  rule: string,
  callback: IExploreParsedUint8ArrayCallback<GReturn>,
): GReturn[] {
  if (isParsedUint8ArrayAlternativeAstNode(node)) {
    return exploreParsedUint8ArrayAlternative<GReturn>(
      node,
      rule,
      callback,
    );
  } else if (isParsedUint8ArrayByteSequenceComparisonAstNode(node)) {
    return exploreParsedUint8ArrayByteSequenceComparison<GReturn>(
      node,
      rule,
      callback,
    );
  } else if (isParsedUint8ArrayConcatAstNode(node)) {
    return exploreParsedUint8ArrayConcat<GReturn>(
      node,
      rule,
      callback,
    );
  } else if (isParsedUint8ArrayEndAstNode(node)) {
    return []; // TODO
  } else if (isParsedUint8ArrayRepeatAstNode(node)) {
    return exploreParsedUint8ArrayRepeat<GReturn>(
      node,
      rule,
      callback,
    );
  } else if (isParsedUint8ArrayRuleAstNode(node)) {
    return exploreParsedUint8ArrayRule<GReturn>(
      node,
      rule,
      callback,
    );
  } else {
    throw new Error(`Unknown node: ${(node as IGenericParsedUint8ArrayAstNode).__type__}`);
  }
}

export function exploreGenericParsedUint8ArrayAsOne<GReturn>(
  node: IGenericParsedUint8ArrayAstNode,
  rule: string,
  callback: IExploreParsedUint8ArrayCallback<GReturn>,
): GReturn {
  const result: GReturn[] = exploreGenericParsedUint8Array(
    node,
    rule,
    callback,
  );

  if (result.length === 1) {
    return result[0];
  } else {
    throw new Error(`Found ${result.length} results.`);
  }
}

export function exploreGenericParsedUint8ArrayAsZeroOrOne<GReturn>(
  node: IGenericParsedUint8ArrayAstNode,
  rule: string,
  callback: IExploreParsedUint8ArrayCallback<GReturn>,
): GReturn | undefined {
  const result: GReturn[] = exploreGenericParsedUint8Array(
    node,
    rule,
    callback,
  );

  if (result.length === 0) {
    return void 0;
  } else if (result.length === 1) {
    return result[0];
  } else {
    throw new Error(`Found ${result.length} results.`);
  }
}

/*---------*/

async function grammarDebugABNF() {
  // https://www.rfc-editor.org/rfc/rfc5234

  const CRLF_OR_END = GrammarRule('CRLF_OR_END', GrammarAlternative([
    GrammarRuleIdentifier('CRLF'),
    GrammarEnd,
  ]));

  const main = GrammarRule('main', GrammarConcat([
    GrammarRuleIdentifier('rulelist'),
    GrammarEnd,
  ]));

  const rulelist = GrammarRule('rulelist', GrammarRepeatOneOrMore(
    GrammarAlternative([
      GrammarRuleIdentifier('rule'),
      GrammarConcat([
        GrammarRepeatZeroOrMore(
          GrammarRuleIdentifier('c-wsp'),
        ),
        GrammarRuleIdentifier('c-nl'),
      ]),
    ]),
  ));

  const rule = GrammarRule('rule', GrammarConcat([
    GrammarRuleIdentifier('rulename'),
    GrammarRuleIdentifier('defined-as'),
    GrammarRuleIdentifier('elements'),
    GrammarRuleIdentifier('c-nl'),
  ]));

  const rulename = GrammarRule('rulename', GrammarConcat([
    GrammarRuleIdentifier('ALPHA'),
    GrammarRepeatZeroOrMore(
      GrammarAlternative([
        GrammarRuleIdentifier('ALPHA'),
        GrammarRuleIdentifier('DIGIT'),
        GrammarString('-'),
      ]),
    ),
  ]));

  const defined_as = GrammarRule('defined-as', GrammarConcat([
    GrammarRepeatZeroOrMore(
      GrammarRuleIdentifier('c-wsp'),
    ),
    GrammarAlternative([
      GrammarString('=/'),
      GrammarString('='),
    ]),
    GrammarRepeatZeroOrMore(
      GrammarRuleIdentifier('c-wsp'),
    ),
  ]));

  const elements = GrammarRule('elements', GrammarConcat([
    GrammarRuleIdentifier('alternation'),
    GrammarRepeatZeroOrMore(
      GrammarRuleIdentifier('c-wsp'),
    ),
  ]));

  const c_wsp = GrammarRule('c-wsp', GrammarAlternative([
    GrammarRuleIdentifier('WSP'),
    GrammarConcat([
      GrammarRuleIdentifier('c-nl'),
      GrammarRuleIdentifier('WSP'),
    ]),
  ]));

  const c_nl = GrammarRule('c-nl', GrammarAlternative([
    GrammarRuleIdentifier('comment'),
    GrammarRuleIdentifier('CRLF_OR_END'),
  ]));

  const comment = GrammarRule('comment', GrammarConcat([
    GrammarString(';'),
    GrammarRepeatZeroOrMore(
      GrammarAlternative([
        GrammarRuleIdentifier('WSP'),
        GrammarRuleIdentifier('VCHAR'),
      ]),
    ),
    GrammarRuleIdentifier('CRLF_OR_END'),
  ]));

  const alternation = GrammarRule('alternation', GrammarConcat([
    GrammarRuleIdentifier('concatenation'),
    GrammarRepeatZeroOrMore(
      GrammarConcat([
        GrammarRepeatZeroOrMore(
          GrammarRuleIdentifier('c-wsp'),
        ),
        GrammarString('/'),
        GrammarRepeatZeroOrMore(
          GrammarRuleIdentifier('c-wsp'),
        ),
        GrammarRuleIdentifier('concatenation'),
      ]),
    ),
  ]));

  const concatenation = GrammarRule('concatenation', GrammarConcat([
    GrammarRuleIdentifier('repetition'),
    GrammarRepeatZeroOrMore(
      GrammarConcat([
        GrammarRepeatOneOrMore(
          GrammarRuleIdentifier('c-wsp'),
        ),
        GrammarRuleIdentifier('repetition'),
      ]),
    ),
  ]));

  const repetition = GrammarRule('repetition', GrammarConcat([
    GrammarOptional(
      GrammarRuleIdentifier('repeat'),
    ),
    GrammarRuleIdentifier('element'),
  ]));

  const repeat = GrammarRule('repeat', GrammarAlternative([
    GrammarConcat([
      GrammarRepeatZeroOrMore(
        GrammarRuleIdentifier('DIGIT'),
      ),
      GrammarString('*'),
      GrammarRepeatZeroOrMore(
        GrammarRuleIdentifier('DIGIT'),
      ),
    ]),
    GrammarRepeatOneOrMore(
      GrammarRuleIdentifier('DIGIT'),
    ),
  ]));

  const element = GrammarRule('element', GrammarAlternative([
    GrammarRuleIdentifier('rulename'),
    GrammarRuleIdentifier('group'),
    GrammarRuleIdentifier('option'),
    GrammarRuleIdentifier('char-val'),
    GrammarRuleIdentifier('num-val'),
    GrammarRuleIdentifier('prose-val'),
  ]));

  const group = GrammarRule('group', GrammarConcat([
    GrammarString('('),
    GrammarRepeatZeroOrMore(
      GrammarRuleIdentifier('c-wsp'),
    ),
    GrammarRuleIdentifier('alternation'),
    GrammarRepeatZeroOrMore(
      GrammarRuleIdentifier('c-wsp'),
    ),
    GrammarString(')'),
  ]));

  const option = GrammarRule('option', GrammarConcat([
    GrammarString('['),
    GrammarRepeatZeroOrMore(
      GrammarRuleIdentifier('c-wsp'),
    ),
    GrammarRuleIdentifier('alternation'),
    GrammarRepeatZeroOrMore(
      GrammarRuleIdentifier('c-wsp'),
    ),
    GrammarString(']'),
  ]));

  const char_val = GrammarRule('char-val', GrammarConcat([
    GrammarRuleIdentifier('DQUOTE'),
    GrammarRepeatZeroOrMore(
      GrammarAlternative([
        GrammarByteRange(0x20, 0x21),
        GrammarByteRange(0x23, 0xee7),
      ]),
    ),
    GrammarRuleIdentifier('DQUOTE'),
  ]));

  const num_val = GrammarRule('num-val', GrammarConcat([
    GrammarString('%'),
    GrammarAlternative([
      GrammarRuleIdentifier('bin-val'),
      GrammarRuleIdentifier('dec-val'),
      GrammarRuleIdentifier('hex-val'),
    ]),
  ]));

  const bin_val = GrammarRule('bin-val', GrammarConcat([
    GrammarString('b'),
    GrammarRepeatOneOrMore(
      GrammarRuleIdentifier('BIT'),
    ),
    GrammarOptional(
      GrammarAlternative([
        GrammarRepeatOneOrMore(
          GrammarConcat([
            GrammarString('.'),
            GrammarRepeatOneOrMore(
              GrammarRuleIdentifier('BIT'),
            ),
          ]),
        ),
        GrammarConcat([
          GrammarString('-'),
          GrammarRepeatOneOrMore(
            GrammarRuleIdentifier('BIT'),
          ),
        ]),
      ]),
    ),
  ]));

  const dec_val = GrammarRule('dec-val', GrammarConcat([
    GrammarString('d'),
    GrammarRepeatOneOrMore(
      GrammarRuleIdentifier('DIGIT'),
    ),
    GrammarOptional(
      GrammarAlternative([
        GrammarRepeatOneOrMore(
          GrammarConcat([
            GrammarString('.'),
            GrammarRepeatOneOrMore(
              GrammarRuleIdentifier('DIGIT'),
            ),
          ]),
        ),
        GrammarConcat([
          GrammarString('-'),
          GrammarRepeatOneOrMore(
            GrammarRuleIdentifier('DIGIT'),
          ),
        ]),
      ]),
    ),
  ]));

  const hex_val = GrammarRule('hex-val', GrammarConcat([
    GrammarString('x'),
    GrammarRepeatOneOrMore(
      GrammarRuleIdentifier('HEXDIG'),
    ),
    GrammarOptional(
      GrammarAlternative([
        GrammarRepeatOneOrMore(
          GrammarConcat([
            GrammarString('.'),
            GrammarRepeatOneOrMore(
              GrammarRuleIdentifier('HEXDIG'),
            ),
          ]),
        ),
        GrammarConcat([
          GrammarString('-'),
          GrammarRepeatOneOrMore(
            GrammarRuleIdentifier('HEXDIG'),
          ),
        ]),
      ]),
    ),
  ]));

  const prose_val = GrammarRule('prose-val', GrammarConcat([
    GrammarString('<'),
    GrammarAlternative([
      GrammarByteRange(0x20, 0x3d),
      GrammarByteRange(0x3f, 0x7e),
    ]),
    GrammarString('>'),
  ]));

  const grammar = Grammar([
    ...ABNF_CORE_RULES,
    CRLF_OR_END,
    main,
    rulelist,
    rule,
    rulename,
    defined_as,
    elements,
    c_wsp,
    c_nl,
    comment,
    alternation,
    concatenation,
    repetition,
    repeat,
    element,
    group,
    option,
    char_val,
    num_val,
    bin_val,
    dec_val,
    hex_val,
    prose_val,
  ]);

  // console.log(optimizeGrammar(grammar));

  const compiledGrammar = compileGrammarToUint8ArrayParser(grammar);
  // const compiledGrammar = compileAndOptimizeGrammarToUint8ArrayParser(grammar);
  const rules = compiledGrammar();

  // const raw = `
  //   postal-address   = name-part street zip-part
  // `;

  const raw = await (await fetch(new URL('./samples/abnf.abnf', import.meta.url))).text();

  // const raw = `
  //   postal-address   = name-part street zip-part
  //
  //   name-part        = *(personal-part SP) last-name [SP suffix] CRLF
  //   ; name-part        =/ personal-part CRLF
  //
  //   personal-part    = first-name / (initial ".")
  //   first-name       = *ALPHA
  //   initial          = ALPHA
  //   last-name        = *ALPHA
  //   ; suffix           = ("Jr." / "Sr." / 1*("I" / "V" / "X"))
  //
  //   street           = [apt SP] house-num SP street-name CRLF
  //   apt              = 1*4DIGIT
  //   house-num        = 1*8(DIGIT / ALPHA)
  //   street-name      = 1*VCHAR
  //
  //   zip-part         = town-name "," SP state 1*2SP zip-code CRLF
  //   town-name        = 1*(ALPHA / SP)
  //   state            = 2ALPHA
  //   zip-code         = 5DIGIT ["-" 4DIGIT]
  // `;

  const lines: ILines = stringToLines(raw);
  const str: string = lines.join('\r\n');
  console.log(str);
  const buffer = new TextEncoder().encode(str);

  // console.log(buffer);

  console.time('run');
  // const tree = rules.get('main')!(buffer, 0);
  const tree = rules.get('rulelist')!(buffer, 0);
  console.timeEnd('run');

  // printGenericParsedUint8Array(buffer, tree);
  console.log('done');

  if (tree.end < buffer.length) {
    printErroredUint8ArrayBuffer(buffer, tree.end, tree.end);
  }
}

async function grammarDebugMimeType() {
  // directory rfc: https://datatracker.ietf.org/doc/html/rfc2425

  // mime-type: https://datatracker.ietf.org/doc/html/rfc2045#section-5.1
  // list of iana mime-types: https://www.iana.org/assignments/media-types/media-types.xhtml#multipart

  const main = GrammarRule('main', GrammarConcat([
    GrammarRuleIdentifier('mime-type'),
    GrammarEnd,
  ]));

  const mime_type = GrammarRule('mime-type', GrammarConcat([
    GrammarRuleIdentifier('type'),
    GrammarString('/'),
    GrammarRuleIdentifier('subtype'),
    GrammarRuleIdentifier('parameters'),
  ]));

  const type = GrammarRule('type', GrammarRuleIdentifier('token'));

  const subtype = GrammarRule('subtype', GrammarRuleIdentifier('token'));

  const parameters = GrammarRule('parameters', GrammarConcat([
    GrammarRepeatZeroOrMore(
      GrammarConcat([
        GrammarString(';'),
        GrammarRuleIdentifier('parameter'),
      ]),
    ),
  ]));

  const parameter = GrammarRule('parameter', GrammarConcat([
    GrammarRepeatZeroOrMore(
      GrammarString(' '),
    ),
    GrammarRuleIdentifier('attribute'),
    GrammarString('='),
    GrammarRuleIdentifier('value'),
    GrammarRepeatZeroOrMore(
      GrammarString(' '),
    ),
  ]));

  const attribute = GrammarRule('attribute', GrammarRuleIdentifier('token'));

  const value = GrammarRule('value', GrammarAlternative([
    GrammarRuleIdentifier('token'),
    GrammarRuleIdentifier('quoted-string'),
  ]));

  const token = GrammarRule('token', GrammarRepeatOneOrMore(
    GrammarByteComparison(
      nor(
        eq(CHAR_SP),
        // CTL,
        or(
          range(0x00, 0x1f),
          eq(0x7f),
        ),
        // tspecials
        or(
          eq(CHAR_LEFT_PARENTHESIS),
          eq(CHAR_RIGHT_PARENTHESIS),
          eq(CHAR_LEFT_ANGLE_BRACKET),
          eq(CHAR_RIGHT_ANGLE_BRACKET),
          eq(CHAR_AT_SIGN),
          eq(CHAR_COMMA),
          eq(CHAR_SEMI_COLON),
          eq(CHAR_COLON),
          eq(CHAR_BACKSLASH),
          eq(CHAR_DOUBLE_QUOTE),
          eq(CHAR_SLASH),
          eq(CHAR_LEFT_SQUARE_BRACKET),
          eq(CHAR_RIGHT_SQUARE_BRACKET),
          eq(CHAR_QUESTION_MARK),
          eq(CHAR_EQUALS),
        ),
      ),
    ),
  ));

  const quoted_string = GrammarRule('quoted-string', GrammarConcat([
    GrammarString('"'),
    GrammarRepeatZeroOrMore(
      GrammarAlternative([
        GrammarRuleIdentifier('quoted-pair'),
        GrammarRuleIdentifier('quoted-string-token'),
      ]),
    ),
    GrammarString('"'),
  ]));

  const quoted_pair = GrammarRule('quoted-pair', GrammarString('\\"'));

  const quoted_string_token = GrammarRule('quoted-string-token', GrammarByteComparison(
    or(
      eq(0x09),
      range(0x20 /* SP */, 0x21 /* ! */),
      // exclude "
      range(0x23 /* # */, 0x7e /* ~ */),
    ),
  ), true);

  const grammar = Grammar([
    ...ABNF_CORE_RULES,
    main,
    mime_type,
    type,
    subtype,
    parameters,
    parameter,
    attribute,
    value,
    token,
    quoted_string,
    quoted_pair,
    quoted_string_token,
  ]);

  const compiledGrammar = compileGrammarToUint8ArrayParser(grammar);
  // const compiledGrammar = compileAndOptimizeGrammarToUint8ArrayParser(grammar);
  const rules = compiledGrammar();

  // const str: string = 'text/plain';
  // const str: string = 'text/html;charset=utf-8';
  // const str: string = 'multipart/form-data; boundary=---------------------------974767299852498929531610575';
  const str: string = 'multipart/form-data; name=myFile; filename="foo.txt"; filename2="foo\\"txt"';

  console.log(str);
  const buffer = new TextEncoder().encode(str);

  // console.log(buffer);

  console.time('run');
  const tree = rules.get('main')!(buffer, 0);
  console.timeEnd('run');

  printGenericParsedUint8Array(buffer, tree);
  console.log('done');

  if (tree.end < buffer.length) {
    printErroredUint8ArrayBuffer(buffer, tree.end, tree.end);
  }

  const read = ({ start, end }: { start: number; end: number; }): string => {
    return new TextDecoder().decode(buffer.subarray(start, end));
  };

  const mimeType = exploreGenericParsedUint8ArrayAsOne(tree, 'mime-type', (node: IParsedUint8ArrayRuleAstNode) => {
    return {
      type: exploreGenericParsedUint8ArrayAsOne(node, 'type', (node: IParsedUint8ArrayRuleAstNode): string => {
        return read(node);
      }),
      subtype: exploreGenericParsedUint8ArrayAsOne(node, 'subtype', (node: IParsedUint8ArrayRuleAstNode): string => {
        return read(node);
      }),
      parameters: exploreGenericParsedUint8ArrayAsOne(node, 'parameters', (node: IParsedUint8ArrayRuleAstNode) => {
        return new Map(
          exploreGenericParsedUint8Array(node, 'parameter', (node: IParsedUint8ArrayRuleAstNode): [string, string] => {
            const key: string = exploreGenericParsedUint8ArrayAsOne(node, 'attribute', (node: IParsedUint8ArrayRuleAstNode) => {
              return read(node);
            });

            const value: string = exploreGenericParsedUint8ArrayAsOne(node, 'value', (node: IParsedUint8ArrayRuleAstNode) => {
              return exploreGenericParsedUint8ArrayAsZeroOrOne(node, 'quoted-string', (node: IParsedUint8ArrayRuleAstNode) => {
                return exploreGenericParsedUint8Array(node, 'quoted-string-token', (node: IParsedUint8ArrayRuleAstNode) => {
                  return node;
                })
                  // TODO improve => missing "
                  .reduce((str: string, node: IParsedUint8ArrayRuleAstNode): string => {
                    return str + read(node);
                  }, '');
              }) ?? read(node);
            });

            return [
              key,
              value,
            ];
          }),
        );
      }),
    };
  });

  console.log(mimeType);
}

async function grammarDebugQuotedPrintable() {
  // rfc: https://www.ietf.org/rfc/rfc2045.txt

  // doc: https://www.w3.org/Protocols/rfc1341/5_Content-Transfer-Encoding.html

  /*
     quoted-printable := qp-line *(CRLF qp-line)

     qp-line := *(qp-segment transport-padding CRLF)
                qp-part transport-padding

     qp-part := qp-section
                ; Maximum length of 76 characters

     qp-segment := qp-section *(SPACE / TAB) "="
                   ; Maximum length of 76 characters

     qp-section := [*(ptext / SPACE / TAB) ptext]

     ptext := hex-octet / safe-char

     safe-char := <any octet with decimal value of 33 through
                  60 inclusive, and 62 through 126>
                  ; Characters not listed as "mail-safe" in
                  ; RFC 2049 are also not recommended.

     hex-octet := "=" 2(DIGIT / "A" / "B" / "C" / "D" / "E" / "F")
                  ; Octet must be used for characters > 127, =,
                  ; SPACEs or TABs at the ends of lines, and is
                  ; recommended for any character not listed in
                  ; RFC 2049 as "mail-safe".

     transport-padding := *LWSP-char
                          ; Composers MUST NOT generate
                          ; non-zero length transport
                          ; padding, but receivers MUST
                          ; be able to handle padding
                          ; added by message transports.

   */
  const CRLF_OR_END = GrammarRule('CRLF_OR_END', GrammarAlternative([
    GrammarRuleIdentifier('CRLF'),
    GrammarEnd,
  ]));

  const main = GrammarRule('main', GrammarConcat([
    GrammarRuleIdentifier('quoted-printable'),
    GrammarEnd,
  ]));

  const quoted_printable = GrammarRule('quoted-printable', GrammarConcat([
    GrammarRuleIdentifier('qp-line'),
    GrammarRepeatZeroOrMore(
      GrammarConcat([
        GrammarRuleIdentifier('CRLF'),
        GrammarRuleIdentifier('qp-line'),
      ]),
    ),
  ]));

  const qp_line = GrammarRule('qp-line', GrammarConcat([
    GrammarRepeatZeroOrMore(
      GrammarConcat([
        GrammarRuleIdentifier('qp-segment'),
        GrammarRuleIdentifier('transport-padding'),
        GrammarRuleIdentifier('CRLF_OR_END'),
      ]),
    ),
    GrammarRuleIdentifier('qp-part'),
    GrammarRuleIdentifier('transport-padding'),
  ]));

  const qp_part = GrammarRule('qp-part', GrammarRuleIdentifier('qp-section'));

  const qp_segment = GrammarRule('qp-segment', GrammarConcat([
    GrammarRuleIdentifier('qp-section'),
    GrammarRepeatZeroOrMore(
      GrammarRuleIdentifier('WSP'),
    ),
    GrammarString('='),
  ]));

  const qp_section = GrammarRule('qp-section', GrammarOptional(
    GrammarConcat([
      GrammarRepeatZeroOrMore(
        GrammarAlternative([
          GrammarRuleIdentifier('ptext'),
          GrammarRuleIdentifier('WSP'),
        ]),
      ),
      GrammarRuleIdentifier('ptext'),
    ]),
  ));

  const ptext = GrammarRule('ptext', GrammarAlternative([
    GrammarRuleIdentifier('hex-octet'),
    GrammarRuleIdentifier('safe-char'),
  ]));

  const safe_char = GrammarRule('safe-char', GrammarAlternative([
    GrammarByteRange(33 /* ! */, 60 /* < */),
    // exclude =
    GrammarByteRange(62 /* > */, 126 /* ~ */),
  ]));

  const hex_octet = GrammarRule('hex-octet', GrammarConcat([
    GrammarRuleIdentifier('HEXDIG'),
    GrammarRuleIdentifier('HEXDIG'),
  ]));

  const transport_padding = GrammarRule('transport-padding', GrammarRepeatZeroOrMore(
    GrammarString('WSP'),
  ));

  // /.+b$/g
  // /[^b]+b$/g

  const test = GrammarRule('test', GrammarConcat([
    GrammarRepeatZeroOrMore(
      GrammarByteRange(0, 255),
    ),
    GrammarString('b'),
    // GrammarEnd,
  ]));

  // const quoted_printable = GrammarRule('quoted-printable', GrammarRepeatZeroOrMore(
  //   GrammarAlternative(
  //     GrammarRuleIdentifier('valid-char'),
  //     GrammarRuleIdentifier('encoded-byte'),
  //   ),
  // ));
  //
  // const valid_char = GrammarRule('valid-char', GrammarAlternative(
  //   GrammarByteRange(33 /* ! */, 60 /* < */),
  //   // exclude =
  //   GrammarByteRange(62 /* > */, 126 /* ~ */),
  // ));
  //
  // const encoded_byte = GrammarRule('encoded-byte', GrammarConcat(
  //   GrammarString('='),
  //   GrammarRuleIdentifier('HEXDIG'),
  //   GrammarRuleIdentifier('HEXDIG'),
  // ));

  const grammar = Grammar([
    // ...ABNF_CORE_RULES,
    // CRLF_OR_END,
    // main,
    // quoted_printable,
    // qp_line,
    // qp_part,
    // qp_segment,
    // qp_section,
    // ptext,
    // safe_char,
    // hex_octet,
    // transport_padding,
    test,
  ]);

  const compiledGrammar = compileGrammarToUint8ArrayParser(grammar);
  // const compiledGrammar = compileAndOptimizeGrammarToUint8ArrayParser(grammar);
  const rules = compiledGrammar();

  const str: string = `ab`;
  // const str: string = `Bonjour`;
  // const str: string = `Bonjour,=C2=A0`;

//   const str: string = `Bonjour,=C2=A0La peinture ext=C3=A9rieure de la porte d'entr=C3=A9e de l'ap=
// partement nyon =C3=A0 =C3=A9t=C3=A9 endommag=C3=A9e par le ruban adh=C3=A9s=
// if qui tenait l'=C3=A9criteau.=C2=A0Merci de refaire la peinture blanche pr=
// oprement.=C2=A0
//
// Cordialement=20
// Jean-Christophe RICHARD=20
//
// Envoy=C3=A9 depuis Yahoo=C2=A0Mail pour Android`;

  console.log(str);
  const buffer = new TextEncoder().encode(str);

  // console.log(buffer);

  console.time('run');
  const tree = rules.get('test')!(buffer, 0);
  console.timeEnd('run');

  printGenericParsedUint8Array(buffer, tree);
  console.log('done');

  // if (tree.end < buffer.length) {
  //   printErroredUint8ArrayBuffer(buffer, tree.end, tree.end);
  // }
}

/*---------*/

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

// export interface IExecResultError {
//   __type__: 'error';
//   __subtype__: string;
//   start: number;
//   end: number;
//   [key: string]: any;
// }
//
// export interface IExecResultSuccess {
//   __type__: string;
//   alternatives: IExecResultAlternativesFunction;
// }
//
// export type IExecResult =
//   | IExecResultSuccess
//   | IExecResultError
//   ;

export type IExecResultAlternativesFunction = IterableIterator<IExecResultAlternative>;

export interface IExecResultAlternative {
  __type__: string;
  start: number;
  end: number;

  [key: string]: any;
}

export function* execGrammarByteSequenceComparison(
  node: IGrammarByteSequenceComparisonAstNode,
  buffer: Uint8Array,
  index: number,
): IExecResultAlternativesFunction {
  const length: number = node.expressions.length;
  if (buffer.length >= length) {
    for (let i: number = 0, j: number = index; i < length; i++, j++) {
      if (!execGrammarByteComparisonExpression(node.expressions[i], buffer[j])) {
        yield {
          __type__: 'error',
          __subtype__: 'byte-sequence',
          start: j,
          end: j + 1,
        };
        return;
      }
    }

    yield {
      __type__: 'byte-sequence',
      start: index,
      end: index + length,
    };
  } else {
    yield {
      __type__: 'error',
      __subtype__: 'byte-sequence',
      start: index,
      end: buffer.length,
    };
  }
}

export function * execGrammarEnd(
  buffer: Uint8Array,
  index: number,
): IExecResultAlternativesFunction {
  if (index === buffer.length) {
    yield {
      __type__: 'end',
      start: index,
      end: index,
    };
  } else {
    yield {
      __type__: 'error',
      __subtype__: 'end',
      start: index,
      end: index,
    };
  }
}

export function* execGrammarAlternativeExpression(
  expression: IGrammarExpressionAstNode,
  rules: IGrammarRulesMap,
  buffer: Uint8Array,
  index: number,
): IExecResultAlternativesFunction {

  const alternatives: IExecResultAlternativesFunction = execGrammarExpression(
    expression,
    rules,
    buffer,
    index,
  );

  let result: IteratorResult<IExecResultAlternative>;
  while (!(result = alternatives.next()).done) {
    const alternative: IExecResultAlternative = result.value;

    if (alternative.__type__ === 'error') {
      yield {
        __type__: 'error',
        __subtype__: 'alternative',
        start: index,
        end: alternative.end,
        error: alternative,
      };
    } else {
      yield {
        __type__: 'alternative',
        start: index,
        end: alternative.end,
        child: alternative,
      };
    }
  }
}


export function * execGrammarAlternative(
  node: IGrammarAlternativeAstNode,
  rules: IGrammarRulesMap,
  buffer: Uint8Array,
  index: number,
): IExecResultAlternativesFunction {
  for (let i = 0, l = node.expressions.length; i < l; i++) {
    yield * execGrammarAlternativeExpression(
      node.expressions[i],
      rules,
      buffer,
      index,
    );
  }
}

export function* execGrammarConcatExpressions(
  expressions: readonly IGrammarExpressionAstNode[],
  expressionIndex: number,
  rules: IGrammarRulesMap,
  buffer: Uint8Array,
  index: number,
  start: number,
  children: readonly IExecResultAlternative[],
): IExecResultAlternativesFunction {
  if (expressionIndex >= expressions.length) {
    return yield {
      __type__: 'concat',
      start,
      end: index,
      children,
    };
  } else {
    const alternatives: IExecResultAlternativesFunction = execGrammarExpression(
      expressions[expressionIndex],
      rules,
      buffer,
      index,
    );

    let result: IteratorResult<IExecResultAlternative>;
    while (!(result = alternatives.next()).done) {
      const alternative: IExecResultAlternative = result.value;

      if (alternative.__type__ === 'error') {
        yield {
          __type__: 'error',
          __subtype__: 'concat',
          start,
          end: alternative.end,
          children,
          error: alternative,
        };
      } else {
        yield* execGrammarConcatExpressions(
          expressions,
          expressionIndex + 1,
          rules,
          buffer,
          alternative.end,
          start,
          [
            ...children,
            alternative,
          ],
        );
      }
    }
  }
}

export function execGrammarConcat(
  node: IGrammarConcatAstNode,
  rules: IGrammarRulesMap,
  buffer: Uint8Array,
  index: number,
): IExecResultAlternativesFunction {
  return execGrammarConcatExpressions(
    node.expressions,
    0,
    rules,
    buffer,
    index,
    index,
    [],
  );
}

export function* execGrammarRepeatExpression(
  node: IGrammarRepeatAstNode,
  rules: IGrammarRulesMap,
  buffer: Uint8Array,
  index: number,
  start: number,
  children: readonly IExecResultAlternative[],
): IExecResultAlternativesFunction {

  const alternatives: IExecResultAlternativesFunction = execGrammarExpression(
    node.expression,
    rules,
    buffer,
    index,
  );

  let result: IteratorResult<IExecResultAlternative>;
  while (!(result = alternatives.next()).done) {
    const alternative: IExecResultAlternative = result.value;

    if (alternative.__type__ === 'error') {
      yield {
        __type__: 'error',
        __subtype__: 'repeat',
        start,
        end: alternative.end,
        children,
        error: alternative,
      };
    } else {
      if ((node.min <= children.length) && (children.length <= node.max)) {
        yield {
          __type__: 'repeat',
          start,
          end: alternative.end,
          children,
        };
      }

      if (children.length < node.max) {
        yield* execGrammarRepeatExpression(
          node,
          rules,
          buffer,
          alternative.end,
          start,
          [
            ...children,
            alternative,
          ],
        );
      }
    }
  }
}

export function execGrammarRepeat(
  node: IGrammarRepeatAstNode,
  rules: IGrammarRulesMap,
  buffer: Uint8Array,
  index: number,
): IExecResultAlternativesFunction {
  return execGrammarRepeatExpression(
    node,
    rules,
    buffer,
    index,
    index,
    [],
  );
}

export function execGrammarRuleIdentifier(
  node: IGrammarRuleIdentifierAstNode,
  rules: IGrammarRulesMap,
  buffer: Uint8Array,
  index: number,
): IExecResultAlternativesFunction {
  return execGrammarRule(
    rules.get(
      node.name,
    )!,
    rules,
    buffer,
    index,
  );
}

export function execGrammarExpression(
  node: IGrammarExpressionAstNode,
  rules: IGrammarRulesMap,
  buffer: Uint8Array,
  index: number,
): IExecResultAlternativesFunction {
  if (isGrammarAlternativeAstNode(node)) {
    return execGrammarAlternative(
      node,
      rules,
      buffer,
      index,
    );
  } else if (isGrammarByteSequenceComparisonAstNode(node)) {
    return execGrammarByteSequenceComparison(
      node,
      buffer,
      index,
    );
  } else if (isGrammarConcatAstNode(node)) {
    return execGrammarConcat(
      node,
      rules,
      buffer,
      index,
    );
  } else if (isGrammarEndAstNode(node)) {
    return execGrammarEnd(
      buffer,
      index,
    );
  } else if (isGrammarRepeatAstNode(node)) {
    return execGrammarRepeat(
      node,
      rules,
      buffer,
      index,
    );
  } else if (isGrammarRuleIdentifierAstNode(node)) {
    return execGrammarRuleIdentifier(
      node,
      rules,
      buffer,
      index,
    );
  } else {
    throw new Error(`Unknown node: ${(node as IGrammarExpressionAstNode).__type__}`);
  }
}

export function* execGrammarRule(
  node: IGrammarRuleAstNode,
  rules: IGrammarRulesMap,
  buffer: Uint8Array,
  index: number,
): IExecResultAlternativesFunction {
  const alternatives: IExecResultAlternativesFunction = execGrammarExpression(
    node.expression,
    rules,
    buffer,
    index,
  );

  let result: IteratorResult<IExecResultAlternative>;
  while (!(result = alternatives.next()).done) {
    const alternative: IExecResultAlternative = result.value;

    if (alternative.__type__ === 'error') {
      yield {
        __type__: 'error',
        __subtype__: 'rule',
        name: node.name,
        start: index,
        end: alternative.end,
        error: alternative,
      };
    } else {
      yield {
        __type__: 'rule',
        name: node.name,
        start: index,
        end: alternative.end,
        child: alternative,
      };
    }
  }
}

export function execGrammar(
  node: IGrammarAstNode,
  rule: string,
  buffer: Uint8Array,
  index: number,
): IExecResultAlternativesFunction {
  const rules: IGrammarRulesMap = new Map<string, IGrammarRuleAstNode>(
    node.rules.map((rule: IGrammarRuleAstNode): [string, IGrammarRuleAstNode] => {
      return [
        rule.name,
        rule,
      ];
    }),
  );

  return execGrammarRule(
    rules.get(rule)!,
    rules,
    buffer,
    index,
  );
}

/*--*/

export function grammarDebug1() {
  // https://www.regular-expressions.info/lookaround.html
  // https://javascript.info/regexp-greedy-and-lazy

  // /.+b$/g
  // /[^b]+b$/g

  // const test = GrammarRule('test', GrammarConcat([
  //   GrammarString('a'),
  //   GrammarString('b'),
  // ]));

  // const test = GrammarRule('test', GrammarRepeatZeroOrMore(
  //   GrammarByteRange(0, 255),
  // ));

  // const test = GrammarRule('test', GrammarConcat([
  //   GrammarRepeatZeroOrMore(
  //     GrammarByteRange(0, 255),
  //   ),
  //   // GrammarString('b'),
  //   GrammarEnd,
  // ]));

  const test = GrammarRule('test', GrammarAlternative([
    GrammarString('b'),
    GrammarString('a'),
  ]));

  const _id = GrammarRule('test', GrammarConcat([
    GrammarString('if'),
    GrammarString('a'),
  ]));

  const grammar = Grammar([
    test,
  ]);

  const str: string = `ab`;

  const buffer = new TextEncoder().encode(str);

  const alternatives = execGrammar(grammar, 'test', buffer, 0);
  let result: IteratorResult<IExecResultAlternative>;
  while (!(result = alternatives.next()).done) {
    const alternative: IExecResultAlternative = result.value;
    console.log('alternative', alternative);
  }
}

/*---------*/

export function codecDebug() {
  grammarDebug1();
  // grammarDebug2();
  // grammarDebug3();
  // await grammarDebugABNF();
  // await grammarDebugMimeType();
  // await grammarDebugQuotedPrintable();
}