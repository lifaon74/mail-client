import { IMessageId } from './message-id.type';

export interface ICreateMessageIdOptions {
  left: string; // expected valid
  right: string; // expected valid
}

export function createMessageId(
  {
    left: _left,
    right: _right,
  }: ICreateMessageIdOptions,
): IMessageId {

  const getLeft = (): string => {
    return _left;
  };

  const getRight = (): string => {
    return _right;
  };

  const toString = (): string => {
    return `${_left}@${_right}`;
  };

  return {
    getLeft,
    getRight,
    toString,
  };
}
