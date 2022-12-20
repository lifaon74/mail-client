import {
  createEmailDataAttachmentsFromFiles,
} from '../classes/email-data/built-in/attachment/build-in/create-email-data-attachments-from-files';
import {
  createEmailDataMultipartAlternativeFromTextAndHTML
} from '../classes/email-data/built-in/multipart/built-in/create-email-data-multipart-alternative-from-text-and-html';
import { createEmailDataTextPlain } from '../classes/email-data/built-in/text-plain/create-email-data-text-plain';
import { createEmailDataFromOptions } from '../functions/send/send';

export async function emailDataDebug(): Promise<void> {
  const fileA = new File(['abc'], 'file.txt', { type: 'text/plain' });
  const fileB = new File([`
  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
    <circle cx="100" cy="100" r="50" stroke="black" stroke-width="5" fill="red" />
  </svg>
  `], 'image.svg', { type: 'image/svg+xml' });

  // const emailData = createEmailData(
  //   creatEmailHeaderListFromEmailHeaders([
  //     createEmailHeaderDateNow(),
  //     // EMAIL_HEADER_CONTENT_TYPE_TEXT_PLAIN_UTF8_CONSTANT,
  //     // EmailHeaderContentTypeMultipartAlternative.generate(),
  //   ]),
  //   createEmailBody('abc'),
  // );

  // const emailData = createEmailDataTextPlain({ text: 'abc' });
  // const emailData = createEmailDataTextHTML({ html: 'abcd' });
  // const emailData = await createEmailDataAttachmentFromFile({
  //   file: new File(['abc'], 'file.txt', { type: 'text/plain' }),
  // });

  // const emailData = createEmailDataMultipartAlternativeFromTextAndHTML({
  //   text: 'text',
  //   html: 'html',
  // });

  // const emailData = await createEmailDataMultipartMixedFromFiles({
  //   files: [
  //     new File(['abc'], 'file.txt', { type: 'text/plain' }),
  //   ],
  // });

  const emailData = createEmailDataFromOptions({
    from: ['alice@example.com'],
    to: ['Bob <bob@example.com>'],
    // subject: 'Hello world !',
    subject: 'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello',
    text: 'abc',
    // html: 'strnh',
    // attachments: await createEmailDataAttachmentsFromFiles({
    //   files: [
    //     fileA,
    //     fileB,
    //   ],
    // }),
  });

  // Message-ID: <79505ff2-020b-4595-68f4-3e045ee025fe@infomaniak.com>
  // Date: Wed, 23 Feb 2022 16:57:15 +0100
  // MIME-Version: 1.0
  // User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Thunderbird/91.6.1
  // Content-Language: en-US
  // To: valentin.richard@infomaniak.com
  // From: "valentin.richard" <valentin.richard@infomaniak.com>
  // Subject: test
  // Content-Type: text/plain; charset=UTF-8; format=flowed
  // Content-Transfer-Encoding: 7bit
  //
  // abc

  // TODO continue here

  console.log(emailData);
  console.log(emailData.toString());
}
