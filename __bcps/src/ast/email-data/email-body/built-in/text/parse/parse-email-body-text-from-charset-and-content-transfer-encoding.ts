import {
  IContentTransferEncoding,
} from '../../../../../email-header/email-header/built-in/content-transfer-encoding/content-transfer-encoding.type';
import { IEmailBodyTextAstNode, EmailBodyTextAstNodeType } from '../email-body-text-ast-node.type';
import { CRLF } from '../../../../../../constants/crlf';
import { DecodeError } from '../../../../../../parse-and-serialize/decode-error';
import { parseHexNumber } from '../../../../../../parse-and-serialize/parse-hex-number';
import { CHAR_EQUALS, CHAR_HT, CHAR_SP, CHAR_NULL, CHAR_CR, CHAR_LF } from '../../../../../../constants/chars/chars.constant';
import {
  IDecoderIterable,
  IDecoder,
  IDecoderResult,
  IDecoderGenerator,
  IDecoderFactory,
} from '../../../../../../__debug/codec/codec-debug';
import { parseSingleHexChar } from '../../../../../../parse-and-serialize/parse-single-hex-char';
import { IByteSequence } from '../../../../../../byte-sequence/byte-sequence.type';
import { u8 } from '../../../../../../byte-sequence/byte_t.type';

// DOC: https://www.w3.org/Protocols/rfc1341/5_Content-Transfer-Encoding.html

export function parseEmailBodyTextFromCharsetAndContentTransferEncoding(
  input: string,
  charset: string,
  contentTransferEncoding: IContentTransferEncoding,
): IEmailBodyTextAstNode {
  let value: string;

  // if (input.endsWith(CRLF)) {
  //   input = input.slice(0, -CRLF_LENGTH)
  // } else {
  //   throw new Error(`Invalid ${EmailBodyTextAstNodeType}`);
  // }

  if (
    (contentTransferEncoding === '7bit')
    || (contentTransferEncoding === '8bit')
    || (contentTransferEncoding === 'binary')
  ) {
    // TODO support multiline
    value = input;
  } else if (contentTransferEncoding === 'quoted-printable') {
    // let result: IteratorResult<>;
    // while (!(result = decoder.next(buffer[i])).done) {
    //
    // }
    // ParseError.catch(() => {
    //   console.log('parseQuotedPrintable', parseQuotedPrintable(buffer));
    // });
    // value = input
    //   .replace(
    //     new RegExp(`=([0-9A-Fa-f][0-9A-Fa-f])`, 'g'),
    //     (_, hex: string): string => {
    //       const code: number = parseInt(hex, 16);
    //       console.log(code);
    //       return String.fromCharCode(code);
    //     },
    //   )
    //   .split(CRLF)
    //   .map((chunk: string): string => {
    //     return chunk.trimEnd();
    //   })
    //   .join('\n');
  } else if (contentTransferEncoding === 'base64') {
    value = atob(input.replace(new RegExp(CRLF, 'g'), ''));
  } else {
    throw new Error(`Unknown contentTransferEncoding: ${contentTransferEncoding}`);
  }

  if (charset !== 'utf-8') {
    throw new Error(`Unsupported charset: ${charset}.`); // TODO support more
    // value = new TextDecoder(charset, { fatal: true }).decode(new Uint8Array(String.from));
  }

  return {
    __type__: EmailBodyTextAstNodeType,
    charset,
    encoding: contentTransferEncoding,
    value,
  };
}

// TODO continue here


export function convertQuotedPrintableStringToDecodedString(
  input: string,
): string {
  return input.replace()
}

