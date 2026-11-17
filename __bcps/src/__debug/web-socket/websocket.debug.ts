import { SMTP_CONFIG } from '../../smtp/config.constant';
import {
  $$map,
  $log,
  IOpenWebSocketByteStreamOptions,
  IWebSocketByteStream,
  openWebSocketByteStream,
  openWebSocketStream,
} from '@lirx/core';

const WEB_SOCKET_PROXY_URL = `ws://localhost:8081`;

// const WEB_SOCKET_PROXY_URL = `ws://51.158.190.34:8081`;

export interface IConnectTLSOptions extends Omit<IOpenWebSocketByteStreamOptions, 'url' | 'protocols'> {
  port: number;
  hostname: string;
  caCerts?: string[];
}

function createRawSocketByteStream(
  {
    signal,
    port,
    hostname,
    caCerts,
  }: IConnectTLSOptions,
): Promise<IWebSocketByteStream> {
  const url = new URL(WEB_SOCKET_PROXY_URL);
  url.searchParams.set('config', JSON.stringify({
    port,
    hostname,
    caCerts,
  }));

  return openWebSocketByteStream({
    url: url.href,
    signal,
  });
}

/*------------*/

async function webSocketDebug1(): Promise<void> {
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

/*--*/

function getConnectTLSOptions(): IConnectTLSOptions {
  return SMTP_CONFIG;

  // return {
  //   ...SMTP_CONFIG,
  //   // hostname: `${encodeURIComponent(config.username)}:${encodeURIComponent(config.password)}@${config.hostname}`,
  //   // hostname: `${encodeURIComponent(config.username)}:${config.password}@${config.hostname}`,
  // };

  // return {
  //   hostname: 'example.com',
  //   port: 80,
  // };
}

async function webSocketDebug2(): Promise<void> {
  const stream = await createRawSocketByteStream(getConnectTLSOptions());

  const $logAsString = $$map($log, (input: ArrayBuffer): string => {
    return `-${new TextDecoder('utf-8', { fatal: true }).decode(input)}-`;
  });

  stream.input$($logAsString);
}

/*---------*/

export async function webSocketDebug(): Promise<void> {
  await webSocketDebug2();
}
