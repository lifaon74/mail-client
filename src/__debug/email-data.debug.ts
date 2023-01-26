import {
  createEmailDataAttachmentsFromFiles,
} from '../classes/email-data/built-in/attachment/build-in/create-email-data-attachments-from-files';
import {
  createEmailDataMultipartAlternativeFromTextAndHTML
} from '../classes/email-data/built-in/multipart/built-in/create-email-data-multipart-alternative-from-text-and-html';
import { createEmailDataFromString } from '../classes/email-data/create-email-data-from-string';
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
    // bcc: ['Bob <bob@example.com>', 'Alice <bob@example.com>', 'Alice <bob@example.com>'],
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

  console.log(emailData);
  console.log(emailData.toString());

  console.log(createEmailDataFromString(emailData.toString()).toString());
}
