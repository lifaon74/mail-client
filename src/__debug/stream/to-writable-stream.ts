import {
  createErrorNotification,
  createNextNotification,
  IDefaultNotificationsUnion,
  IObserver,
  STATIC_COMPLETE_NOTIFICATION,
} from '@lirx/core';

export function toWritableStream<GValue>(
  emit: IObserver<IDefaultNotificationsUnion<GValue>>,
): WritableStream<GValue> {
  return new WritableStream<GValue>({
    start(
      controller: WritableStreamDefaultController,
    ): void {
      // controller.signal.onabort
    },
    write(
      chunk: GValue,
      controller: WritableStreamDefaultController,
    ): void {
      emit(createNextNotification(chunk));
    },
    close(): void {
      emit(STATIC_COMPLETE_NOTIFICATION);
    },
    abort(
      reason?: any,
    ): void {
      emit(createErrorNotification(reason));
    },
  });
}
