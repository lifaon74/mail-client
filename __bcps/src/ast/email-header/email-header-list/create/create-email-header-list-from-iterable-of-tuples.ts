import { IEmailHeaderListAstNode, EmailHeaderListAstNodeType } from '../email-header-list-ast-node.type';
import { IEmailHeaderTuple, parseEmailHeaderFromTuple } from '../../email-header/parse/parse-email-header-from-tuple';

/** TYPES **/


export type IEmailHeaderListIterableOfTuples = Iterable<IEmailHeaderTuple>;

/** FUNCTION **/

export function createEmailHeaderListFromIterableOfTuples(
  input: IEmailHeaderListIterableOfTuples,
): IEmailHeaderListAstNode {
  return {
    __type__: EmailHeaderListAstNodeType,
    items: Array.from(input, parseEmailHeaderFromTuple),
  };
}
