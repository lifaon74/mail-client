import { MIMEType } from '../../classes/mime-type/mime-type.class';

export function debugMimeType() {
  const mimeType = new MIMEType('text/plain; charset="utf-8";78=');
  Object.assign(window, {
    mimeType
  })
}

