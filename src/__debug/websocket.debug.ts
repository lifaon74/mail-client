import { $log, IOpenWebSocketByteStreamOptions, IWebSocketByteStream, openWebSocketByteStream, openWebSocketStream } from '@lirx/core';

export interface IConnectTLSOptions extends Omit<IOpenWebSocketByteStreamOptions, 'url' | 'protocols'> {
  port: number;
  hostname: string;
  caCerts?: string[];
}

function createRawSocketByteStream(
  {
    signal,
    ...options
  }: IConnectTLSOptions,
): Promise<IWebSocketByteStream> {
  const url = new URL(`ws://localhost:8081`);
  url.searchParams.set('config', JSON.stringify(options));

  return openWebSocketByteStream({
    url: url.href,
    signal,
  });
}

export async function webSocketDebug(): Promise<void> {
  // https://socketsbay.com/test-websockets

  // const url = 'wss://socketsbay.com/wss/v2/1/demo/';
  const url = 'wss://ws.postman-echo.com/raw';

  // const stream = await openWebSocketByteStream({
  //   url,
  // });

  const stream = await openWebSocketStream(new WebSocket(url));

  stream.input$($log);
  // stream.$output(new TextEncoder().encode('abc'));
  stream.$output('abc');
}
