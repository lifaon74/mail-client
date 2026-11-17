import { IMFHeaders } from '../../classes/email/email-headers/email-headers.class';
import { EmailData } from '../../classes/email/email-data/email-data.class';
import { EmailBodyText } from '../../classes/email/email-body/specialized/email-body-text.class';
import { MIMEType } from '../../classes/mime-type/mime-type.class';
import { EmailBodyMultipart } from '../../classes/email/email-body/specialized/email-body-multipart.class';
import { MAIL_CONTENT8, MAIL_CONTENT81, MAIL_CONTENT82, MAIL_CONTENT9 } from '../../__doc/samples';

function debugEmailHeaders() {
  const headers = new IMFHeaders();

//   const headers = EmailHeaders.parse(`Message-ID: <79505ff2-020b-4595-68f4-3e045ee025fe@infomaniak.com>
// Date: Wed, 23 Feb 2022 16:57:15 +0100
// MIME-Version: 1.0
// User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Thunderbird/91.6.1
// Content-Language: en-US
// To: valentin.richard@infomaniak.com
// From: "valentin.richard" <valentin.richard@infomaniak.com>
// Subject: test
// Content-Type: text/plain; charset=UTF-8; format=flowed
// Content-Transfer-Encoding: 7bit`.replaceAll('\n', '\r\n'));

  Object.assign(window, {
    headers,
  });

  // headers.setMIMEVersion(1.0);
  // console.log(headers.getMIMEVersion());
  //
  // headers.setContentType('text/plain');
  // console.log(headers.getContentType()!.toString());
  //
  // headers.setContentTransferEncoding('base64');
  // headers.set('Content-Transfer-Encoding', '7bit')
  // console.log(headers.getContentTransferEncoding()!.toString());
  //
  // // headers.setDate(Date.now());
  // headers.setDate('Wed, 23 Feb 2022 16:57:15 +0100');
  // console.log(
  //   headers.getDate()!.toString(),
  //   '\n',
  //   headers.get('Date'),
  // );
}

/*
DOC:

address specification: https://datatracker.ietf.org/doc/html/rfc2822#section-3.4

 */

function debugEmailData() {
  // const data = new EmailData(
  //   new EmailHeaders()
  //     .setMIMEVersion(1.0)
  //     .setContentType('text/plain')
  //     .setContentTransferEncoding('base64')
  //   ,
  //   new EmailBodyText('Hello world !'),
  // );

  // const data = new EmailData(
  //   new EmailHeaders()
  //     .setMIMEVersion(1.0)
  //     .setContentType(`multipart/mixed; boundary="${EmailBodyMultipart.generateBoundary()}"`)
  //   ,
  //   new EmailBodyMultipart([
  //     new EmailData(
  //       new EmailHeaders()
  //         .setContentType('text/plain')
  //         .setContentTransferEncoding('7bit')
  //       ,
  //       new EmailBodyText('Hello world !'),
  //     ),
  //     new EmailData(
  //       new EmailHeaders()
  //         .setContentType('text/html')
  //         .setContentTransferEncoding('base64')
  //       ,
  //       new EmailBodyText('<span>Hello world !</span>'),
  //     ),
  //   ]),
  // );

  // const data = EmailData.parse(MAIL_CONTENT81);
  const data = EmailData.parse(MAIL_CONTENT9);

  Object.assign(window, {
    data,
  });

  // console.log(data.toString());
}

/*-----*/

export function debugEmail() {
  debugEmailHeaders();
  // debugEmailData();
}

