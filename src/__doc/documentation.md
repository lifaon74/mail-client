
## SMTP

wikipedia: https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol

spec: https://datatracker.ietf.org/doc/html/rfc5321

implementations:
https://deno.land/x/smtp@v0.7.0/smtp.ts
https://mailtrap.io/blog/smtp-commands-and-responses/#:~:text=The%20HELO%20command%20initiates%20the,address%20of%20the%20SMTP%20client.&text=EHLO%20is%20an%20alternative%20to,SMTP%20service%20extensions%20(ESMTP).
https://github.com/xpepermint/smtp-client#readme
https://nodemailer.com/smtp/


headers: https://www.ietf.org/rfc/rfc2822.txt
body: https://www.ietf.org/rfc/rfc2045.txt
https://stackoverflow.com/questions/3902455/mail-multipart-alternative-vs-multipart-mixed

## IMAP


wikipedia: https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol

spec: https://www.rfc-editor.org/rfc/rfc3501

implementations:
https://github.com/mscdex/node-imap
https://www.npmjs.com/package/emailjs-imap-client

## Test server

https://ethereal.email/

const transporter = nodemailer.createTransport({
host: 'smtp.ethereal.email',
port: 587,
auth: {
user: 'rachel.thiel@ethereal.email',
pass: 'qGxg4264wueMaGfQuj'
}
});


