import { writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';

const ROOT_PATH = join(dirname(new URL(import.meta.url).pathname), '..');
const SRC_PATH = join(ROOT_PATH, 'src');

async function run() {
  const lines = [];

  const range = (
    start,
    end,
    map,
  ) => {
    return Array.from({ length: end - start + 1 }, (_, index) => {
      return map(index + start);
    });
  };

  const toHex = (value) => {
    return `0x${value.toString(16).padStart(2, '0')}`;
  };

  const getCode = (code) => {
    if (typeof code === 'string') {
      if (code.length === 1) {
        return code.charCodeAt(0);
      } else {
        throw new Error(`Invalid code`);
      }
    } else {
      return code;
    }
  };

  // https://www.ascii-code.com/
  const chars = [
    // control
    ['NULL', 0],
    ['HT', 'HORIZONTAL_TAB', 'TAB', '\t'],
    ['CR', 'CARRIAGE_RETURN', '\r'],
    ['LF', 'LINE_FEED', '\n'],
    //
    ['SP', 'SPACE', ' '],
    ['EXCLAMATION_MARK', '!'],
    ['DOUBLE_QUOTE', '"'],
    ['NUMBER_SIGN', '#'],
    ['DOLLAR', '$'],
    ['PERCENT', '%'],
    ['AMPERSAND', '&'],
    ['SINGLE_QUOTE', '\''],
    ['OPENING_ROUND_BRACKET', 'LEFT_ROUND_BRACKET', 'OPENING_PARENTHESIS', 'LEFT_PARENTHESIS', '('],
    ['CLOSING_ROUND_BRACKET', 'RIGHT_ROUND_BRACKET', 'CLOSING_PARENTHESIS', 'RIGHT_PARENTHESIS', ')'],
    ['ASTERISK', 'MULTIPLY', '*'],
    ['PLUS', '+'],
    ['COMMA', ','],
    ['HYPHEN', 'MINUS', '-'],
    ['PERIOD', 'DOT', '.'],
    ['SLASH', 'DIVIDE', '/'],

    ...range('0'.charCodeAt(0), '9'.charCodeAt(0), (i) => {
      return [`${String.fromCharCode(i).toUpperCase()}`, i];
    }),

    ['COLON', ':'],
    ['SEMI_COLON', ';'],
    ['OPENING_ANGLE_BRACKET', 'LEFT_ANGLE_BRACKET', 'LESS_THAN', '<'],
    ['EQUALS', '='],
    ['CLOSING_ANGLE_BRACKET', 'RIGHT_ANGLE_BRACKET', 'GREATER_THAN', '>'],
    ['QUESTION_MARK', '?'],
    ['AT_SIGN', '@'],

    ...range('A'.charCodeAt(0), 'Z'.charCodeAt(0), (i) => {
      return [`${String.fromCharCode(i).toUpperCase()}_UPPER_CASE`, i];
    }),

    ['OPENING_SQUARE_BRACKET', 'LEFT_SQUARE_BRACKET', '['],
    ['BACKSLASH', '\\'],
    ['CLOSING_SQUARE_BRACKET', 'RIGHT_SQUARE_BRACKET', ']'],
    ['CARET', 'CIRCUMFLEX', 'HAT', '^'],
    ['UNDERSCORE', '_'],
    ['GRAVE', 'GRAVE_ACCENT', '`'],

    ...range('a'.charCodeAt(0), 'z'.charCodeAt(0), (i) => {
      return [`${String.fromCharCode(i).toUpperCase()}_LOWER_CASE`, i];
    }),


    ['OPENING_CURLY_BRACKET', 'LEFT_CURLY_BRACKET', 'OPENING_BRACE', 'LEFT_BRACE', '{'],
    ['VERTICAL_BAR', '|'],
    ['CLOSING_CURLY_BRACKET', 'RIGHT_CURLY_BRACKET', 'CLOSING_BRACE', 'RIGHT_BRACE', '}'],
    ['TILDE', 'EQUIVALENCY_SIGN', '~'],
  ];


  lines.push(
    ...chars.flatMap((args) => {
      const code = getCode(args[args.length - 1]);
      const hexCode = toHex(code);

      return args.slice(0, -1).map((name) => {
        return `export const CHAR_${name} = ${hexCode}; // ${JSON.stringify(String.fromCharCode(code)).slice(1, -1)}`;
      });
    }),
  );


  await writeFile(join(SRC_PATH, 'constants/chars/chars.constant.ts'), lines.join('\n'));
}

run();

