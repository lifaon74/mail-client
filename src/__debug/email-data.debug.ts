import { EmailBody } from '../classes/email-body/email-body.class';

import { EmailHeaderList } from '../classes/email-data/__old/email-header/email-header-list.class';
import { EmailData } from '../classes/email-data/email-data.class';
import { EmailHeader } from '../classes/email-data/__old/email-header/email-header.class';
import { EmailHeaderDate } from '../classes/email-data/__old/email-header/built-in/date/email-header-date.class';
import { EmailHeaderSpecializer } from '../classes/email-data/__old/email-header/built-in/email-header-specializer';
import { EmailHeaderContentType } from '../classes/email-data/__old/email-header/built-in/content-type/email-header-content-type.class';
import { createEmailDataFromOptions } from '../functions/send/send';
import { EmailHeaders } from '../classes/email-header/email-headers.class';
import { parseEmailHeaderList } from '../ast/email-header/email-header-list/parse-email-header-list';
import { CRLF } from '../constants/crlf';
import { parseEmailData } from '../ast/email-data/email-data/parse-email-data';
import {
  MAIL_CONTENT1,
  MAIL_CONTENT2,
  MAIL_CONTENT4,
  MAIL_CONTENT7,
  MAIL_CONTENT8,
  MAIL_CONTENT5,
  MAIL_CONTENT6,
  MAIL_CONTENT81,
} from '../__doc/samples';
import { MimeTypeClass } from '../classes/mime-type/mime-type.class';
import { serializeEmailData } from '../ast/email-data/email-data/serialize-email-data';

export async function emailDataDebug(): Promise<void> {

  // const tree = parseEmailData(MAIL_CONTENT1);
  // const tree = parseEmailData(MAIL_CONTENT4);
  // const tree = parseEmailData(MAIL_CONTENT5);
  // const tree = parseEmailData(MAIL_CONTENT6);
  // const tree = parseEmailData(MAIL_CONTENT8);
  const tree = parseEmailData(MAIL_CONTENT81);

  console.log(tree);
  // console.log(serializeEmailData(tree));

  // const fileA = new File(['abc'], 'file.txt', { type: 'text/plain' });
  // const fileB = new File([`
  // <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
  //   <circle cx="100" cy="100" r="50" stroke="black" stroke-width="5" fill="red" />
  // </svg>
  // `], 'image.svg', { type: 'image/svg+xml' });

  // const headers = new EmailHeaders([
  //   ['Content-Type', new MimeTypeClass('text/plain').toString()],
  //   // EmailHeaderDate.now(),
  //   // EMAIL_HEADER_CONTENT_TYPE_TEXT_PLAIN_UTF8_CONSTANT,
  //   // EmailHeaderContentTypeMultipartAlternative.generate(),
  // ]);
  //
  // console.log(headers);


  // const emailData = new EmailData({
  //   headers,
  //   body: new EmailBody('abc'),
  // });


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

  // const emailData = createEmailDataFromOptions({
  //   from: ['alice@example.com'],
  //   to: ['Bob <bob@example.com>'],
  //   // bcc: ['Bob <bob@example.com>', 'Alice <bob@example.com>', 'Alice <bob@example.com>'],
  //   // subject: 'Hello world !',
  //   subject: 'hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello',
  //   text: 'abc',
  //   // html: 'strnh',
  //   // attachments: await createEmailDataAttachmentsFromFiles({
  //   //   files: [
  //   //     fileA,
  //   //     fileB,
  //   //   ],
  //   // }),
  // });
  //
  // console.log(emailData);
  // console.log(emailData.toString());
  //
  // console.log(createEmailDataFromString(emailData.toString()).toString());
}
