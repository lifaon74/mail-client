import { debugRegexp } from './regexp/debug-regexp';
import { debugGrammar } from './grammar/debug-grammar';
import { debugEmail } from './email/debug-email';

export function debug(): void {
  // debugRegexp();
  // debugGrammar();
  debugEmail();
}
