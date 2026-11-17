import { codecDebug } from './codec/codec-debug';
import { emailDataDebug } from './email-data.debug';
import { streamDebug } from './stream/stream.debug';
import { webSocketStreamDebug } from './web-socket/stream/web-socket-stream.debug';
import { webSocketDebug } from './web-socket/websocket.debug';
import { emailAddressDebug } from './email-address.debug';
import { mimeTypeDebug } from './mime-type.debug';

export function debug(): void {
  // emailAddressDebug();
  // mimeTypeDebug();
  emailDataDebug();
  // webSocketDebug();
  // streamDebug();
  // webSocketStreamDebug();
  // codecDebug();
}
