import { IUint8ArrayParserRules } from './uint8-array-parser-rules.type';

export interface IGrammarForUint8ArrayParser {
  (
    rules?: IUint8ArrayParserRules,
  ): IUint8ArrayParserRules;
}
