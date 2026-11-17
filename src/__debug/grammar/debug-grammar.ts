import { GrammarRule } from './ast/grammar-rule/grammar-rule';
import { GrammarString } from './ast/grammar-byte-sequence-comparison/shortcuts/grammar-string';
import { Grammar } from './ast/grammar/grammar';
import { forEachNextFunction } from './next-function/for-each-next-function';
import { GrammarAlternative } from './ast/grammar-alternative/grammar-alternative';
import { IExecResultExpression } from './exec/grammar-expression/exec-result-expression.type';
import { execGrammar } from './exec/grammar/exec-grammar';
import { GrammarConcat } from './ast/grammar-concat/grammar-concat';
import { GrammarEnd } from './ast/grammar-end/grammar-end';
import { GrammarRepeatZeroOrMore } from './ast/grammar-repeat/shortcuts/grammar-repeat-zero-or-more';
import { GrammarRepeatOneOrMore } from './ast/grammar-repeat/shortcuts/grammar-repeat-one-or-more';
import { GrammarByteRange } from './ast/grammar-byte-sequence-comparison/shortcuts/grammar-byte-range';
import { GrammarRuleIdentifier } from './ast/grammar-rule-identifier/grammar-rule-identifier';
import { GrammarByteComparison } from './ast/grammar-byte-sequence-comparison/shortcuts/grammar-byte-comparison';
import { nor } from './ast/grammar-byte-sequence-comparison/comparisons/not-or/grammar-byte-comparison-not-or.shortcut';
import { eq } from './ast/grammar-byte-sequence-comparison/comparisons/equals/grammar-byte-comparison-equals.shortcut';
import {
  CHAR_SP,
  CHAR_LEFT_PARENTHESIS,
  CHAR_RIGHT_PARENTHESIS,
  CHAR_LEFT_ANGLE_BRACKET,
  CHAR_RIGHT_ANGLE_BRACKET,
  CHAR_AT_SIGN,
  CHAR_COMMA,
  CHAR_SEMI_COLON,
  CHAR_COLON,
  CHAR_BACKSLASH,
  CHAR_DOUBLE_QUOTE,
  CHAR_SLASH,
  CHAR_LEFT_SQUARE_BRACKET,
  CHAR_RIGHT_SQUARE_BRACKET,
  CHAR_QUESTION_MARK,
  CHAR_EQUALS,
} from '../../constants/chars/chars.constant';
import { or } from './ast/grammar-byte-sequence-comparison/comparisons/or/grammar-byte-comparison-or.shortcut';
import { range } from './ast/grammar-byte-sequence-comparison/comparisons/range/grammar-byte-comparison-range.shortcut';
import { ABNF_CORE_RULES } from './built-in/abnf/core-rules';
import { IExecResultAlternative } from './exec/grammar-alternative/exec-result-alternative.type';
import { IExecResultByteSequence } from './exec/grammar-byte-sequence-comparison/exec-result-byte-sequence.type';
import { IExecResultConcat } from './exec/grammar-concat/exec-result-concat.type';
import { IExecResultRule } from './exec/grammar-rule/exec-result-rule.type';
import { IExecResultRepeat } from './exec/grammar-repeat/exec-result-repeat.type';
import { execGrammarOne } from './exec/grammar/exec-grammar-one';
import { GrammarOptional } from './ast/grammar-repeat/shortcuts/grammar-optional';

/*---------*/

export interface IExploreExecResultCallback<GReturn> {
  (
    result: IExecResultRule,
  ): GReturn;
}

export function exploreExecResultAlternative<GReturn>(
  {
    child,
  }: IExecResultAlternative,
  rule: string,
  callback: IExploreExecResultCallback<GReturn>,
): GReturn[] {
  return exploreExecResultExpression<GReturn>(
    child,
    rule,
    callback,
  );
}

export function exploreExecResultByteSequence<GReturn>(
  result: IExecResultByteSequence,
  rule: string,
  callback: IExploreExecResultCallback<GReturn>,
): GReturn[] {
  return [];
}

export function exploreExecResultConcat<GReturn>(
  {
    children,
  }: IExecResultConcat,
  rule: string,
  callback: IExploreExecResultCallback<GReturn>,
): GReturn[] {
  return children.flatMap((child: IExecResultExpression): GReturn[] => {
    return exploreExecResultExpression<GReturn>(
      child,
      rule,
      callback,
    );
  });
}

export function exploreExecResultRepeat<GReturn>(
  {
    children,
  }: IExecResultRepeat,
  rule: string,
  callback: IExploreExecResultCallback<GReturn>,
): GReturn[] {
  return children.flatMap((child: IExecResultExpression): GReturn[] => {
    return exploreExecResultExpression<GReturn>(
      child,
      rule,
      callback,
    );
  });
}

export function exploreExecResultRule<GReturn>(
  node: IExecResultRule,
  rule: string,
  callback: IExploreExecResultCallback<GReturn>,
): GReturn[] {
  if (node.name === rule) {
    return [
      callback(node),
    ];
  } else {
    return exploreExecResultExpression<GReturn>(
      node.child,
      rule,
      callback,
    );
  }
}

export function exploreExecResultExpression<GReturn>(
  result: IExecResultExpression,
  rule: string,
  callback: IExploreExecResultCallback<GReturn>,
): GReturn[] {
  if (result.__type__ === 'alternative') {
    return exploreExecResultAlternative<GReturn>(
      result,
      rule,
      callback,
    );
  } else if (result.__type__ === 'byte-sequence') {
    return exploreExecResultByteSequence<GReturn>(
      result,
      rule,
      callback,
    );
  } else if (result.__type__ === 'concat') {
    return exploreExecResultConcat<GReturn>(
      result,
      rule,
      callback,
    );
  } else if (result.__type__ === 'end') {
    return []; // TODO
  } else if (result.__type__ === 'repeat') {
    return exploreExecResultRepeat<GReturn>(
      result,
      rule,
      callback,
    );
  } else if (result.__type__ === 'rule') {
    return exploreExecResultRule<GReturn>(
      result,
      rule,
      callback,
    );
  } else {
    throw new Error(`Unknown result: ${(result as IExecResultExpression).__type__}`);
  }
}

export function exploreOneExecResultExpression<GReturn>(
  result: IExecResultExpression,
  rule: string,
  callback: IExploreExecResultCallback<GReturn>,
): GReturn {
  return arrayOne<GReturn>(
    exploreExecResultExpression<GReturn>(
      result,
      rule,
      callback,
    ),
  );
}

export function exploreZeroOrOneExecResultExpression<GReturn>(
  result: IExecResultExpression,
  rule: string,
  callback: IExploreExecResultCallback<GReturn>,
): GReturn | undefined {
  return arrayZeroOrOne<GReturn>(
    exploreExecResultExpression<GReturn>(
      result,
      rule,
      callback,
    ),
  );
}

export function arrayOne<GValue>(
  items: GValue[],
): GValue {
  if (items.length === 1) {
    return items[0];
  } else {
    throw new Error(`Found ${items.length} items.`);
  }
}

export function arrayZeroOrOne<GValue>(
  items: GValue[],
): GValue | undefined {
  if (items.length === 0) {
    return void 0;
  } else if (items.length === 1) {
    return items[0];
  } else {
    throw new Error(`Found ${items.length} items.`);
  }
}

/*-------------*/

function debugGrammar1() {
  // /.+b$/g
  // /[^b]+b$/g

  // const test = GrammarRule('test', GrammarAlternative([
  //   GrammarString('a'),
  //   GrammarString('b'),
  // ]));

  // const test = GrammarRule('test', GrammarConcat([
  //   GrammarString('a'),
  //   GrammarString('b'),
  // ]));

  // const test = GrammarRule('test', GrammarConcat([
  //   GrammarAlternative([
  //     GrammarString('b'),
  //     GrammarString('a'),
  //   ]),
  //   GrammarString('b'),
  // ]));

  // const test = GrammarRule('test', GrammarRepeatZeroOrMore(
  //   GrammarByteRange(0, 255),
  // ));

  // const test = GrammarRule('test', GrammarConcat([
  //   GrammarRepeatZeroOrMore(
  //     GrammarByteRange(0, 255),
  //   ),
  //   GrammarString('b'),
  //   // GrammarEnd,
  // ]));

  const test = GrammarRule('test', GrammarAlternative([
    GrammarString('b'),
    GrammarString('a'),
  ]));

  const grammar = Grammar([
    test,
  ]);

  const str: string = `ab`;

  const buffer = new TextEncoder().encode(str);

  const next = execGrammar(grammar, 'test', buffer, 0);
  forEachNextFunction(next, (result: IExecResultExpression): void => {
    console.log(result);
  });
}

function debugGrammar2() {
  // with vulnerability: https://www.sonarsource.com/blog/vulnerable-regular-expressions-javascript/?ref=dailydev

  const origin = GrammarRule('origin', GrammarConcat([
    GrammarRepeatZeroOrMore(
      GrammarConcat([
        GrammarRepeatOneOrMore(
          GrammarByteRange(0, 255),
        ),
        GrammarString('.'),
      ]),
    ),
    GrammarString('localhost'),
    GrammarEnd,
  ]));

  const grammar = Grammar([
    origin,
  ]);

  const str: string = `a.a.a.a.a.a.a.a.a.a.a.a.a.a.a.a.a.a.a.`;

  const buffer = new TextEncoder().encode(str);

  const next = execGrammar(grammar, 'origin', buffer, 0);

  console.time('redos');
  forEachNextFunction(next, (result: IExecResultExpression): void => {
    console.log(result);
  });
  console.timeEnd('redos');
}

function grammarDebugMimeType() {
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

  // const str: string = 'text/plain';
  // const str: string = 'text/html;charset=utf-8';
  // const str: string = 'multipart/form-data; boundary=---------------------------974767299852498929531610575';
  const str: string = 'multipart/form-data; name=myFile; filename="foo.txt"; filename2="foo\\"txt"';
  // const str: string = 'multipart/form-data; filename2="foo\\"txt"';

  const buffer = new TextEncoder().encode(str);

  console.time('exec');
  const rule = execGrammarOne(grammar, 'main', buffer, 0);
  console.timeEnd('exec');

  const read = ({ start, end }: { start: number; end: number; }): string => {
    return new TextDecoder().decode(buffer.subarray(start, end));
  };

  const mimeType = exploreOneExecResultExpression(rule, 'mime-type', (rule: IExecResultRule) => {
    return {
      type: exploreOneExecResultExpression(rule, 'type', (rule: IExecResultRule): string => {
        return read(rule);
      }),
      subtype: exploreOneExecResultExpression(rule, 'subtype', (rule: IExecResultRule): string => {
        return read(rule);
      }),
      parameters: exploreOneExecResultExpression(rule, 'parameters', (rule: IExecResultRule) => {
        return new Map(
          exploreExecResultExpression(rule, 'parameter', (rule: IExecResultRule): [string, string] => {
            const key: string = exploreOneExecResultExpression(rule, 'attribute', (rule: IExecResultRule) => {
              return read(rule);
            });

            const value: string = exploreOneExecResultExpression(rule, 'value', (rule: IExecResultRule) => {
              return exploreZeroOrOneExecResultExpression(rule, 'quoted-string', (rule: IExecResultRule) => {
                return [
                  ...exploreExecResultExpression(rule, 'quoted-string-token', (rule: IExecResultRule) => {
                    return rule;
                  }),
                  ...exploreExecResultExpression(rule, 'quoted-pair', (rule: IExecResultRule) => {
                    return rule;
                  }),
                ]
                  .sort((a: IExecResultRule, b: IExecResultRule) => {
                    return a.end - b.end;
                  })
                  .reduce((str: string, rule: IExecResultRule): string => {
                    return str + (
                      (rule.name === 'quoted-string-token')
                        ? read(rule)
                        : '"'
                    );
                  }, '')
                  ;
              }) ?? read(rule);
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

function grammarDebugQuotedPrintable() {
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

  // quoted-printable := qp-line *(CRLF qp-line)
  const quoted_printable = GrammarRule('quoted-printable', GrammarConcat([
    GrammarRuleIdentifier('qp-line'),
    GrammarRepeatZeroOrMore(
      GrammarConcat([
        GrammarRuleIdentifier('CRLF'),
        GrammarRuleIdentifier('qp-line'),
      ]),
    ),
  ]));

  // qp-line := *(qp-segment transport-padding CRLF)
  //             qp-part transport-padding
  const qp_line = GrammarRule('qp-line', GrammarConcat([
    GrammarRepeatZeroOrMore(
      GrammarConcat([
        GrammarRuleIdentifier('qp-segment'),
        GrammarRuleIdentifier('transport-padding'),
        // GrammarRuleIdentifier('CRLF_OR_END'),
        GrammarRuleIdentifier('CRLF'),
      ]),
    ),
    GrammarRuleIdentifier('qp-part'),
    GrammarRuleIdentifier('transport-padding'),
  ]));

  // qp-part := qp-section
  //             ; Maximum length of 76 characters
  const qp_part = GrammarRule('qp-part', GrammarRuleIdentifier('qp-section'));

  // qp-segment := qp-section *(SPACE / TAB) "="
  //                ; Maximum length of 76 characters
  const qp_segment = GrammarRule('qp-segment', GrammarConcat([
    GrammarRuleIdentifier('qp-section'),
    GrammarRepeatZeroOrMore(
      GrammarRuleIdentifier('WSP'),
    ),
    GrammarString('='),
  ]));

  // qp-section := [*(ptext / SPACE / TAB) ptext]
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

  // ptext := hex-octet / safe-char
  const ptext = GrammarRule('ptext', GrammarAlternative([
    GrammarRuleIdentifier('hex-octet'),
    GrammarRuleIdentifier('safe-char'),
  ]));

  // safe-char := <any octet with decimal value of 33 through
  //               60 inclusive, and 62 through 126>
  //               ; Characters not listed as "mail-safe" in
  //               ; RFC 2049 are also not recommended.
  const safe_char = GrammarRule('safe-char', GrammarAlternative([
    GrammarByteRange(33 /* ! */, 60 /* < */),
    // exclude =
    GrammarByteRange(62 /* > */, 126 /* ~ */),
  ]));

  // hex-octet := "=" 2(DIGIT / "A" / "B" / "C" / "D" / "E" / "F")
  //                   ; Octet must be used for characters > 127, =,
  //                   ; SPACEs or TABs at the ends of lines, and is
  //                   ; recommended for any character not listed in
  //                   ; RFC 2049 as "mail-safe".
  const hex_octet = GrammarRule('hex-octet', GrammarConcat([
    GrammarString('='),
    GrammarRuleIdentifier('HEXDIG'),
    GrammarRuleIdentifier('HEXDIG'),
  ]));

  // transport-padding := *LWSP-char
  //                           ; Composers MUST NOT generate
  //                           ; non-zero length transport
  //                           ; padding, but receivers MUST
  //                           ; be able to handle padding
  //                           ; added by message transports.
  const transport_padding = GrammarRule('transport-padding', GrammarRepeatZeroOrMore(
    GrammarString('WSP'),
  ));

  const grammar = Grammar([
    ...ABNF_CORE_RULES,
    // CRLF_OR_END,
    main,
    quoted_printable,
    qp_line,
    qp_part,
    qp_segment,
    qp_section,
    ptext,
    safe_char,
    hex_octet,
    transport_padding,
  ]);

  // const str: string = `ab`;
  // const str: string = `Bonjour`;
  // const str: string = `Bonjour,=C2=A0`;
  const str: string = `Bonjour Bonjour`;

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

  const next = execGrammar(grammar, 'main', buffer, 0);

  console.time('run');
  forEachNextFunction(next, (result: IExecResultExpression): void => {
    console.log(result);
  });
  console.timeEnd('run');

  // console.time('exec');
  // const rule = execGrammarOne(grammar, 'main', buffer, 0);
  // console.timeEnd('exec');

  // console.log(rule);
}

/*--*/

// doc: https://www.sonarsource.com/blog/vulnerable-regular-expressions-javascript/?ref=dailydev

export function debugGrammar() {
  // debugGrammar1();
  // debugGrammar2();
  // grammarDebugMimeType();
  grammarDebugQuotedPrintable();
}

