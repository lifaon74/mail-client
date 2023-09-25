import { createReadonlyArray, IArrayNewInput, IReadonlyArrayTraitCollection } from '@lifaon/traits';
import { CRLF } from '../../../../../../../../../../../constants/crlf';
import { IMessageId } from '../../../../../../../../../../message-id/message-id.type';
import { IMessageIdList } from './message-id-list.type';
import { IMessageIdListToStringFunctionOptions } from './traits/to-string/message-id-list.to-string.function-definition';

export type IMessageIdListInput = IArrayNewInput<IMessageId>;

export function createMessageIdList(
  messageIds: IMessageIdListInput,
): IMessageIdList {
  const parent: IReadonlyArrayTraitCollection<IMessageId> = createReadonlyArray<IMessageId>(messageIds);

  const toString = (
    {
      withFoldingWhiteSpace = true,
    }: IMessageIdListToStringFunctionOptions = {},
  ): string => {
    const crlf: string = withFoldingWhiteSpace
      ? CRLF
      : '';

    return parent.reduce<string>((previousValue: string, currentValue: IMessageId, index: number): string => {
      // INFO not sure if "," is necessary
      return `${(index === 0) ? '' : `${previousValue},${crlf} `}${currentValue.toString()}`;
    }, '');
  };

  return {
    ...parent,
    toString,
  };
}

