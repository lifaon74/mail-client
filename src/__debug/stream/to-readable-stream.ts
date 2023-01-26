import { defaultNotificationObserver, futureUnsubscribe, IDefaultInNotificationsUnion, IObservable, IUnsubscribe } from '@lirx/core';

export function toReadableStream<GValue>(
  subscribe: IObservable<IDefaultInNotificationsUnion<GValue>>,
): ReadableStream<GValue> {
  let end: () => void;
  return new ReadableStream<GValue>({
    start(
      controller: ReadableStreamDefaultController<GValue>,
    ): void {
      end = futureUnsubscribe((
        unsubscribe: IUnsubscribe,
      ): IUnsubscribe => {
        return subscribe(
          defaultNotificationObserver<GValue>(
            /* next */(value: GValue): void => {
              controller.enqueue(value);
            },
            /* complete */(): void => {
              controller.close();
              unsubscribe();
            },
            /* error */(error: unknown): void => {
              controller.error(error);
              unsubscribe();
            },
          ),
        );
      });
    },
    cancel(): void {
      if (end !== void 0) {
        end();
      }
    },
  });
}
