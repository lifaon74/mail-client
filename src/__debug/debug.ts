import { debugMimeType } from './mime-type/debug-mime-type';
import { debugRegexp } from './regexp/debug-regexp';

export function debug(): void {
  debugMimeType();
  // debugRegexp();
}
