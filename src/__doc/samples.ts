import { CRLF } from '../constants/crlf';

// pure text
export const MAIL_CONTENT1 = replaceNewLine(`Message-ID: <79505ff2-020b-4595-68f4-3e045ee025fe@infomaniak.com>
Date: Wed, 23 Feb 2022 16:57:15 +0100
MIME-Version: 1.0
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Thunderbird/91.6.1
Content-Language: en-US
To: valentin.richard@infomaniak.com
From: "valentin.richard" <valentin.richard@infomaniak.com>
Subject: test
Content-Type: text/plain; charset=UTF-8; format=flowed
Content-Transfer-Encoding: 7bit

abc

`);

// with cc and bcc
export const MAIL_CONTENT2 = replaceNewLine(`Message-ID: <56ba46c8-65bf-6fa3-4b5d-8e4a5ede795b@infomaniak.com>
Date: Tue, 1 Mar 2022 13:31:25 +0100
MIME-Version: 1.0
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Thunderbird/91.6.1
Content-Language: en-US
To: valentin.richard@infomaniak.com
Cc: valentin.richard+cc@infomaniak.com
Bcc: valentin.richard+bcc@infomaniak.com
Reply-To: valentin.richard+reply@infomaniak.com
From: "valentin.richard" <valentin.richard@infomaniak.com>
Subject: test
Content-Type: text/plain; charset=UTF-8; format=flowed
Content-Transfer-Encoding: 7bit

Hello content

`);

// with many cc
export const MAIL_CONTENT3 = replaceNewLine(`Message-ID: <535dd0ef-e4bd-e558-cc93-25de2bffa1f4@infomaniak.com>
Date: Tue, 1 Mar 2022 13:33:17 +0100
MIME-Version: 1.0
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Thunderbird/91.6.1
Content-Language: en-US
To: valentin.richard@infomaniak.com, valentin.richard+to2@infomaniak.com
Cc: valentin.richard+cc1@infomaniak.com, valentin.richard+cc2@infomaniak.com
From: "valentin.richard" <valentin.richard@infomaniak.com>
Subject: awwd
Content-Type: text/plain; charset=UTF-8; format=flowed
Content-Transfer-Encoding: 7bit

wadwdawd

`);

// https://docs.microsoft.com/en-us/exchange/configure-content-transfer-encoding-exchange-2013-help
// with html and text
export const MAIL_CONTENT4 = replaceNewLine(`Content-Type: multipart/alternative; boundary="------------Nq62IH79HdSbdy1U7G20IgNG"
Message-ID: <0f326a86-e523-a660-7cf4-d35ac51fa53d@infomaniak.com>
Date: Tue, 1 Mar 2022 13:38:44 +0100
MIME-Version: 1.0
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Thunderbird/91.6.1
Content-Language: en-US
To: valentin.richard@infomaniak.com
From: "valentin.richard" <valentin.richard@infomaniak.com>
Subject: html

This is a multi-part message in MIME format.
--------------Nq62IH79HdSbdy1U7G20IgNG
Content-Type: text/plain; charset=UTF-8; format=flowed
Content-Transfer-Encoding: 7bit

*some html*

--------------Nq62IH79HdSbdy1U7G20IgNG
Content-Type: text/html; charset=UTF-8
Content-Transfer-Encoding: 7bit

<html>
  <head>

    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  </head>
  <body>
    <p><b>some html</b><br>
    </p>
  </body>
</html>

--------------Nq62IH79HdSbdy1U7G20IgNG--
`);

// with attachment
export const MAIL_CONTENT5 = replaceNewLine(`Content-Type: multipart/mixed; boundary="------------20f7c0nUPvZRtniUu0yqxVCY"
Message-ID: <c90881bf-c781-7810-4c96-081390bce43f@infomaniak.com>
Date: Tue, 1 Mar 2022 13:41:36 +0100
MIME-Version: 1.0
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Thunderbird/91.6.1
Content-Language: en-US
To: valentin.richard@infomaniak.com
From: "valentin.richard" <valentin.richard@infomaniak.com>
Subject: file

This is a multi-part message in MIME format.
--------------20f7c0nUPvZRtniUu0yqxVCY
Content-Type: text/plain; charset=UTF-8; format=flowed
Content-Transfer-Encoding: 7bit

attachment

--------------20f7c0nUPvZRtniUu0yqxVCY
Content-Type: text/plain; charset=UTF-8; name="get merge cmd.txt"
Content-Disposition: attachment; filename="get merge cmd.txt"
Content-Transfer-Encoding: base64

Z2l0IGZldGNoICYmIGdpdCByZWJhc2Ugb3JpZ2luL2RldmVsb3AK

--------------20f7c0nUPvZRtniUu0yqxVCY--
`);

// with html, text and attachment
export const MAIL_CONTENT6 = replaceNewLine(`Content-Type: multipart/mixed; boundary="------------c2GRySPrU3nYEpLIC0kVMMs9"
Message-ID: <b892e292-8d73-358a-cb7e-345c05776888@infomaniak.com>
Date: Tue, 1 Mar 2022 13:45:54 +0100
MIME-Version: 1.0
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101
 Thunderbird/91.6.1
Content-Language: en-US
To: valentin.richard@infomaniak.com
From: "valentin.richard" <valentin.richard@infomaniak.com>
Subject: file + html + emoji

This is a multi-part message in MIME format.
--------------c2GRySPrU3nYEpLIC0kVMMs9
Content-Type: multipart/alternative;
 boundary="------------hU0mu5QoiIVC8ZgC4eDhF18V"

--------------hU0mu5QoiIVC8ZgC4eDhF18V
Content-Type: text/plain; charset=UTF-8; format=flowed
Content-Transfer-Encoding: 8bit

*some html *ðŸ”¥ <https://emojipedia.org/fire/>âœ¨ 
<https://blog.emojipedia.org/samsungs-shiny-new-sparkles-emoji/>

--------------hU0mu5QoiIVC8ZgC4eDhF18V
Content-Type: text/html; charset=UTF-8
Content-Transfer-Encoding: 8bit

<html>
  <head>

    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  </head>
  <body>
    <p><b>some html </b><a href="https://emojipedia.org/fire/"
        style="margin: 0px; padding: 0px; font-size: 16px;
        vertical-align: baseline; background: 0px 0px rgb(241, 241,
        241); color: rgb(36, 88, 161); text-decoration: none;
        line-height: 1.4; font-family: &quot;helvetica neue&quot;,
        Helvetica, Arial, sans-serif; font-style: normal;
        font-variant-ligatures: normal; font-variant-caps: normal;
        font-weight: 400; letter-spacing: normal; orphans: 2;
        text-align: left; text-indent: 0px; text-transform: none;
        white-space: nowrap; widows: 2; word-spacing: 0px;
        -webkit-text-stroke-width: 0px;"><span class="emoji"
          style="margin: 0px; padding: 0px; border: 0px; outline: 0px;
          font-size: 16px; vertical-align: baseline; background: 0px
          0px; font-weight: 400; font-family: &quot;apple color
          emoji&quot;, &quot;segoe ui emoji&quot;, &quot;noto color
          emoji&quot;, &quot;android emoji&quot;, emojisymbols,
          &quot;emojione mozilla&quot;, &quot;twemoji mozilla&quot;,
          &quot;segoe ui symbol&quot;;">ðŸ”¥</span></a><a
        href="https://blog.emojipedia.org/samsungs-shiny-new-sparkles-emoji/"
        style="margin: 0px; padding: 0px; font-size: 16px;
        vertical-align: baseline; background: 0px 0px rgb(241, 241,
        241); color: rgb(36, 88, 161); text-decoration: none;
        line-height: 1.4; font-family: &quot;helvetica neue&quot;,
        Helvetica, Arial, sans-serif; font-style: normal;
        font-variant-ligatures: normal; font-variant-caps: normal;
        font-weight: 400; letter-spacing: normal; orphans: 2;
        text-align: left; text-indent: 0px; text-transform: none;
        white-space: nowrap; widows: 2; word-spacing: 0px;
        -webkit-text-stroke-width: 0px;"><span class="emoji"
          style="margin: 0px; padding: 0px; border: 0px; outline: 0px;
          font-size: 16px; vertical-align: baseline; background: 0px
          0px; font-weight: 400; font-family: &quot;apple color
          emoji&quot;, &quot;segoe ui emoji&quot;, &quot;noto color
          emoji&quot;, &quot;android emoji&quot;, emojisymbols,
          &quot;emojione mozilla&quot;, &quot;twemoji mozilla&quot;,
          &quot;segoe ui symbol&quot;;">âœ¨</span></a></p>
  </body>
</html>

--------------hU0mu5QoiIVC8ZgC4eDhF18V--
--------------c2GRySPrU3nYEpLIC0kVMMs9
Content-Type: application/octet-stream; name="test.bin"
Content-Disposition: attachment; filename="test.bin"
Content-Transfer-Encoding: base64

c29tZSBjb250ZW50Cg==

--------------c2GRySPrU3nYEpLIC0kVMMs9--
`);

// answer
export const MAIL_CONTENT7 = replaceNewLine(`Message-ID: <31e04f4d-6e52-f89c-51a8-1303d54834b9@infomaniak.com>
Date: Thu, 3 Mar 2022 13:40:27 +0100
MIME-Version: 1.0
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101
 Thunderbird/91.6.1
Subject: Re: note #1
Content-Language: en-US
To: "valentin.richard" <valentin.richard@infomaniak.com>
References: <cfba50ed-c4f8-47fa-941f-580a8e04bac5@infomaniak.com>
From: "valentin.richard" <valentin.richard@infomaniak.com>
In-Reply-To: <cfba50ed-c4f8-47fa-941f-580a8e04bac5@infomaniak.com>
Content-Type: text/plain; charset=UTF-8; format=flowed
Content-Transfer-Encoding: 7bit

here's my answer

On 02/03/2022 11:00, valentin.richard wrote:
> abc
>

`);

// text only
export const MAIL_CONTENT8 = replaceNewLine(`Return-Path: <valentin.richard@infomaniak.com>
Delivered-To: valentin.richard@infomaniak.com
Received: from smtp-3-9001.mail.infomaniak.ch ([10.4.36.131])
\tby mda-3-0007.mail.infomaniak.ch with LMTP
\tid YMePOXF8AGXC1DQAGuhv0Q
\t(envelope-from <valentin.richard@infomaniak.com>)
\tfor <valentin.richard@infomaniak.com>; Tue, 12 Sep 2023 16:57:53 +0200
Authentication-Results: mx.infomaniak.com; dmarc=pass (p=reject dis=none) header.from=infomaniak.com
Received: from smtp-bc0c.mail.infomaniak.ch (smtp-bc0c.mail.infomaniak.ch [45.157.188.12])
\tby smtp-3-9001.mail.infomaniak.ch (Postfix) with ESMTPS id 4RlRXK3kFFzMpnPR
\tfor <valentin.richard@infomaniak.com>; Tue, 12 Sep 2023 16:57:53 +0200 (CEST)
Authentication-Results: mx.infomaniak.com;
\tdkim=pass (1024-bit key; secure) header.d=infomaniak.com header.i=@infomaniak.com header.a=rsa-sha256 header.s=s1024 header.b=GExuBd1I;
\tdkim-atps=neutral
Received: from smtp-2-0000.mail.infomaniak.ch (unknown [10.5.36.107])
\tby smtp-3-3000.mail.infomaniak.ch (Postfix) with ESMTPS id 4RlRXK37qxzMqk1J
\tfor <valentin.richard@infomaniak.com>; Tue, 12 Sep 2023 14:57:53 +0000 (UTC)
Received: from unknown by smtp-2-0000.mail.infomaniak.ch (Postfix) with ESMTPA id 4RlRXK0y2gzMppDk
\tfor <valentin.richard@infomaniak.com>; Tue, 12 Sep 2023 16:57:53 +0200 (CEST)
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/simple; d=infomaniak.com;
\ts=s1024; t=1694530673;
\tbh=+QjG1xYRdgnHfiKw1lpFW0Y1e39YywYyG1rvK+id2us=;
\th=Date:To:From:Subject:From;
\tb=GExuBd1IWxS3nQFudAH9nsyVrydwL2qFQR1KbYQs0xyq8aqVQsWHzpXB9YEnxCziX
\t ctXSWZUpFkTLCTB65+ZheYOO+OCY/ok/LRx7e5W0PsTtUFZdKJU3w4UCbVm/wUYPbh
\t aU2ttGGtu2Tr8lq2v+UYiOrwnl+8bcIuhypbJYTc=
Message-ID: <f5dabd6f-67b1-4c3d-87f2-3f68fd29b773@infomaniak.com>
Date: Tue, 12 Sep 2023 16:57:53 +0200
MIME-Version: 1.0
User-Agent: Mozilla Thunderbird
Content-Language: en-US
To: "valentin.richard" <valentin.richard@infomaniak.com>
From: "valentin.richard" <valentin.richard@infomaniak.com>
Subject: test
Content-Type: text/plain; charset=UTF-8; format=flowed
Content-Transfer-Encoding: 7bit
X-Infomaniak-Routing: alpha
Authentication-Results: mx.infomaniak.com; spf=pass smtp.mailfrom=infomaniak.com
X-Infomaniak-Cause: gAAAAABlAHxxLL9DwUFkphk4FqByreC3RRigwYM3_L__k7BPNnpcjxqMBCFbVRj6uGG4horLnGNS59rDUrWgaT8k4tX1fdRTuul7Y39hXg0RnbKNMPJ7oHys1o1A-Hk5SghNmNLmjpTaQEglyhY2Jzm784mKulAyMfyRlJha-jqZOnJodqTEGMZ1l0IKLM651u2habCW1l8i3FGJZ8MPzE6ZZ2RLpjnjxRxXgz2hjy7RGfWmgBKAmh5huiu_QZ5wSaI8deamTC68e0DzRl-E-2qWvMcrnzGrBQ==

abcdef

`);

export const MAIL_CONTENT81 = replaceNewLine(`Date: Thu, 31 Aug 2023 03:32:04 +0000 (UTC)
From: "contact@richard-renting.com" <contact@richard-renting.com>
Reply-To: "contact@richard-renting.com" <contact@richard-renting.com>
To: SnowandTrek Morzine <snowandtrek@gmail.com>
Message-ID: <1536226759.1558905.1693452724822@mail.yahoo.com>
Subject: Porte apt nyon
MIME-Version: 1.0
Content-Type: multipart/alternative; 
\tboundary="----=_Part_1558904_991648774.1693452724821"
References: <1536226759.1558905.1693452724822.ref@mail.yahoo.com>
X-Mailer: WebService/1.1.21763 YahooMailAndroidMobile
Content-Length: 1087

------=_Part_1558904_991648774.1693452724821
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: quoted-printable

Bonjour,=C2=A0La peinture ext=C3=A9rieure de la porte d'entr=C3=A9e de l'ap=
partement nyon =C3=A0 =C3=A9t=C3=A9 endommag=C3=A9e par le ruban adh=C3=A9s=
if qui tenait l'=C3=A9criteau.=C2=A0Merci de refaire la peinture blanche pr=
oprement.=C2=A0

Cordialement=20
Jean-Christophe RICHARD=20

Envoy=C3=A9 depuis Yahoo=C2=A0Mail pour Android
------=_Part_1558904_991648774.1693452724821
Content-Type: text/html; charset=UTF-8
Content-Transfer-Encoding: quoted-printable

Bonjour,&nbsp;<div>La peinture ext=C3=A9rieure de la porte d'entr=C3=A9e de=
 l'appartement nyon =C3=A0 =C3=A9t=C3=A9 endommag=C3=A9e par le ruban adh=
=C3=A9sif qui tenait l'=C3=A9criteau.&nbsp;</div><div>Merci de refaire la p=
einture blanche proprement.&nbsp;</div><div><br></div><div><br><div id=3D"y=
mail_android_signature">Cordialement <br>Jean-Christophe RICHARD <br><br>En=
voy=C3=A9 depuis Yahoo&nbsp;Mail pour Android</div></div>
------=_Part_1558904_991648774.1693452724821--
`);

export const MAIL_CONTENT82 = replaceNewLine(`Return-Path: <abdoulaye.diafate@morzine.fr>
Delivered-To: contact@richard-renting.com
Received: from pam.o2switch.net
\tby pam.o2switch.net with LMTP
\tid uId0BSfNfWSmfAAAsvewhQ
\t(envelope-from <abdoulaye.diafate@morzine.fr>)
\tfor <contact@richard-renting.com>; Mon, 05 Jun 2023 13:55:19 +0200
Return-path: <abdoulaye.diafate@morzine.fr>
Envelope-to: contact@richard-renting.com
Delivery-date: Mon, 05 Jun 2023 13:55:19 +0200
Received: from mail-mr2fra01on2131.outbound.protection.outlook.com ([40.107.9.131]:2566 helo=FRA01-MR2-obe.outbound.protection.outlook.com)
\tby pam.o2switch.net with esmtps  (TLS1.2) tls TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
\t(Exim 4.96)
\t(envelope-from <abdoulaye.diafate@morzine.fr>)
\tid 1q68nz-0000bI-1h
\tfor contact@richard-renting.com;
\tMon, 05 Jun 2023 13:55:19 +0200
ARC-Seal: i=1; a=rsa-sha256; s=arcselector9901; d=microsoft.com; cv=none;
 b=W1ngGek5IuvZmn6T843gM5nw4GDF+zJjA3w3N5ba8zwc4tm9OzyYhoKHo8Q5y3/9CqU6pFT4P2bIw3OGW4BJMn1SjeCFstEEEqenJXut39iixmk0QG4RjFmxk7py6s0MClIh9q28Bm1qh4gKGtT5F+onynPTCkxKKcWxbOVXyETw/HaJ7MLyXxGdXrVNmyA/XtRRR/3Y+V+g+zl6DEaicLvkBGoT12+WLk1W+9W4+p02/Nqj4nhyYWSlCPA93PutBTk7MY5ZEbQgpvoFG9n8SzEfvk29WUQGx1ovk74LRuH2pZ0zZUXXcdUUjnS3sWTSxpxJQKz5AsoFeIbdA902KQ==
ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=microsoft.com;
 s=arcselector9901;
 h=From:Date:Subject:Message-ID:Content-Type:MIME-Version:X-MS-Exchange-AntiSpam-MessageData-ChunkCount:X-MS-Exchange-AntiSpam-MessageData-0:X-MS-Exchange-AntiSpam-MessageData-1;
 bh=4qdtYJiw2De1H2J3X7nWYguHq7truNucdo7sI86665g=;
 b=WC9GzZ//eUHoBGGHyZOPKyEbUi8/7t9V4v2h5VrgvHU6YM6a2XPICPBj9V0c13HlRXn6ElQNgvNCS8sp6Ozjs8ESNclLqCHjRY/koVs0v49vmmhXL0TsM/DVYOZfEKwlc83ExIIaInA3ABGd99MCjM6NQugHG5ZGfKtxKGrOcmu8BSjzl7JJOdSnDB7o8DCx7YbJJ51lYOjMeJ3LEI+JIXnd/7+V0tWD3EBTnia3k+7W/udL9fdX1nOXg+EGvvj6pxC4UO1evOs62RYdNJxt9BYtPD4mTOcf3T8Z27nrj68s+oBhSpqu57cuhmdLcZiTOPmWv9bH4aQ7hWS7QVQBpA==
ARC-Authentication-Results: i=1; mx.microsoft.com 1; spf=pass
 smtp.mailfrom=morzine.fr; dmarc=pass action=none header.from=morzine.fr;
 dkim=pass header.d=morzine.fr; arc=none
Received: from MR1P264MB4307.FRAP264.PROD.OUTLOOK.COM (2603:10a6:501:43::7) by
 MR1P264MB1700.FRAP264.PROD.OUTLOOK.COM (2603:10a6:501:3::9) with Microsoft
 SMTP Server (version=TLS1_2, cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id
 15.20.6455.33; Mon, 5 Jun 2023 11:54:37 +0000
Received: from MR1P264MB4307.FRAP264.PROD.OUTLOOK.COM
 ([fe80::ba0d:8ecf:a17c:e8f9]) by MR1P264MB4307.FRAP264.PROD.OUTLOOK.COM
 ([fe80::ba0d:8ecf:a17c:e8f9%7]) with mapi id 15.20.6455.030; Mon, 5 Jun 2023
 11:54:36 +0000
From: Abdoulaye Diafate <abdoulaye.diafate@morzine.fr>
To: "contact@richard-renting.com" <contact@richard-renting.com>
Subject: RE: Prolongation PC 07419121B0010
Thread-Topic: Prolongation PC 07419121B0010
Thread-Index: AQHZl3dqRROxp8awFECRO5km2rEQR698GB4g
Date: Mon, 5 Jun 2023 11:54:36 +0000
Message-ID:
 <MR1P264MB4307BE462E5D4E519E2A8E62904DA@MR1P264MB4307.FRAP264.PROD.OUTLOOK.COM>
References: <151360041.4758372.1685943508665.ref@mail.yahoo.com>
 <151360041.4758372.1685943508665@mail.yahoo.com>
In-Reply-To: <151360041.4758372.1685943508665@mail.yahoo.com>
Accept-Language: fr-FR, en-US
Content-Language: fr-FR
X-MS-Has-Attach:
X-MS-TNEF-Correlator:
authentication-results: dkim=none (message not signed)
 header.d=none;dmarc=none action=none header.from=morzine.fr;
x-ms-publictraffictype: Email
x-ms-traffictypediagnostic: MR1P264MB4307:EE_|MR1P264MB1700:EE_
x-ms-office365-filtering-correlation-id: 113ec306-cb26-4c83-8dea-08db65bba2eb
x-ms-exchange-senderadcheck: 1
x-ms-exchange-antispam-relay: 0
x-microsoft-antispam: BCL:0;
x-microsoft-antispam-message-info:
 X5dJEIf7Wi8MRgZhnwv+EbQSnIdRULPGl4NbAwVBBvZkQSRMBoOs9dkbzo1x6OkZ/37FW3pUMZmLjZWDW2CHmAb3AOZhTT/1J/eutDIMPol/5a6MAycOOfvjlXmLevUqCR8OdHxmxHfUklLUTjM/G/qNZekwu65Euv46ldElsr2pCmZz65KGvRSg8xSbMcQ9sao4f09g1yrIBZVkFftBOut/8VTcFZAN5xJnJZZMkk1AKdp6aziYAzDbl1J4PnWRvItIhVVIdOzDjXGRhuRmN81A0bbij94NeTcvir3ygWCbL0IsMpT618aMl1Mtn5O6X0lRsdkCmVaa3lNagOm+zpc1CJGyAm3AlF1gs3Pod5KFNUJ5JQy9TaJUjrzbTpJFFbrr/YvYHzkYEhVjMk3T0R2Od5Lz2c/YxnsgbWuR5w5zXUc1e/rbzMthXWC5S46dmON/Trw9lcm9wpfewk3l+XxNUPIoAKKnJUmpHINPtcwMDzZHAw9jD4xJRo+X+asXFcAHTVLVSqmFcMqKd1r6dkEs92GNNpvQ0Ajm4uOCC10XlZEPdqjVG0hfSb2G7iuO3NIjftZvY8uryEomigqPqHF1znpW2TaP/MmExZTU2SU9J8OdyRUOCc+sksibqZs7
x-forefront-antispam-report:
 CIP:255.255.255.255;CTRY:;LANG:fr;SCL:1;SRV:;IPV:NLI;SFV:NSPM;H:MR1P264MB4307.FRAP264.PROD.OUTLOOK.COM;PTR:;CAT:NONE;SFS:(13230028)(346002)(376002)(39840400004)(396003)(366004)(136003)(451199021)(4744005)(2906002)(38070700005)(71200400001)(33656002)(478600001)(52536014)(86362001)(38100700002)(41300700001)(8936002)(8676002)(5660300002)(55016003)(316002)(44832011)(6916009)(66556008)(122000001)(76116006)(64756008)(66476007)(66946007)(66446008)(6506007)(9686003)(26005)(186003)(7696005);DIR:OUT;SFP:1102;
x-ms-exchange-antispam-messagedata-chunkcount: 1
x-ms-exchange-antispam-messagedata-0:
 =?utf-8?B?RVFvT3R2dHVGNzdjWGtNdkJHeWNxcFBuRmdVa1I4ZW9RMS9uR2JrWjd0U0hW?=
 =?utf-8?B?Q0xRcjVUSVNwd2h1UGpCdFB6S2ZFM2psLzdVeW53NXBiRFlCamJNTUN5UUVK?=
 =?utf-8?B?YTltU0dKcENGUmRoWHhwTm5OczRVNEt5N0pLNFZMVE56VUxMUDNadjIrUXNP?=
 =?utf-8?B?akZUNm9CaTJrdjVhUXdwbWk5eEV3ZkNNdmdaTlR0RU82U1lmenFYVlhLY0kr?=
 =?utf-8?B?ZFp2ZzJCNWdXUk1nZmdGOWFuQXhHbzlzWmNWWmdxQ29pd0R1amhreUdEUEh6?=
 =?utf-8?B?VWVaZnRPYlhuUU5oZjg1MTVKM1NaWWRsbis5cHpPVGhjK3AraVBtWmtYb0ZW?=
 =?utf-8?B?cHdMbWxqTUlZcHlMUkJQM2U4VVlIWmNnMm4xUWlVYlgxMVEwbGYyL0drVXVU?=
 =?utf-8?B?YzU2M3lkRnFBaEdUSXZMeVJQbFNsV0pYaHBDTE0rQTl1a2pEQm9TdUhlaHdY?=
 =?utf-8?B?aUMybzh2T3lzcWl4UzVPdmdGZklJZHAxd1pmZkNlRng3TWYrKzZPUXdMbG5F?=
 =?utf-8?B?ZHR2S1grT1lzZmhzV1UxMTd0dXRkOS9NRlNMMGRFV0hyT1RmV3lHT2wrKys0?=
 =?utf-8?B?V3Jna1VpbHQwdlRUWkVlbkFxVVFCRHo0U0EvMkZ4NXhyNmQvMGVXSWpMYTMv?=
 =?utf-8?B?aGpQQVIzMnFJcU5JYVlIc2d3WklQSktaRThDQlBaSXhnNHd3OUh3bkQ1eTRn?=
 =?utf-8?B?NnQzbWhNSmFpVzJhY3BYb3dLbHk0NEFHZUVURHJkaEhTbjNEL3E4U0hHYmZj?=
 =?utf-8?B?Ky9Bc0FOdnNYRkV2UlVJL283M04rbXBZN25OVzc2dUE4TE9XcDlpZlhXNUR1?=
 =?utf-8?B?WEVGbm9kcmE3NGR5c2VQVHc5RURuZ1hPdkpFeDBmV3A0YmFSMnI2QlA4NlJn?=
 =?utf-8?B?b0JaeXdvTmtlVVZnYmRPQ2wvNVNOVU1ubmxSWmxST0ZGMTZzcmxzSFZULzh5?=
 =?utf-8?B?U3dwSGRLR2xYM2FBT3kvb2FHam5YcG5HVFI5ZlRSdmxIY3Yyak0xYUs3d2pr?=
 =?utf-8?B?L000b2RTS3loc1I5NkVrVlVNQnVuUG5PM1AxeHExWVF5dTZ0VDMvWGlIdUFz?=
 =?utf-8?B?WEkvRDY1dlkvOXZuaVBEckJBYTBTdUdtUGxWclJSMTUwVXROcUFhY2xZczZV?=
 =?utf-8?B?Y1ZvUSt1dld1MUErYmt0Uk45anZSMW1Sc3Rob0VzK1E1U1VxWjU5WjE5L05o?=
 =?utf-8?B?VTNRamFxdElhTmtQeVdMaHBaNWZITnNTWFR4ZkRHdllINEN1NWgycVgxSnNV?=
 =?utf-8?B?NlJzOXRoeXh6SXd6K2IvYllUVVBteFp0aERtSWsxeXlXUTdyODhIVzJ4eWdx?=
 =?utf-8?B?dE56RytMUFozbDltdmtDaHBoMWJXeXBpd1pzREFzb09xeHFWNW9iS3EwY0F2?=
 =?utf-8?B?ZEJlVUp2bEhta2RQbGJTTWNOV25FMkZ1M1ltNGYrMkppNlVMN1BrUXFDS2V5?=
 =?utf-8?B?VUtSZGdiMExoeEEyZzN5Y0FKTWVQL3c4eVg2cHdqSlViTWx3YmoybEM4eUhL?=
 =?utf-8?B?bjh2VnI1Y01abUdLbk1ibExRSWFJMTFpOC9Xa2RvK0xOcHRuUEVxMjFqb3hV?=
 =?utf-8?B?cWlZc0w2Qk10OHVhRysrdjdWN1haR3VQUlJKdmhJOGp1U3J2WXFaY29UcnlT?=
 =?utf-8?B?Njcwd2x3NkRldkhPZGc3RzRZbDhWVHF1cUpxdks3UmJaNGlKcDU4YURKNU9H?=
 =?utf-8?B?UE5LQmU4SmZBT3lCcHpFLzdDTW9yRHMyQ3JQTDNWZU5YVUVYNzg0WlV1b3Ex?=
 =?utf-8?B?RE42N1NmMll0dTN6Y1huTEIzU3F1Rmlkd0N4SFJPbHNxZ3JaMVpjY05kZ0RK?=
 =?utf-8?B?cWhYSG5TdVh4NjZqSU1YNkFyWUwyM2paVGtTd1R2bHFSRitSdnB5S0lITFJn?=
 =?utf-8?B?YTEzekM0a2hIVU9qU2JheFFab2tFSHQxSDN1ejdhMzVMckxHRU9WVitLL2VU?=
 =?utf-8?B?cHJyekxRY1VlSFVad0NKODFoTjZ3QUJFbGtHZ1JSZHc1S2oxL3g5MXlaMjlP?=
 =?utf-8?B?aUh2ZEtsN01ZTDUxa1EvaU9mbC9SVjIzK3dhS0RybjVxSWRaUHM3cmovc1pt?=
 =?utf-8?B?bGlYK3hQMkdIeUljc3hHZWtPNVMvSGlFeWR5TC95anZidUlOZkZYM1NGWjh5?=
 =?utf-8?B?UVJVdVh6bXBGUEsvUHpNYkNFZHJXWEdLa29EaDVlM0JzSzQxUkpHc01ZcWZw?=
 =?utf-8?B?YUE9PQ==?=
Content-Type: multipart/alternative;
\tboundary="_000_MR1P264MB4307BE462E5D4E519E2A8E62904DAMR1P264MB4307FRAP_"
MIME-Version: 1.0
X-OriginatorOrg: morzine.fr
X-MS-Exchange-CrossTenant-AuthAs: Internal
X-MS-Exchange-CrossTenant-AuthSource: MR1P264MB4307.FRAP264.PROD.OUTLOOK.COM
X-MS-Exchange-CrossTenant-Network-Message-Id: 113ec306-cb26-4c83-8dea-08db65bba2eb
X-MS-Exchange-CrossTenant-originalarrivaltime: 05 Jun 2023 11:54:36.9573
 (UTC)
X-MS-Exchange-CrossTenant-fromentityheader: Hosted
X-MS-Exchange-CrossTenant-id: 882f2c83-ef38-4f32-9de6-e66f3975fb3d
X-MS-Exchange-CrossTenant-mailboxtype: HOSTED
X-MS-Exchange-CrossTenant-userprincipalname: Qwu1vl6078QepJsv6TtH1yHt78xwulpfYR+wu3bIR+Oui11c11qCIeJQqkYuORmuJUzrU5T2WMhHRwt/OCNZj3CQnjt8kSCgSfbrqz/l3fc=
X-MS-Exchange-Transport-CrossTenantHeadersStamped: MR1P264MB1700
X-Spam-Status: No, score=-22.8
X-Spam-Score: -227
X-Spam-Bar: ----------------------
X-Ham-Report: ------------------ Début de Rapport SpamAssassin ---------------------
 Ce message est probablement du SPAM (message non sollicité envoyé en
 masse, publicité, escroquerie...).
 Cette notice a été ajoutée par le système d'analyse "SpamAssassin" sur
 votre serveur de courrier "scan.jabatus.fr", pour vous
 aider à identifier ce type de messages.
 Le système SpamAssassin ajoute un en-tête "X-Spam-Flag: YES" aux
 messages qu'il considère comme étant probablement du Spam.
 Vous pouvez si vous le souhaitez utiliser cette caractéristique
 pour régler un filtre dans votre logiciel de lecture de courrier,
 afin de détruire ou de classer à part ce type de message.
 Si ce robot a classifié incorrectement un message qui vous était
 destiné, ou pour toute question, veuillez contacter l'administrateur
 du système par e-mail à the administrator of that system .
 Voir https://spamassassin.apache.org/tag/ pour plus de détails (en anglais).
 Détails de l'analyse du message:   (-22.8 points, 5.0 requis)
  0.1 RCVD_IN_DNSWL_NONE     RBL: Sender listed at https://www.dnswl.org/, no
                             trust
                             [40.107.9.131 listed in list.dnswl.org]
  -25 ABUSIX_WHITE           RBL: Listed for spam.
                             [40.107.9.131 listed in white.abusix.jabatus]
  0.2 BAD_SUKA_DSTM          BAD_SUKA_DSTM
  0.2 BAD_SUKA994            BAD_SUKA994
 -0.0 SPF_HELO_PASS          SPF: HELO matches SPF record
  0.1 SUKA_10                BODY: SUKA_10
  0.1 HTML_MESSAGE           BODY: HTML inclus dans le message
  1.0 FORGED_SPF_HELO        FORGED_SPF_HELO
  0.5 KAM_NUMSUBJECT         Subject ends in numbers excluding current years
 -------------------- Fin de Rapport SpamAssassin ---------------------
X-Spam-Flag: NO

--_000_MR1P264MB4307BE462E5D4E519E2A8E62904DAMR1P264MB4307FRAP_
Content-Type: text/plain; charset="utf-8"
Content-Transfer-Encoding: base64

Qm9uam91ciwNCg0KTm91cyB2b3VzIGluZm9ybW9ucyBxdWUgbGVzIGRlbWFuZGVzIGRlIHByb2xv
bmdhdGlvbiBkb2l2ZW50IMOqdHJlIGVudm95ZXIgZW4gY291cnJpZXIgcmVjb21tYW5kw6kgb3Ug
ZMOpcG9zw6kgZW4gbWFpcmllIGVuIGpvaWduYW50IGzigJlhcnLDqnTDqSBkZSBQZXJtaXMgZGUg
Y29uc3RydWlyZSBzdXN2aXPDqS4NCg0KSmUgcmVzdGUgw6Agdm90cmUgZGlzcG9zaXRpb24gcG91
ciB0b3V0ZSBpbmZvcm1hdGlvbiBjb21wbMOpbWVudGFpcmUuDQoNCkNvcmRpYWxlbWVudA0KRElB
RkFURQ0KDQpEZSA6IGNvbnRhY3RAcmljaGFyZC1yZW50aW5nLmNvbSA8Y29udGFjdEByaWNoYXJk
LXJlbnRpbmcuY29tPg0KRW52b3nDqSA6IGx1bmRpIDUganVpbiAyMDIzIDA3OjM4DQrDgCA6IEFi
ZG91bGF5ZSBEaWFmYXRlIDxhYmRvdWxheWUuZGlhZmF0ZUBtb3J6aW5lLmZyPg0KT2JqZXQgOiBQ
cm9sb25nYXRpb24gUEMgMDc0MTkxMjFCMDAxMA0KDQpNb25zaWV1ciwNCg0KQsOpbsOpZmljaWFp
cmUgZHUgUEMgMDc0MTkxMjFCMDAxMCBkw6lsaXZyw6kgbGUgMjYganVpbiAyMDIxLCBqZSBuJ2Fp
IHBhcyBhY2hldsOpIGxhIHRvdGFsaXTDqSBkZXMgdHJhdmF1eCBwb3VyIGRlcyByYWlzb25zIGNv
bmpvbmN0dXJlbGxlcy4NCg0KUGFyIGxhIHByw6lzZW50ZSwgamUgdm91cyBkZW1hbmRlIGRlIHBy
b2xvbmdlciBsYSB2YWxpZGl0w6kgZGUgY2UgcGVybWlzIGFmaW4gZGUgcG91dm9pciBjb250aW51
ZXIgbGVzIHRyYXZhdXggdWx0w6lyaWV1cmVtZW50Lg0KDQpKZSB2b3VzIHJlbWVyY2llIGQnYXZh
bmNlLg0KDQpKZWFuLUNocmlzdG9waGUgUklDSEFSRA0K

--_000_MR1P264MB4307BE462E5D4E519E2A8E62904DAMR1P264MB4307FRAP_
Content-Type: text/html; charset="utf-8"
Content-Transfer-Encoding: base64

PGh0bWwgeG1sbnM6dj0idXJuOnNjaGVtYXMtbWljcm9zb2Z0LWNvbTp2bWwiIHhtbG5zOm89InVy
bjpzY2hlbWFzLW1pY3Jvc29mdC1jb206b2ZmaWNlOm9mZmljZSIgeG1sbnM6dz0idXJuOnNjaGVt
YXMtbWljcm9zb2Z0LWNvbTpvZmZpY2U6d29yZCIgeG1sbnM6bT0iaHR0cDovL3NjaGVtYXMubWlj
cm9zb2Z0LmNvbS9vZmZpY2UvMjAwNC8xMi9vbW1sIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcv
VFIvUkVDLWh0bWw0MCI+DQo8aGVhZD4NCjxtZXRhIGh0dHAtZXF1aXY9IkNvbnRlbnQtVHlwZSIg
Y29udGVudD0idGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04Ij4NCjxtZXRhIG5hbWU9IkdlbmVyYXRv
ciIgY29udGVudD0iTWljcm9zb2Z0IFdvcmQgMTUgKGZpbHRlcmVkIG1lZGl1bSkiPg0KPHN0eWxl
PjwhLS0NCi8qIEZvbnQgRGVmaW5pdGlvbnMgKi8NCkBmb250LWZhY2UNCgl7Zm9udC1mYW1pbHk6
SGVsdmV0aWNhOw0KCXBhbm9zZS0xOjIgMTEgNiA0IDIgMiAyIDIgMiA0O30NCkBmb250LWZhY2UN
Cgl7Zm9udC1mYW1pbHk6IkNhbWJyaWEgTWF0aCI7DQoJcGFub3NlLTE6MiA0IDUgMyA1IDQgNiAz
IDIgNDt9DQpAZm9udC1mYWNlDQoJe2ZvbnQtZmFtaWx5OkNhbGlicmk7DQoJcGFub3NlLTE6MiAx
NSA1IDIgMiAyIDQgMyAyIDQ7fQ0KLyogU3R5bGUgRGVmaW5pdGlvbnMgKi8NCnAuTXNvTm9ybWFs
LCBsaS5Nc29Ob3JtYWwsIGRpdi5Nc29Ob3JtYWwNCgl7bWFyZ2luOjBjbTsNCglmb250LXNpemU6
MTEuMHB0Ow0KCWZvbnQtZmFtaWx5OiJDYWxpYnJpIixzYW5zLXNlcmlmO30NCnNwYW4uRW1haWxT
dHlsZTE4DQoJe21zby1zdHlsZS10eXBlOnBlcnNvbmFsLXJlcGx5Ow0KCWZvbnQtZmFtaWx5OiJD
YWxpYnJpIixzYW5zLXNlcmlmOw0KCWNvbG9yOndpbmRvd3RleHQ7fQ0KLk1zb0NocERlZmF1bHQN
Cgl7bXNvLXN0eWxlLXR5cGU6ZXhwb3J0LW9ubHk7DQoJZm9udC1zaXplOjEwLjBwdDsNCgltc28t
bGlnYXR1cmVzOm5vbmU7fQ0KQHBhZ2UgV29yZFNlY3Rpb24xDQoJe3NpemU6NjEyLjBwdCA3OTIu
MHB0Ow0KCW1hcmdpbjo3MC44NXB0IDcwLjg1cHQgNzAuODVwdCA3MC44NXB0O30NCmRpdi5Xb3Jk
U2VjdGlvbjENCgl7cGFnZTpXb3JkU2VjdGlvbjE7fQ0KLS0+PC9zdHlsZT48IS0tW2lmIGd0ZSBt
c28gOV0+PHhtbD4NCjxvOnNoYXBlZGVmYXVsdHMgdjpleHQ9ImVkaXQiIHNwaWRtYXg9IjEwMjYi
IC8+DQo8L3htbD48IVtlbmRpZl0tLT48IS0tW2lmIGd0ZSBtc28gOV0+PHhtbD4NCjxvOnNoYXBl
bGF5b3V0IHY6ZXh0PSJlZGl0Ij4NCjxvOmlkbWFwIHY6ZXh0PSJlZGl0IiBkYXRhPSIxIiAvPg0K
PC9vOnNoYXBlbGF5b3V0PjwveG1sPjwhW2VuZGlmXS0tPg0KPC9oZWFkPg0KPGJvZHkgbGFuZz0i
RlIiIGxpbms9IiMwNTYzQzEiIHZsaW5rPSIjOTU0RjcyIiBzdHlsZT0id29yZC13cmFwOmJyZWFr
LXdvcmQiPg0KPGRpdiBjbGFzcz0iV29yZFNlY3Rpb24xIj4NCjxwIGNsYXNzPSJNc29Ob3JtYWwi
PjxzcGFuIHN0eWxlPSJtc28tZmFyZWFzdC1sYW5ndWFnZTpFTi1VUyI+Qm9uam91ciw8bzpwPjwv
bzpwPjwvc3Bhbj48L3A+DQo8cCBjbGFzcz0iTXNvTm9ybWFsIj48c3BhbiBzdHlsZT0ibXNvLWZh
cmVhc3QtbGFuZ3VhZ2U6RU4tVVMiPjxvOnA+Jm5ic3A7PC9vOnA+PC9zcGFuPjwvcD4NCjxwIGNs
YXNzPSJNc29Ob3JtYWwiPjxzcGFuIHN0eWxlPSJtc28tZmFyZWFzdC1sYW5ndWFnZTpFTi1VUyI+
Tm91cyB2b3VzIGluZm9ybW9ucyBxdWUgbGVzIGRlbWFuZGVzIGRlIHByb2xvbmdhdGlvbiBkb2l2
ZW50IMOqdHJlIGVudm95ZXIgZW4gY291cnJpZXIgcmVjb21tYW5kw6kgb3UgZMOpcG9zw6kgZW4g
bWFpcmllIGVuIGpvaWduYW50IGzigJlhcnLDqnTDqSBkZSBQZXJtaXMgZGUgY29uc3RydWlyZSBz
dXN2aXPDqS48bzpwPjwvbzpwPjwvc3Bhbj48L3A+DQo8cCBjbGFzcz0iTXNvTm9ybWFsIj48c3Bh
biBzdHlsZT0ibXNvLWZhcmVhc3QtbGFuZ3VhZ2U6RU4tVVMiPjxvOnA+Jm5ic3A7PC9vOnA+PC9z
cGFuPjwvcD4NCjxwIGNsYXNzPSJNc29Ob3JtYWwiPjxzcGFuIHN0eWxlPSJtc28tZmFyZWFzdC1s
YW5ndWFnZTpFTi1VUyI+SmUgcmVzdGUgw6Agdm90cmUgZGlzcG9zaXRpb24gcG91ciB0b3V0ZSBp
bmZvcm1hdGlvbiBjb21wbMOpbWVudGFpcmUuPG86cD48L286cD48L3NwYW4+PC9wPg0KPHAgY2xh
c3M9Ik1zb05vcm1hbCI+PHNwYW4gc3R5bGU9Im1zby1mYXJlYXN0LWxhbmd1YWdlOkVOLVVTIj48
bzpwPiZuYnNwOzwvbzpwPjwvc3Bhbj48L3A+DQo8cCBjbGFzcz0iTXNvTm9ybWFsIj48c3BhbiBz
dHlsZT0ibXNvLWZhcmVhc3QtbGFuZ3VhZ2U6RU4tVVMiPkNvcmRpYWxlbWVudDxvOnA+PC9vOnA+
PC9zcGFuPjwvcD4NCjxwIGNsYXNzPSJNc29Ob3JtYWwiPjxzcGFuIHN0eWxlPSJtc28tZmFyZWFz
dC1sYW5ndWFnZTpFTi1VUyI+RElBRkFURTxvOnA+PC9vOnA+PC9zcGFuPjwvcD4NCjxwIGNsYXNz
PSJNc29Ob3JtYWwiPjxzcGFuIHN0eWxlPSJtc28tZmFyZWFzdC1sYW5ndWFnZTpFTi1VUyI+PG86
cD4mbmJzcDs8L286cD48L3NwYW4+PC9wPg0KPGRpdj4NCjxkaXYgc3R5bGU9ImJvcmRlcjpub25l
O2JvcmRlci10b3A6c29saWQgI0UxRTFFMSAxLjBwdDtwYWRkaW5nOjMuMHB0IDBjbSAwY20gMGNt
Ij4NCjxwIGNsYXNzPSJNc29Ob3JtYWwiPjxiPkRlJm5ic3A7OjwvYj4gY29udGFjdEByaWNoYXJk
LXJlbnRpbmcuY29tICZsdDtjb250YWN0QHJpY2hhcmQtcmVudGluZy5jb20mZ3Q7DQo8YnI+DQo8
Yj5FbnZvecOpJm5ic3A7OjwvYj4gbHVuZGkgNSBqdWluIDIwMjMgMDc6Mzg8YnI+DQo8Yj7DgCZu
YnNwOzo8L2I+IEFiZG91bGF5ZSBEaWFmYXRlICZsdDthYmRvdWxheWUuZGlhZmF0ZUBtb3J6aW5l
LmZyJmd0Ozxicj4NCjxiPk9iamV0Jm5ic3A7OjwvYj4gUHJvbG9uZ2F0aW9uIFBDIDA3NDE5MTIx
QjAwMTA8bzpwPjwvbzpwPjwvcD4NCjwvZGl2Pg0KPC9kaXY+DQo8cCBjbGFzcz0iTXNvTm9ybWFs
Ij48bzpwPiZuYnNwOzwvbzpwPjwvcD4NCjxkaXY+DQo8ZGl2Pg0KPHAgY2xhc3M9Ik1zb05vcm1h
bCI+PHNwYW4gc3R5bGU9ImZvbnQtc2l6ZToxMi4wcHQ7Zm9udC1mYW1pbHk6JnF1b3Q7SGVsdmV0
aWNhJnF1b3Q7LHNhbnMtc2VyaWYiPk1vbnNpZXVyLDxvOnA+PC9vOnA+PC9zcGFuPjwvcD4NCjwv
ZGl2Pg0KPGRpdj4NCjxwIGNsYXNzPSJNc29Ob3JtYWwiPjxzcGFuIHN0eWxlPSJmb250LXNpemU6
MTIuMHB0O2ZvbnQtZmFtaWx5OiZxdW90O0hlbHZldGljYSZxdW90OyxzYW5zLXNlcmlmIj48bzpw
PiZuYnNwOzwvbzpwPjwvc3Bhbj48L3A+DQo8L2Rpdj4NCjxkaXY+DQo8cCBjbGFzcz0iTXNvTm9y
bWFsIj48c3BhbiBzdHlsZT0iZm9udC1zaXplOjEyLjBwdDtmb250LWZhbWlseTomcXVvdDtIZWx2
ZXRpY2EmcXVvdDssc2Fucy1zZXJpZiI+QsOpbsOpZmljaWFpcmUgZHUgUEMmbmJzcDswNzQxOTEy
MUIwMDEwIGTDqWxpdnLDqSBsZSAyNiBqdWluIDIwMjEsIGplIG4nYWkgcGFzIGFjaGV2w6kgbGEg
dG90YWxpdMOpIGRlcyB0cmF2YXV4IHBvdXIgZGVzIHJhaXNvbnMgY29uam9uY3R1cmVsbGVzLjxv
OnA+PC9vOnA+PC9zcGFuPjwvcD4NCjwvZGl2Pg0KPGRpdj4NCjxwIGNsYXNzPSJNc29Ob3JtYWwi
PjxzcGFuIHN0eWxlPSJmb250LXNpemU6MTIuMHB0O2ZvbnQtZmFtaWx5OiZxdW90O0hlbHZldGlj
YSZxdW90OyxzYW5zLXNlcmlmIj48bzpwPiZuYnNwOzwvbzpwPjwvc3Bhbj48L3A+DQo8L2Rpdj4N
CjxkaXY+DQo8cCBjbGFzcz0iTXNvTm9ybWFsIj48c3BhbiBzdHlsZT0iZm9udC1zaXplOjEyLjBw
dDtmb250LWZhbWlseTomcXVvdDtIZWx2ZXRpY2EmcXVvdDssc2Fucy1zZXJpZiI+UGFyIGxhIHBy
w6lzZW50ZSwgamUgdm91cyBkZW1hbmRlIGRlIHByb2xvbmdlciBsYSB2YWxpZGl0w6kgZGUgY2Ug
cGVybWlzIGFmaW4gZGUgcG91dm9pciBjb250aW51ZXIgbGVzIHRyYXZhdXggdWx0w6lyaWV1cmVt
ZW50LjxvOnA+PC9vOnA+PC9zcGFuPjwvcD4NCjwvZGl2Pg0KPGRpdj4NCjxwIGNsYXNzPSJNc29O
b3JtYWwiPjxzcGFuIHN0eWxlPSJmb250LXNpemU6MTIuMHB0O2ZvbnQtZmFtaWx5OiZxdW90O0hl
bHZldGljYSZxdW90OyxzYW5zLXNlcmlmIj48bzpwPiZuYnNwOzwvbzpwPjwvc3Bhbj48L3A+DQo8
L2Rpdj4NCjxkaXY+DQo8cCBjbGFzcz0iTXNvTm9ybWFsIj48c3BhbiBzdHlsZT0iZm9udC1zaXpl
OjEyLjBwdDtmb250LWZhbWlseTomcXVvdDtIZWx2ZXRpY2EmcXVvdDssc2Fucy1zZXJpZiI+SmUg
dm91cyByZW1lcmNpZSBkJ2F2YW5jZS48bzpwPjwvbzpwPjwvc3Bhbj48L3A+DQo8L2Rpdj4NCjxk
aXY+DQo8cCBjbGFzcz0iTXNvTm9ybWFsIj48c3BhbiBzdHlsZT0iZm9udC1zaXplOjEyLjBwdDtm
b250LWZhbWlseTomcXVvdDtIZWx2ZXRpY2EmcXVvdDssc2Fucy1zZXJpZiI+PG86cD4mbmJzcDs8
L286cD48L3NwYW4+PC9wPg0KPC9kaXY+DQo8ZGl2Pg0KPHAgY2xhc3M9Ik1zb05vcm1hbCI+PHNw
YW4gc3R5bGU9ImZvbnQtc2l6ZToxMi4wcHQ7Zm9udC1mYW1pbHk6JnF1b3Q7SGVsdmV0aWNhJnF1
b3Q7LHNhbnMtc2VyaWYiPkplYW4tQ2hyaXN0b3BoZSBSSUNIQVJEPG86cD48L286cD48L3NwYW4+
PC9wPg0KPC9kaXY+DQo8L2Rpdj4NCjwvZGl2Pg0KPC9ib2R5Pg0KPC9odG1sPg0K

--_000_MR1P264MB4307BE462E5D4E519E2A8E62904DAMR1P264MB4307FRAP_--
`);

export const MAIL_CONTENT9 = replaceNewLine(`Return-Path: <jira@mail-us.atlassian.net>
Delivered-To: valentin.richard@infomaniak.com
Received: from smtp-2-9000.mail.infomaniak.ch ([10.5.36.130])
\tby mda-3-0007.mail.infomaniak.ch with LMTP
\tid KDr5A/54AGW+uzQAGuhv0Q
\t(envelope-from <jira@mail-us.atlassian.net>)
\tfor <valentin.richard@infomaniak.com>; Tue, 12 Sep 2023 16:43:10 +0200
Authentication-Results: mx.infomaniak.com; dmarc=none (p=none dis=none) header.from=infomaniak.atlassian.net
Received: from mta-174-81-113.atlassian.net.sparkpostmail.com (mta-174-81-113.atlassian.net.sparkpostmail.com [192.174.81.113])
\tby smtp-2-9000.mail.infomaniak.ch (Postfix) with ESMTPS id 4RlRCK1bq3zlhBkZ
\tfor <valentin.richard@infomaniak.com>; Tue, 12 Sep 2023 16:43:08 +0200 (CEST)
Authentication-Results: mx.infomaniak.com;
\tdkim=pass (2048-bit key; unprotected) header.d=mail-us.atlassian.net header.i=@mail-us.atlassian.net header.a=rsa-sha256 header.s=sparkpost0223 header.b=HpsYfgvk;
\tdkim-atps=neutral
X-MSFBL: bcGxUKqtPYQHPtuFqdt1E+82mf3xjOJrDi44aYUh6Po=|eyJyIjoidmFsZW50aW4
\tucmljaGFyZEBpbmZvbWFuaWFrLmNvbSIsImN1c3RvbWVyX2lkIjoiMSIsInN1YmF
\tjY291bnRfaWQiOiIwIiwibWVzc2FnZV9pZCI6IjY0ZmFmYjc4MDA2NTA2Yzc1NzB
\tmIiwidGVuYW50X2lkIjoiYXRsYXNzaWFudXMifQ==
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
\td=mail-us.atlassian.net; s=sparkpost0223; t=1694529787;
\ti=@mail-us.atlassian.net;
\tbh=W2sFeqqHkliMBj7bRgF9WwoUXZrB8KiAlYJP1pLVMC0=;
\th=To:Date:Content-Type:Message-ID:From:Subject:From:To:Cc:Subject;
\tb=HpsYfgvku2yBJn280HyL6FddkZZYbMfDhlWI/0GlNMqC0r4K3RyJRCZHgmFO1cfuF
\t 8FZ4IPw6JrwdfHsvWEC+Yrj4n67tvTbc3yqh7AETC241G+MeeeEMVVTGMy2UwAcibc
\t d/MogR+YjYjdHT8E68uYbIC0z1LUqortsWgYtKoHE4bxLpcS8zs/V6QNTgR+rAIPlw
\t nMhBrcSwPC3X+fNu878WnP5KmfjM4TleL980lS51vtZ/2bt/6Hzv+HEUWdHSiM9M9D
\t gkmnetscTXnXEABUj9bZCMgRa46xFs7+qmGvoZqN4wFT6Neq8CVoK6PawpBG6uGzIx
\t BhDZ/cG3LgIYQ==
To: valentin.richard@infomaniak.com
Date: Tue, 12 Sep 2023 14:43:07 +0000
Content-Type: multipart/related; boundary="_----Fe0lUf462s6JwrpHE0+WxA===_05/F0-16671-BF870056"
MIME-Version: 1.0
X-Atlassian-Mail-Message-Id: <54e47ead-ef11-4cc8-b660-a6ed47c7ffd7@infomaniak.atlassian.net>
X-Atlassian-Mail-Transaction-Id: 54e47ead-ef11-4cc8-b660-a6ed47c7ffd7
References: <I458n9IlKhmr3x0iskhj8XT2O-gb3EtYqt0BNUjaQFQ=@infomaniak.atlassian.net>
Atl-Sent-Via: jira-np-distributor
Precedence: bulk
Reply-To: "Florian GRENIER (Jira)" <jira@infomaniak.atlassian.net>
X-JIRA-FingerPrint: 1c27f2e699e2bc30f99fde18256fa9c8
Message-ID: <54e47ead-ef11-4cc8-b660-a6ed47c7ffd7@infomaniak.atlassian.net>
From: "Florian GRENIER (Jira)" <jira@infomaniak.atlassian.net>
In-Reply-To: <I458n9IlKhmr3x0iskhj8XT2O-gb3EtYqt0BNUjaQFQ=@infomaniak.atlassian.net>
Subject: =?utf-8?b?W0pJUkFdIChGUUEtMTIzKSBbQnJlYWRjcnVtYl0gZWZmZXQgaG92ZXIgdW5p?= =?utf-8?b?dmVycyBXZWIgJiBEb21haW5lcyBwYXMgcHLDqXNlbnQ=?=
Authentication-Results: mx.infomaniak.com; spf=pass smtp.mailfrom=mail-us.atlassian.net
X-Infomaniak-Cause: gAAAAABlAHj-U1eMjkZ9ovxmnrN1PZSje5NaanKcabfOPHVrzAmhXv2MCu463I-X6b9ysB9xRAoe7FAeMGBm-_juPcpbMGASTEnnLOivlkEIAsBUK2d9rLOgVevdPPN4G7oLRELykf77aRmNg83xCkdiPG3lI6FZgEt1G4XlE9twd8OfSuZ2a-yETLcUPN16UlsTs6imEyoGlvj1Chxh5DvconCihUFSBqGVxpnh7dgS_wiBTPJj7o1MDLjgpiYlw_stFYMd3AaBX6kBER1dqO8DQUCGXSoYPplY4qX39dKQ3DKhPZEhBUs=

--_----Fe0lUf462s6JwrpHE0+WxA===_05/F0-16671-BF870056
Content-Type: multipart/alternative; boundary="_----sSjMBp470x1jj5NfrJklrQ===_05/F0-16671-BF870056"

--_----sSjMBp470x1jj5NfrJklrQ===_05/F0-16671-BF870056
Content-Transfer-Encoding: quoted-printable
Content-Type: text/plain; charset="UTF-8"

Florian GRENIER *made 1 update*. Tests QA/FQA-123 [Breadcrumb] effet hover =
univers Web & Domaines pas pr=C3=A9sent =E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=C2=A0=E2=
=80=8C=C2=A0=E2=80=8C=C2=A0=E2=80=8C=0A=0AFlorian GRENIER *made 1 update*.=
=0A=0ATests QA ( https://infomaniak.atlassian.net/browse/FQA=3FatlOrigin=3D=
eyJpIjoiNWI1NTk5Nzk3YTVkNGZjMmI2YjliMGI0MDYzMjhiMDUiLCJwIjoiaiJ9 )=0A=0A/=
=0A=0AFQA-123 ( https://infomaniak.atlassian.net/browse/FQA-123=3FatlOrigin=
=3DeyJpIjoiNWI1NTk5Nzk3YTVkNGZjMmI2YjliMGI0MDYzMjhiMDUiLCJwIjoiaiJ9 )=0A=0A=
[Breadcrumb] effet hover univers Web & Domaines pas pr=C3=A9sent ( https://=
infomaniak.atlassian.net/browse/FQA-123=3FatlOrigin=3DeyJpIjoiNWI1NTk5Nzk3Y=
TVkNGZjMmI2YjliMGI0MDYzMjhiMDUiLCJwIjoiaiJ9 )=0AFlorian GRENIER 4:40=C2=A0P=
M=C2=A0CEST Status: A faire - Feedbacks A tester - Feedbacks=0A=0AView issu=
e ( https://infomaniak.atlassian.net/browse/FQA-123=3FatlOrigin=3DeyJpIjoiN=
WI1NTk5Nzk3YTVkNGZjMmI2YjliMGI0MDYzMjhiMDUiLCJwIjoiaiJ9 )=0A=0AGet Jira not=
ifications on your phone! Download the Jira Cloud app for Android ( https:/=
/play.google.com/store/apps/details=3Fid=3Dcom.atlassian.android.jira.core&=
referrer=3Dutm_source%3DNotificationLink%26utm_medium%3DEmail ) or iOS ( ht=
tps://itunes.apple.com/app/apple-store/id1006972087=3Fpt=3D696495&ct=3DEmai=
lNotificationLink&mt=3D8 ).=0A=0AManage notifications ( https://infomaniak.=
atlassian.net/jira/settings/personal/notifications=3FemailPreferences=3Dtru=
e&atlOrigin=3DeyJpIjoiNWI1NTk5Nzk3YTVkNGZjMmI2YjliMGI0MDYzMjhiMDUiLCJwIjoia=
iJ9#emailpreferences ) =E2=80=A2 Give feedback ( https://surveys.atlassian.=
com/jfe/form/SV_9X3zi1X4q1gKsqF ) =E2=80=A2 Privacy policy ( https://www.at=
lassian.com/legal/privacy-policy )
--_----sSjMBp470x1jj5NfrJklrQ===_05/F0-16671-BF870056
Content-Transfer-Encoding: quoted-printable
Content-Type: text/html; charset="UTF-8"

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.=
w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">=0A<html lang=3D"en" xml:lang=
=3D"en" style=3D"font-family: Arial, sans-serif">=0A <head>=0A  <title></ti=
tle>=0A  <meta http-equiv=3D"Content-Type" content=3D"text/html; charset=3D=
utf-8"><!--[if !mso]><!-->=0A  <meta http-equiv=3D"X-UA-Compatible" content=
=3D"IE=3Dedge"><!--<![endif]-->=0A  <meta name=3D"viewport" content=3D"widt=
h=3Ddevice-width, initial-scale=3D1.0"><!--[if (gte mso 9)|(IE)]>=0A       =
 <style type=3D"text/css">=0A            table {border-collapse: collapse;}=
=0A        </style>=0A        <![endif]--> <!--[if mso]>=0A        <style t=
ype=3D"text/css">=0A            body, table, td {=0A                font-fa=
mily: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'U=
buntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;=
=0A                color: #172b4d !important;=0A            }=0A        </s=
tyle>=0A        <![endif]-->=0A  <style type=3D"text/css">=0A            @m=
edia only screen and (max-width: 700px) {=0A                span.summary-te=
xt-part {=0A                    display: block !important;=0A              =
  }=0A=0A                .message-part-verb {=0A                    display=
: none !important;=0A                }=0A=0A                .desktop-only {=
=0A                    display: none !important;=0A                }=0A    =
            .mobile-only {=0A                    display: block !important;=
=0A                }=0A            }=0A=0A            @media only screen an=
d (min-width: 700px) {=0A                span.ak-lozenge {=0A              =
      margin-left: 5px;=0A                }=0A=0A                .desktop-o=
nly {=0A                    display: block !important;=0A                }=
=0A                .mobile-only {=0A                    display: none !impo=
rtant;=0A                }=0A            }=0A=0A            @media print {=
=0A                div.media-print-hidden {=0A                    display: =
none;=0A                }=0A            }=0A=0A            .ak-button__appe=
arance-primary:hover {=0A                background: #0065FF !important;=0A=
            }=0A=0A            .ak-button__appearance-subtle-link:hover {=
=0A                color: #8993a4 !important;=0A                text-decora=
tion: underline !important;=0A            }=0A=0A            div.issue-summ=
ary a:hover {=0A                color: #0065FF !important;=0A            }=
=0A=0A            .footer a:hover {=0A                color: #0065FF !impor=
tant;=0A                text-decoration: underline !important;=0A          =
  }=0A=0A            .layout-simple-header a:hover {=0A                colo=
r: #0065FF !important;=0A            }=0A=0A            .layout-simple-head=
er-with-breadcrumbs a:hover {=0A                color: #0065FF !important;=
=0A            }=0A=0A            .confluence-content-section a:hover {=0A =
               color: #0065FF !important;=0A                text-decoration=
: underline !important;=0A            }=0A=0A            .confluence-header=
 a:hover {=0A                color: #0065FF !important;=0A                t=
ext-decoration: underline !important;=0A            }=0A        </style>=0A=
 </head>=0A <body style=3D"background-color: #ffffff; font-family: -apple-s=
ystem, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira =
Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; font-size: 14px; font-st=
yle: normal; font-weight: 400; color: #172b4d; letter-spacing: -0.15px; col=
or: #333333; font-family: Arial, sans-serif; font-size: 14px; line-height: =
1.4285715; background-color: #ffffff; font-family: -apple-system, BlinkMacS=
ystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sa=
ns', 'Helvetica Neue', sans-serif; color: #172b4d; letter-spacing: -0.15px"=
 bgcolor=3D"#ffffff">=0A  <div class=3D"hidden" style=3D"display: none">=0A=
   <span class=3D"summary-text-part">Florian GRENIER <b>made 1 update</b>.<=
/span> <span>Tests QA/FQA-123</span> <span>[Breadcrumb] effet hover univers=
 Web &amp; Domaines pas pr=C3=A9sent</span> <span>&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=
=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C&nbsp;=E2=80=8C</span>=0A  </div>=0A  <=
div class=3D"outer-container" style=3D"width: 100.0%; table-layout: fixed; =
max-width: 1040px; margin: 0 auto; -webkit-text-size-adjust: 100.0%; -ms-te=
xt-size-adjust: 100.0%">=0A   <!--[if (gte mso 9)|(IE)]>=0A            <tab=
le align=3D"center" cellpadding=3D"0" cellspacing=3D"0" border=3D"0">=0A   =
             <tr>=0A                    <td width=3D"1040">=0A            <=
![endif]-->=0A   <table style=3D"border-spacing: 0; margin: 0; border-colla=
pse: collapse; width: 100.0%; border-spacing: 0; margin: 0">=0A    <tbody s=
tyle=3D"border-bottom: 0">=0A     <tr>=0A      <td style=3D"padding: 0; pad=
ding: 0">=0A       <div class=3D"overview-headline" style=3D"font-size: 14p=
x; margin-bottom: 7px">=0A        <span class=3D"summary-text-part" style=
=3D"display: inline">Florian GRENIER <b style=3D"font-weight: 600">made 1 u=
pdate</b>.</span>=0A       </div>=0A       <table class=3D"email-container"=
 style=3D"border-spacing: 0; margin: 0; border-collapse: collapse; width: 1=
00.0%; border-spacing: 0; margin: 0; max-width: 1040px; margin: 0; border-c=
ollapse: separate">=0A        <tbody style=3D"border-bottom: 0">=0A        =
 <tr>=0A          <td class=3D"email-container" style=3D"padding: 0; paddin=
g: 0; padding-top: 12px; padding-bottom: 12px; border-top: 2px solid #dfe1e=
6; border-bottom: 2px solid #dfe1e6">=0A           <table class=3D"event-gr=
oup" style=3D"border-spacing: 0; margin: 0; border-collapse: collapse; widt=
h: 100.0%; border-spacing: 0; margin: 0; margin: 0 0 0 0">=0A            <t=
head style=3D"border-bottom: 0">=0A             <tr>=0A              <td co=
lspan=3D"3" style=3D"padding: 0; padding: 0">=0A               <div>=0A    =
            <div>=0A                 <div class=3D"np-breadcrumbs" style=3D=
"color: #6b778c; font-weight: 500; font-size: 14px; line-height: 20px; marg=
in-bottom: 6px">=0A                  <table class=3D"breadcrumbs-table" sty=
le=3D"border-spacing: 0; margin: 0; border-collapse: collapse; width: 100.0=
%; border-spacing: 0; margin: 0; width: auto; border-spacing: 0; height: 20=
px" height=3D"20">=0A                   <tbody style=3D"border-bottom: 0">=
=0A                    <tr>=0A                     <td style=3D"padding: 0;=
 padding: 0; white-space: nowrap; color: #6b778c">=0A                      =
<table style=3D"border-spacing: 0; margin: 0; border-collapse: collapse; wi=
dth: 100.0%; border-spacing: 0; margin: 0">=0A                       <tbody=
 style=3D"border-bottom: 0">=0A                        <tr>=0A             =
            <td style=3D"padding: 0; padding: 0; white-space: nowrap; color=
: #6b778c"><a class=3D"ak-button ak-button__appearance-subtle-link subtle-l=
ink-height-override zero-padding" href=3D"https://infomaniak.atlassian.net/=
browse/FQA=3FatlOrigin=3DeyJpIjoiNWI1NTk5Nzk3YTVkNGZjMmI2YjliMGI0MDYzMjhiMD=
UiLCJwIjoiaiJ9" style=3D"color: #0052cc; text-decoration: none; align-items=
: baseline; box-sizing: border-box; border-radius: 3px; border-width: 0; di=
splay: inline-flex; font-style: normal; font-size: inherit; height: 2.28571=
44em; line-height: 2.2857144em; margin: 0; outline: none; padding: 0 12px; =
text-align: center; transition: background 0.1s ease-out, box-shadow 0.15s =
cubic-bezier(0.47, 0.03, 0.49, 1.38); user-select: none; vertical-align: mi=
ddle; white-space: nowrap; background: none; color: #42526e; text-decoratio=
n: none; padding: 0px; color: #6b778c; height: auto; line-height: normal">T=
ests QA</a></td>=0A                        </tr>=0A                       <=
/tbody>=0A                      </table></td>=0A                     <td st=
yle=3D"padding: 0; padding: 0; white-space: nowrap; color: #6b778c"><span c=
lass=3D"np-breadcrumb-separator" style=3D"color: #6b778c">&nbsp;&nbsp;/&nbs=
p;&nbsp;</span></td>=0A                     <td style=3D"padding: 0; paddin=
g: 0; white-space: nowrap; color: #6b778c">=0A                      <table =
style=3D"border-spacing: 0; margin: 0; border-collapse: collapse; width: 10=
0.0%; border-spacing: 0; margin: 0">=0A                       <tbody style=
=3D"border-bottom: 0">=0A                        <tr>=0A                   =
      <td style=3D"padding: 0; padding: 0; white-space: nowrap; color: #6b7=
78c"><a class=3D"ak-button ak-button__appearance-subtle-link subtle-link-he=
ight-override zero-padding" href=3D"https://infomaniak.atlassian.net/browse=
/FQA-123=3FatlOrigin=3DeyJpIjoiNWI1NTk5Nzk3YTVkNGZjMmI2YjliMGI0MDYzMjhiMDUi=
LCJwIjoiaiJ9" style=3D"color: #0052cc; text-decoration: none; align-items: =
baseline; box-sizing: border-box; border-radius: 3px; border-width: 0; disp=
lay: inline-flex; font-style: normal; font-size: inherit; height: 2.2857144=
em; line-height: 2.2857144em; margin: 0; outline: none; padding: 0 12px; te=
xt-align: center; transition: background 0.1s ease-out, box-shadow 0.15s cu=
bic-bezier(0.47, 0.03, 0.49, 1.38); user-select: none; vertical-align: midd=
le; white-space: nowrap; background: none; color: #42526e; text-decoration:=
 none; padding: 0px; color: #6b778c; height: auto; line-height: normal">FQA=
-123</a></td>=0A                        </tr>=0A                       </tb=
ody>=0A                      </table></td>=0A                    </tr>=0A  =
                 </tbody>=0A                  </table>=0A                 <=
/div>=0A                </div>=0A                <div class=3D"issue-summar=
y" style=3D"font-size: 20px; font-weight: normal; line-height: 24px; margin=
: 6px 0 0 0">=0A                 <a href=3D"https://infomaniak.atlassian.ne=
t/browse/FQA-123=3FatlOrigin=3DeyJpIjoiNWI1NTk5Nzk3YTVkNGZjMmI2YjliMGI0MDYz=
MjhiMDUiLCJwIjoiaiJ9" style=3D"color: #0052cc; text-decoration: none; color=
: #0052cc"> <span>[Breadcrumb] effet hover univers Web &amp; Domaines pas p=
r=C3=A9sent</span> </a>=0A                </div>=0A               </div></t=
d>=0A             </tr>=0A            </thead>=0A            <tbody style=
=3D"border-bottom: 0">=0A            </tbody>=0A            <tbody style=3D=
"border-bottom: 0">=0A             <tr class=3D"message-part-header">=0A   =
           <td rowspan=3D"2" class=3D"user-avatar" style=3D"padding: 0; pad=
ding: 0; padding-top: 14px; vertical-align: top; width: 40px" width=3D"40">=
<img class=3D"user-avatar" src=3D"https://avatar-management--avatars.us-wes=
t-2.prod.public.atl-paas.net/5f3a412e347294003e136c91/8910f1ae-c86d-4f45-a0=
0d-f4043f7dac0f/128" style=3D"border: 0; border: 0; border-radius: 50.0%; w=
idth: 32px; height: 32px" width=3D"32" height=3D"32"></td>=0A              =
<td colspan=3D"2" class=3D"header" style=3D"padding: 0; padding: 0; padding=
-top: 14px; padding-bottom: 6px; line-height: 20px; vertical-align: middle"=
><span class=3D"user-avatar-name" style=3D"color: #42526e; font-weight: 500=
; display: inline-block; vertical-align: middle">Florian GRENIER</span> <sp=
an style=3D"color: #42526e; display: inline-block; vertical-align: middle">=
 4:40&nbsp;PM&nbsp;CEST</span></td>=0A             </tr>=0A             <tr=
 class=3D"message-part-content">=0A              <td class=3D"label" style=
=3D"padding: 0; padding: 0; white-space: nowrap; width: 1.0%; vertical-alig=
n: top; padding-right: 5px; line-height: 24px">Status:</td>=0A             =
 <td class=3D"user-content-narrow" style=3D"padding: 0; padding: 0; line-he=
ight: 24px"><span class=3D"diff-old" style=3D"max-width: 700px; height: aut=
o; display: inline-block; padding: 0 4px; background-color: #ffebe6; text-d=
ecoration: line-through" bgcolor=3D"#ffebe6">A faire - Feedbacks</span> <im=
g class=3D"ak-icon inline" alt=3D"=E2=86=92" id=3D"logo" src=3D"cid:atl-gen=
erated-f3c16fb8-dd0a-4e8d-a99b-9be6512b998d" style=3D"border: 0; fill: #fff=
fff; height: 24px; width: 24px; border: 0; max-width: 700px; height: auto; =
fill: #ffffff; height: 16px; width: 16px; vertical-align: middle" height=3D=
"16" width=3D"16"> <span class=3D"diff-new" style=3D"max-width: 700px; heig=
ht: auto; display: inline-block; padding: 0 4px; background-color: #e3fcef"=
 bgcolor=3D"#e3fcef">A tester - Feedbacks</span></td>=0A             </tr>=
=0A            </tbody>=0A            <tbody style=3D"border-bottom: 0">=0A=
             <tr>=0A              <td colspan=3D"3" height=3D"12px" style=
=3D"padding: 0; padding: 0">&nbsp;</td>=0A             </tr>=0A            =
 <tr>=0A              <td colspan=3D"3" style=3D"padding: 0; padding: 0">=
=0A               <div class=3D"layout-action-button media-print-hidden" st=
yle=3D"margin: 0 0 6px 0">=0A                <table style=3D"border-spacing=
: 0; margin: 0; border-collapse: collapse; width: 100.0%; border-spacing: 0=
; margin: 0">=0A                 <tbody style=3D"border-bottom: 0">=0A     =
             <tr>=0A                   <td style=3D"padding: 0; padding: 0"=
><!--[if mso]>=0A                        <v:roundrect xmlns:v=3D"urn:schema=
s-microsoft-com:vml"=0A                                     xmlns:w=3D"urn:=
schemas-microsoft-com:office:word"=0A                                     s=
tyle=3D"width:130px;mso-wrap-style:none;mso-position-horizontal:center;"=0A=
                                     arcsize=3D"10%" stroke=3D"f" fillcolor=
=3D"#0052CC" href=3D"https://infomaniak.atlassian.net/browse/FQA-123=3FatlO=
rigin=3DeyJpIjoiNWI1NTk5Nzk3YTVkNGZjMmI2YjliMGI0MDYzMjhiMDUiLCJwIjoiaiJ9">=
=0A                            <w:anchorlock/>=0A                          =
  <v:textbox inset=3D"38px,6px,38px,6px" style=3D"mso-fit-shape-to-text:t">=
=0A                                <center>=0A                        <![en=
dif]--> <a class=3D"ak-button ak-button__appearance-primary" href=3D"https:=
//infomaniak.atlassian.net/browse/FQA-123=3FatlOrigin=3DeyJpIjoiNWI1NTk5Nzk=
3YTVkNGZjMmI2YjliMGI0MDYzMjhiMDUiLCJwIjoiaiJ9" style=3D"color: #0052cc; tex=
t-decoration: none; align-items: baseline; box-sizing: border-box; border-r=
adius: 3px; border-width: 0; display: inline-flex; font-style: normal; font=
-size: inherit; height: 2.2857144em; line-height: 2.2857144em; margin: 0; o=
utline: none; padding: 0 12px; text-align: center; transition: background 0=
=2E1s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38); user=
-select: none; vertical-align: middle; white-space: nowrap; background: #00=
52cc; color: #ffffff; text-decoration: none; font-family: -apple-system, Bl=
inkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'D=
roid Sans', 'Helvetica Neue', sans-serif; font-size: 14px; padding: 0 38px"=
>View issue</a> <!--[if mso]>=0A                                </center>=
=0A                            </v:textbox>=0A                        </v:r=
oundrect>=0A                        <![endif]--></td>=0A                  <=
/tr>=0A                 </tbody>=0A                </table>=0A             =
  </div></td>=0A             </tr>=0A            </tbody>=0A           </ta=
ble></td>=0A         </tr>=0A         <tr>=0A          <td class=3D"footer-=
container" style=3D"padding: 0; padding: 0; padding-top: 12px">=0A         =
  <table class=3D"footer" width=3D"100%" cellpadding=3D"0" cellspacing=3D"0=
" border=3D"0" style=3D"border-spacing: 0; margin: 0; border-collapse: coll=
apse; width: 100.0%; border-spacing: 0; margin: 0">=0A            <tbody st=
yle=3D"border-bottom: 0">=0A             <tr>=0A              <td style=3D"=
padding: 0; padding: 0">=0A               <table style=3D"border-spacing: 0=
; margin: 0; border-collapse: collapse; width: 100.0%; border-spacing: 0; m=
argin: 0">=0A                <tbody style=3D"border-bottom: 0">=0A         =
        <tr>=0A                  <td style=3D"padding: 0; padding: 0"><smal=
l style=3D"color: #707070; font-size: 12px; line-height: 1.3333334; color: =
#707070; font-size: 12px; font-weight: normal; line-height: 17px">Get Jira =
notifications on your phone! Download the Jira Cloud app for <a href=3D"htt=
ps://play.google.com/store/apps/details=3Fid=3Dcom.atlassian.android.jira.c=
ore&referrer=3Dutm_source%3DNotificationLink%26utm_medium%3DEmail" style=3D=
"color: #0052cc; text-decoration: none">Android</a> or <a href=3D"https://i=
tunes.apple.com/app/apple-store/id1006972087=3Fpt=3D696495&ct=3DEmailNotifi=
cationLink&mt=3D8" style=3D"color: #0052cc; text-decoration: none">iOS</a>.=
</small></td>=0A                 </tr>=0A                 <tr>=0A          =
        <td style=3D"padding: 0; padding: 0">=0A                   <div cla=
ss=3D"footer-content-actions-spacing" style=3D"mso-line-height-rule: exactl=
y; line-height: 4px; height: 4px; font-size: 1px" height=3D"4">=0A         =
           &nbsp;=0A                   </div></td>=0A                 </tr>=
=0A                 <tr>=0A                  <td class=3D"footer-actions-li=
ne-height" style=3D"padding: 0; padding: 0; mso-line-height-rule: exactly; =
line-height: 15px"><small style=3D"color: #707070; font-size: 12px; line-he=
ight: 1.3333334; color: #707070; font-size: 12px; font-weight: normal; line=
-height: 17px"> <a href=3D"https://infomaniak.atlassian.net/jira/settings/p=
ersonal/notifications=3FemailPreferences=3Dtrue&atlOrigin=3DeyJpIjoiNWI1NTk=
5Nzk3YTVkNGZjMmI2YjliMGI0MDYzMjhiMDUiLCJwIjoiaiJ9#emailpreferences" style=
=3D"color: #0052cc; text-decoration: none">Manage notifications</a> </small=
> <small style=3D"color: #707070; font-size: 12px; line-height: 1.3333334; =
color: #707070; font-size: 12px; font-weight: normal; line-height: 17px"> &=
nbsp;=E2=80=A2&nbsp; </small> <small style=3D"color: #707070; font-size: 12=
px; line-height: 1.3333334; color: #707070; font-size: 12px; font-weight: n=
ormal; line-height: 17px"> <a href=3D"https://surveys.atlassian.com/jfe/for=
m/SV_9X3zi1X4q1gKsqF" style=3D"color: #0052cc; text-decoration: none">Give =
feedback</a> </small> <small style=3D"color: #707070; font-size: 12px; line=
-height: 1.3333334; color: #707070; font-size: 12px; font-weight: normal; l=
ine-height: 17px"> &nbsp;=E2=80=A2&nbsp; </small> <small style=3D"color: #7=
07070; font-size: 12px; line-height: 1.3333334; color: #707070; font-size: =
12px; font-weight: normal; line-height: 17px"> <a href=3D"https://www.atlas=
sian.com/legal/privacy-policy" style=3D"color: #0052cc; text-decoration: no=
ne">Privacy policy</a> </small></td>=0A                 </tr>=0A           =
     </tbody>=0A               </table></td>=0A              <td width=3D"2=
0" class=3D"desktop-only" style=3D"padding: 0; padding: 0; display: block">=
&nbsp;</td>=0A              <td class=3D"right-align" style=3D"padding: 0; =
padding: 0; text-align: right">=0A               <div class=3D"desktop-only=
" style=3D"display: block">=0A                <img class=3D"jira-logo" src=
=3D"cid:atl-generated-241d019e-a5c2-4b5c-ae55-0cf5c47544fc" style=3D"border=
: 0; border: 0; height: 32px" height=3D"32">=0A               </div></td>=
=0A             </tr>=0A             <tr>=0A              <td style=3D"padd=
ing: 0; padding: 0">=0A               <div class=3D"mobile-vertical-spacing=
 mobile-only" style=3D"display: none; line-height: 8px; height: 8px" height=
=3D"8">=0A                &nbsp;=0A               </div></td>=0A           =
  </tr>=0A             <tr>=0A              <td style=3D"padding: 0; paddin=
g: 0">=0A               <div class=3D"mobile-only" style=3D"display: none">=
=0A                <img class=3D"jira-logo" src=3D"cid:atl-generated-241d01=
9e-a5c2-4b5c-ae55-0cf5c47544fc" style=3D"border: 0; border: 0; height: 32px=
" height=3D"32">=0A               </div></td>=0A             </tr>=0A      =
      </tbody>=0A           </table></td>=0A         </tr>=0A        </tbod=
y>=0A       </table></td>=0A     </tr>=0A    </tbody>=0A   </table><!--[if =
(gte mso 9)|(IE)]>=0A                    </td>=0A                </tr>=0A  =
          </table>=0A            <![endif]-->=0A  </div>=0A =0D=0A<img bord=
er=3D"0" width=3D"1" height=3D"1" alt=3D"" src=3D"http://atlassian.et.e.spa=
rkpost.com/q/jaJg_BOhAu8ptjhWmo0JGg~~/AAAAAQA~/RgRm4v37PlcLYXRsYXNzaWFudXNC=
CmT6-3gAZQbHVw9SH3ZhbGVudGluLnJpY2hhcmRAaW5mb21hbmlhay5jb21YBAAAAAA~">=0D=
=0A</body>=0A</html>
--_----sSjMBp470x1jj5NfrJklrQ===_05/F0-16671-BF870056--
--_----Fe0lUf462s6JwrpHE0+WxA===_05/F0-16671-BF870056
Content-Type: image/png
Content-Disposition: inline; filename="atl-generated-241d019e-a5c2-4b5c-ae55-0cf5c47544fc"
Content-Transfer-Encoding: base64
Content-ID: <atl-generated-241d019e-a5c2-4b5c-ae55-0cf5c47544fc>

iVBORw0KGgoAAAANSUhEUgAAAI4AAABACAYAAADMH0/MAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA
AXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA2jSURBVHgB7V3NbxvHFX9vdinRSYpIRd1DWyBU
AxlCLrHQFHVOpnPqoW2UFCkc9GC6BXps7NwKf1F1it4S6R9w6AJt7AZN5FNvMdOLHbSI5UNT1ZJh
unDSwkVgunWslciZ6Xszs6vlZ0XSFEhqfzBF7u7sksv97Xu/9zE0QIIECRIkSJAgQYIECRIk6B4I
fcTTZ/WcAHgR+oP7FQkLpTyWIMGOw4c+wgPYT9TMQZ8w5sORTF5PEXnKkGBHIaCP0BpK0F9M+B6R
M8GOo6/EqShYggQjib66KnYh02/oIgmpLOwSZLM5uBMEWTrnI7yMgMVN0B+Wrl4owQihrxaHQe5q
HnYJ9hNpPguCPJHmMi3m+KFBF1IAH2SycxMwQuirxWGsncLi9Fm9iAivwRDi6ed/NCe0qIkMtdbX
1z66uBBfl8/nobC0PJlKp880OcyUH6SP8TAYEfTd4jBWT+ExDbAMQwjUgsV3ruaB+IP6ccViCfx0
uqVQF6ifhRHCjhCHUanCIXo6DyOKu3u/ABSyZVpAaXwSRgg7RhwWyjdOYk4rOEqKsQQjhk/efRf0
2Bhb1VKTzVoAjtRNs2PECbF6Ggs3TuCU0nCIhPMiubCicWNMpvhjCDG2d1qDFC+DbkhInr9x9Z2R
Ik7H4ngmrzP164Lw77p9Djbcc7Qx/pqfy3Dnr8slWlyI1lmUYWnWfOn73iBaDRk+eTdP4Xj+2r+C
lVlJglqjmqTVxbWrF4owYuiYONKH9yjcnI2t0imlUCkfZEpqJVPojyuQ1XE9LquoUlpLOQZpfu0r
UFKCHHuMxlXRr9L4lEReF+HlPx+H9769AEOKYjHPTyV6LMIIo2NXRaS5jVwa1SZHw1YBUQgQwtOe
76HwvOi15/sgPIGex+t9bbZ5AnjZ83yw43m9rzl+sRVXPAMJBh6d53E0XKerPMcMwlh1HQlMDOYT
YhWh6htSaY3aDUOMRjsLY5ardr22AK1GKlE2quiYOErAZaGBrYIOVQhdeLQsQmNNpIkiJJFH8zvQ
ah7oiORhqF2QDZa1NhI0fRJ2X6AQhk7cOJC+AdI3GVlXYqHzKbXSOd/63s+gfLc8J4SouWEq6WCp
VFwqbx3bljLoPpzzAJ6iY2b40Fp582sf/e4StP1cW/uSizlItza/F+1PIh5ViZaXSWxcunnl90vb
PZeOibN2Aj+kTHCRyJLFJt08bD6YPLzJbJbOATG9+G2NfTGU03ZI1R2GFz1Q7hWwUKbqNwwVSlCl
LDGdz9vxtW652GyP9Qeb5OkFZ9WzsdUagjSPL4cX/dMgOMM1P3bosRtLOwHeFIaUn5dfon3fpH0z
oRiI7T5BpOGk5X7KjuemDxy+Rcf+iSV583MBW04pdhWOE+PnwV7fRuNg1iBYPeMxiaLXwvc1L5P2
YW3D62g5pUnwGJ1jdA9td4cZykzzo0Rd7Svbyb7PPP9T/M+/779FhHgPrHXaDpgoH+w7cPj/6syu
iLNC9SdlydNgc6zGsYaFyYKGHEYks2gOSUTiORTN9tkJayeUzQe7BLscD4k09GV0HCzsy76KFf3F
OboIx6BzsJY488/1h2337ToBuHYS54Er37U2R8fdV+i2jJVx1sRaIWGiKSILhFFVOIa2myNsVKEA
1l3tSpCGmOqGNGylINC8X671KCyT3ll2ydciNGa7USGexjaWqqfM8Y1TmCe1chS3Mr0YC9MZmsmD
NhR3IbohyxaJ2PL4Aq11Ehyimx25ROGs2m4E33/noiXKRNMXOk+PQxUi1OrVC/jj784gCegvSxLR
4TAWtEEQtCScI8qhSnp9au3KxVnSMof48fX0zBR961NQU0vESXrfN6EFem6r4BICZZOLdKQ5Isxr
RJ1MaHRc1MVWyBDDROfAr8FpoViARTvSh8F4LpCs2sL0G/rF3dQIFkOG/yjUC0SO+XiExeA2Dqiz
yHehxBHtuWYHY+IRSfLNtoVJSyJejiKpeTrGB+b9UbcMTh5JP86KnWnA2d4FLklUvVoTx2wRiAfJ
ReVZWpuIi1HlEyItZPI6LPl9XS+bqKr+UsqHywi7r7eYL/bNKxfz2xkb6zzMNjtOK9LEwQQi8twi
8rwgNX7cljiZvJ5IefBWfCVfOkm3PhULQFW5fEBlgmoFFC1LupJKSZPEqcoqLUse7LZrWP3bdbsu
uv5kjf7w3PmZX+mMctGW0UFMGnJhbGWq0flJrA/U3AyG2X1ndZ5279jnDzFubedih/gMNjBsV+3l
OEwe0km3HgTBIrbRWMbioJvCwtrEJPMIlFvQStEiZfuQlBBHRZRk0dqzCT8mEykSTf9QcSKPDkVF
KRCUIQSTzJNhhjAHP/zLBC3eR6OokPWOzShThlnSAYyLMu5KW4fVBKynyJoVqCSWBztXa9QzzMVO
Biu6AgjyYN1qMuPYsU6cy2bg/KXlRX9sz2utrI5wd7TxlSFpDIEEl6CcgE1xXclGPFbI0mvfCVsv
jIzCnI3vQm5Xf7KpwMjN8HswaUxkJUw0hcIPoy2b22l1QuwSuaeHHpP0jcxyawbxtwSjB77lfrPd
wc+88grg5iZ/x5m6o5S7aedg/ZR6cg9llXXLlIi9vTUsNZs4R+QhbWKjHM766ciPUGmAtQqxgEkg
tNEoYEtO7ogmwhLk1lTduYRWDU0BFNA3bsscjt8Etze7dPUEjnSCkKKEbaci9qxPUvqinBF1MTJ9
0V1/R2qdXA2o64jN72PzVuRdCuaNtPEukbtihIk8sZWLQWsZfJPQ81PWCnk22WfC6XjV2zzoOJ4L
2WPHNtbI48o6j/FNZtlU1iEBVDxv28SRDzbpJhfNepr/BF3iyb2Ps8YttdpuiMP1J47x+aLGL2w4
yJKHSUD+y2R3rSvCKBtsCOKI5bs8jXDZYPPMtq3mQ+gw38PkcXkc047h9X3ixchhc4M1Y4MWYTPQ
dQL1S5aMLfffMm4Ix+la3oNYciX2EYylYKviU53JWBVTKvBdEs/14URJPS/UROaZdoCVX2BNSyjW
uCRydyLMKHuQoDNUxx9yuqNBxJJJ71vmPSIOawZyJ68DbAnkaFR4idny0AVGZ2U8J2pZ5BKhYGvZ
jNHOnemIDCrKTNa4I+2K5sKRLcHgo0ZOrZzAguQmLYqysJVIZVkcRli2i89ZHBFZGGEsk+ciLi+y
IpvSJAnLEHV2mVRyjabiY0GCgUdDrermSbwkqjBLNqHQaie+2ORWrFURNhRHfjYPL7JE1qVxyJ0y
+3HoT2F03lizsAkMIuuWiOIu4W88xsnXBreEWvct19VUiboSwlFKuM1LAVlK3L1IV3WCWcbBtbD2
giOiDL14ylXE0YVu2uby0Hb88Xq1ZUTIJS5SFniS1p92TYOuw6vR+iTYHjZVQPejuF1375FwhKeg
S/z3iTHQDx9OoGheB28bwjgCFdyjAdNn9dvkjnIKwz5SPhyVDUyhknI90roohbW5HM4CE3nY0px2
7gpsD4+prg+85RGo78MAgUPn8t1yCbH2IguNXU87Xv9c8i19sNX2ntoqwskOZuaCycHYnIwXNW/Z
TDJio+Bl8ngSvokuDRA76GBZnCZzvinpeQ8GCN9/7msgNzeLTTZlu/2VjM3xgCO1lj/D1/NMzigL
LGrIs9U2ypon1TxSYov295N4yEczTytv+kV0ZzWafgM1NlTl6XP+AwYIXCLwJx5njVOq3+avj+eg
Q2RNM5jMQptGrkeSbbPi1obqPKsBjavytrrVZfv9P7HlA350XJDrJ6YPHM5B45fHrrQIA4axjTRs
6AeXyErEf06Gm1d+TlanUN/P0w53oFLbSNYEvVqcWGnCTZFxeRvTChorkg4bZg4czkCLtoJqOhi4
OtlXxyWXcJoVJadS63tOwzbB/coYSCZNpt24nq4okYX7Vo/Equq214bJE5t+h3rHf9ugLciSvE3K
bFmjus4kiN+NGSLMGJ0TXYZjLVoKOrp7dwrFYgGeyeaKlSAoQn0zF+rjdM6TFbLorX5Szs2jmpKB
Pgfb6LjsjTiaiINbFe+QQPaPoMKlb4NtJWHAkAVUOf6cqSAN0995lVsIynaimp6wM3yaBneavvxf
wqBib0ZD6cbr4KmPm2zNUTYtSwQq8uQ7UdUlLqSmpJwAkTr4abDCid9s3T6c6T/S7K16MgWBNLqk
XFMY1ba/whKJyGPnlcNAw1qWTLtWSYZCvTjIPwLJv5ahv4LXKIX2eoshGXrk6Kq8T1riGhHpFj/T
TcQZ/Wzd2IJu80NYPRHHNIFpWKyparkyQmSFTMV7+OtPFF29f/PKxeMw4Fj742/hifE9b+leAg3U
1yrpoO259iw+uP5EeadSuFyX/bXk8QZL43QKnmlw46N3XoYhwTLpnSfS6XyX5ClUxjdeyMBEWx3X
8xVlqyNjk7/qCpdWNCsYKCil+G46z5PS2gwrsWsCKWaHwdLUg8nzjfRMvnG+VHOEc65Wr144uh3x
/8iytFRCOEKWp6CUmz1emw3mn287CgMKjqR8F36iFOXK4w9Lgxg5dQvzU7rF5Qk/SO+nCPfZ8IcK
6PU9pau35WObxU7P95Gm92d+rTOqCpd5Ul7cZdHrwuqpwSVOgs7xSMUHd/lRDWqKQvSjRJkPIcHI
oq8FRZ7s56fgWb8Ct1eS/1cqQYIECRIkSJAgQYIECRIkSJAgQYIECYYD/wObS2cGpmi/8wAAAABJ
RU5ErkJggg==
--_----Fe0lUf462s6JwrpHE0+WxA===_05/F0-16671-BF870056
Content-Type: image/png
Content-Disposition: inline; filename="atl-generated-f3c16fb8-dd0a-4e8d-a99b-9be6512b998d"
Content-Transfer-Encoding: base64
Content-ID: <atl-generated-f3c16fb8-dd0a-4e8d-a99b-9be6512b998d>

iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAG3RF
WHRqaXJhLXN5c3RlbS1pbWFnZS10eXBlAGljb266KjlFAAAAoUlEQVRo3u2YQQ7CIBBFe7UOK+OG
DhoXeoQCPXPpLTDRjSuDO0mc+l4ya/4jEGYYBgAAAIDfRPx8EE1l1Li6sHh7ApqKaHq8qjrNF8sC
9iRcWLxoqrYlNJ4aEncX8g0JJJBA4o8kRo1H0bS9Ldijape2o/Gq9qyCwKfO0uwR+vqGTPncvMRT
vBKe8IQnPOH3MVKaH+rtf6tY/9gCAACAvfMERv7d99auua0AAAAASUVORK5CYII=
--_----Fe0lUf462s6JwrpHE0+WxA===_05/F0-16671-BF870056--

`);

// with calendar event
export const MAIL_CONTENT10 = replaceNewLine(`Return-Path: <no-reply@infomaniak.com>
Delivered-To: valentin.richard@infomaniak.com
Received: from smtp-3-9000.mail.infomaniak.ch ([10.4.36.130])
\tby mda-3-0007.mail.infomaniak.ch with LMTP
\tid sOgEK9NiuWRB0xwAGuhv0Q
\t(envelope-from <no-reply@infomaniak.com>)
\tfor <valentin.richard@infomaniak.com>; Thu, 20 Jul 2023 18:37:39 +0200
Authentication-Results: mx.infomaniak.com; dmarc=pass (p=reject dis=none) header.from=infomaniak.com
Received: from smtp-bc16.mail.infomaniak.ch (smtp-bc16.mail.infomaniak.ch [45.157.188.22])
\tby smtp-3-9000.mail.infomaniak.ch (Postfix) with ESMTPS id 4R6JJM1kmkzlh8Tq
\tfor <valentin.richard@infomaniak.com>; Thu, 20 Jul 2023 18:37:39 +0200 (CEST)
Authentication-Results: mx.infomaniak.com;
\tdkim=pass (1024-bit key; secure) header.d=infomaniak.com header.i=@infomaniak.com header.b="cMviymrv";
\tdkim-atps=neutral
Received: from localhost (unknown [10.92.210.1])
\tby smtp-3-1000.mail.infomaniak.ch (Postfix) with ESMTP id 4R6JJL6hV1zMpr1b
\tfor <valentin.richard@infomaniak.com>; Thu, 20 Jul 2023 18:37:38 +0200 (CEST)
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/simple; d=infomaniak.com;
\ts=s1024; t=1689871059;
\tbh=+AH/R44pAzi/4esW4zbp0AQUaamW0wVC+uQHFCHOBKA=;
\th=Date:Subject:From:To:From;
\tb=cMviymrv6uYe0dY8G073LtvdAJkJCu2boZrh4arlT+sgCHPH/dwRfofj53VzWRUR5
\t slHCodlSTn6gVycKxKWtN07SyjvXcWZVJbClPMkJxprBC8FYG6Um7vOxYNsQb+wYCa
\t OA6RnEG6YwWeqqt081GEREe/WjprkPEhPDvq47/s=
Message-ID: <1053f66212dd0d1d343ee863f91239cb@swift.generated>
Date: Thu, 20 Jul 2023 18:37:38 +0200
Subject: Julien Viard invites you to Split Manager Hosting
From: Julien Viard <julien.viard@infomaniak.com>
To: valentin.richard@infomaniak.com
MIME-Version: 1.0
Content-Type: multipart/mixed;
 boundary="_=_swift_1689871058_3dedf47dfaf9e24ab8cabce475fa3c56_=_"
Authentication-Results: mx.infomaniak.com; spf=pass smtp.mailfrom=infomaniak.com
X-Infomaniak-Cause: gAAAAABkuWLTkMegc0ZLohfQ5kjU4Dz0HcBoEyf65kGQDrF63JKT48D0_B9g1yPhDLOHDu77OvVZZgDgNmyo2A8x1Ox13d_jSdN0XNzIIMVh6PwC3lqWpm4L_wdQhuGdTQxi3tI445nY2NnWugYg-O5BBHZyM7Nwezs1VNsnycTcbvIgMldw0YK6A1SgvEwdMSaqzM9zfGh0-vcVJHuSrPqC9ihSRNHR2l_Xxk-6y1UOQZF_FenZDcTK4iJl3YeD0G3ZBIaoaxux


--_=_swift_1689871058_3dedf47dfaf9e24ab8cabce475fa3c56_=_
Content-Type: multipart/alternative;
 boundary="_=_swift_1689871058_10197a541b3d8fc893ef779889a086bc_=_"


--_=_swift_1689871058_10197a541b3d8fc893ef779889a086bc_=_
Content-Type: text/plain; charset=utf-8
Content-Transfer-Encoding: quoted-printable

Julien Viard invites you

    Split Manager Hosting
25 July 2023
09=
:00 - 10:00

    Will you be there?
    Yes - https://calendar.infoma=
niak.com/public/invitation/reply?t=3D7bc1b3974bf32df31a4a352008f4403d5e108d=
ac&a=3D57FuMwZg%2BOpdFLZMyWRKcJphzijDLvZOtVp8rS0T3bQ&r=3Daccept
    Maybe=
 - https://calendar.infomaniak.com/public/invitation/reply?t=3D7bc1b3974bf3=
2df31a4a352008f4403d5e108dac&a=3D57FuMwZg%2BOpdFLZMyWRKcJphzijDLvZOtVp8rS0T=
3bQ&r=3Dtentative
    No - https://calendar.infomaniak.com/public/invitat=
ion/reply?t=3D7bc1b3974bf32df31a4a352008f4403d5e108dac&a=3D57FuMwZg%2BOpdFL=
ZMyWRKcJphzijDLvZOtVp8rS0T3bQ&r=3Ddecline

Guests
    julien.viard@in=
fomaniak.com (Organiser)
    florian.grenier@infomaniak.com
    thibaut=
.taelman@infomaniak.com
    valentin.richard@infomaniak.com
    mathieu=
.tappolet@infomaniak.com
    matthieu.mabillard@infomaniak.com

    K=
Meet - https://kmeet.infomaniak.com/wgyz-vyes-mypy-jkmz
    You can also =
download the Meet application at this link - https://www.infomaniak.com/en/=
kmeet


Infomaniak calendar - http://calendar.infomaniak.com
Suppor=
t - https://www.infomaniak.com/goto/en/support.contact
Guides - https://w=
ww.infomaniak.com/goto/en/support.faq.admin2
Latest news - https://news.i=
nfomaniak.com/

An ISO 27001, ISO 50001 and ISO 14001 certified company=


https://www.facebook.com/infomaniaknetwork
https://twitter.com/info=
maniak
https://www.youtube.com/channel/UC4Dt4z4qyWnKR7uVrHkn4YA
https:/=
/www.instagram.com/infomaniak_network/


--_=_swift_1689871058_10197a541b3d8fc893ef779889a086bc_=_
Content-Type: text/html; charset=utf-8
Content-Transfer-Encoding: quoted-printable

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.=
w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns=3D"http://www.w3.=
org/1999/xhtml" lang=3D"en" xml:lang=3D"en" style=3D"background:#f3f3f3!imp=
ortant"><head><meta http-equiv=3D"Content-Type" content=3D"text/html; chars=
et=3Dutf-8"><meta name=3D"viewport" content=3D"width=3Ddevice-width"><title=
>Event Invitation</title><style>@media  only screen{html{min-height:100%;ba=
ckground:#f3f3f3}}@media  only screen and (max-width:676px){table.body img{=
width:auto;height:auto}table.body center{min-width:0!important}table.body .=
container{width:95%!important}table.body .columns{height:auto!important;-mo=
z-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box=
;padding-left:16px!important;padding-right:16px!important}table.body .colum=
ns .columns{padding-left:0!important;padding-right:0!important}table.body .=
collapse .columns{padding-left:0!important;padding-right:0!important}th.sma=
ll-1{display:inline-block!important;width:8.333333%!important}th.small-11{d=
isplay:inline-block!important;width:91.666666%!important}th.small-12{displa=
y:inline-block!important;width:100%!important}.columns th.small-12{display:=
block!important;width:100%!important}table.menu{width:100%!important}table.=
menu td,table.menu th{width:auto!important;display:inline-block!important}t=
able.menu.vertical td,table.menu.vertical th{display:block!important}table.=
menu[align=3Dcenter]{width:auto!important}}</style></head><body style=3D"-m=
oz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:borde=
"r-box;-webkit-text-size-adjust:100%;Margin:0;background:#f3f3f3!important;b="
ox-sizing:border-box;color:#0a0a0a;font-family:Roboto,sans-serif;font-size:=
"16px;font-weight:400;line-height:1.3;margin:0;min-width:100%;padding:0;padd="
ing-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;w=
idth:100%!important"><span class=3D"preheader" style=3D"color:#f3f3f3;displ=
ay:none!important;font-size:1px;line-height:1px;max-height:0;max-width:0;ms=
o-hide:all!important;opacity:0;overflow:hidden;visibility:hidden"></span><t=
able class=3D"body" style=3D"Margin:0;background:#f3f3f3!important;border-c=
ollapse:collapse;border-spacing:0;color:#0a0a0a;font-family:Roboto,sans-ser=
if;font-size:16px;font-weight:400;height:100%;line-height:1.3;margin:0;padd=
ing:40px 60px;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0=
;text-align:left;vertical-align:top;width:100%"><tr style=3D"padding-bottom=
:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-al=
ign:top"><td class=3D"center" align=3D"center" valign=3D"top" style=3D"-moz=
-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!import=
"ant;color:#0a0a0a;font-family:Roboto,sans-serif;font-size:16px;font-weight:="
400;hyphens:auto;line-height:1.3;margin:0;padding-bottom:0;padding-left:0;p=
"adding-right:0;padding-top:0;text-align:left;vertical-align:top;word-wrap:b="
reak-word"><center style=3D"min-width:660px;width:100%"><table align=3D"cen=
ter" class=3D"wrapper float-center" style=3D"Margin:0 auto;border-collapse:=
collapse;border-spacing:0;float:none;margin:0 auto;padding-bottom:0;padding=
-left:0;padding-right:0;padding-top:0;text-align:center;vertical-align:top;=
width:100%"><tbody><tr style=3D"padding-bottom:0;padding-left:0;padding-rig=
ht:0;padding-top:0;text-align:left;vertical-align:top"><td class=3D"wrapper=
-inner" style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-col=
lapse:collapse!important;color:#0a0a0a;font-family:Roboto,sans-serif;font-s=
ize:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding-bott=
om:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-=
align:top;word-wrap:break-word"><table align=3D"center" class=3D"container =
header" style=3D"Margin:0 auto;background:#f3f3f3;border-collapse:collapse;=
border-spacing:0;margin:0 auto;margin-bottom:45px!important;padding-bottom:=
0;padding-left:0;padding-right:0;padding-top:0;text-align:inherit;vertical-=
align:top;width:660px"><tbody><tr style=3D"padding-bottom:0;padding-left:0;=
padding-right:0;padding-top:0;text-align:left;vertical-align:top"><td style=
=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collaps=
e!important;color:#0a0a0a;font-family:Roboto,sans-serif;font-size:16px;font=
"-weight:400;hyphens:auto;line-height:1.3;margin:0;padding-bottom:0;padding-="
left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;wor=
d-wrap:break-word"><table class=3D"row" style=3D"border-collapse:collapse;b=
order-spacing:0;display:table;padding:0;padding-bottom:0;padding-left:0;pad=
"ding-right:0;padding-top:0;position:relative;text-align:left;vertical-align="
:top;width:100%"><tbody><tr style=3D"padding-bottom:0;padding-left:0;paddin=
g-right:0;padding-top:0;text-align:left;vertical-align:top"><th class=3D"sm=
all-12 large-12 columns first last" style=3D"-moz-hyphens:auto;-webkit-hyph=
ens:auto;Margin:0 auto;border-collapse:collapse!important;color:#0a0a0a;fon=
t-family:Roboto,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line=
-height:1.3;margin:0 auto;padding-bottom:0;padding-left:16px;padding-right:=
16px;padding-top:0;text-align:left;vertical-align:top;width:644px;word-wrap=
:break-word"><table style=3D"border-collapse:collapse;border-spacing:0;padd=
ing-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;v=
ertical-align:top;width:100%"><tbody><tr style=3D"padding-bottom:0;padding-=
left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><t=
h style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:=
collapse!important;color:#0a0a0a;font-family:Roboto,sans-serif;font-size:16=
px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding-bottom:0;p=
adding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:=
top;word-wrap:break-word"><div class=3D"inline div-header" style=3D"display=
:flex;justify-content:center;margin:auto;width:170px"><a class=3D"float-cen=
ter" align=3D"center" href=3D"http://calendar.infomaniak.com" style=3D"colo=
r:#2199e8;font-family:Roboto,sans-serif;font-weight:400;line-height:1.3;pad=
ding:0;text-align:left;text-decoration:none"><img class=3D"header-image" sr=
c=3D"https://mail.storage.infomaniak.com/workspace/workspace-calendar-heade=
r.png" alt=3D"infomaniak calendar" style=3D"-ms-interpolation-mode:bicubic;=
border:none;clear:both;display:block;max-width:100%;outline:0;padding:50px =
10px 0 0;text-decoration:none;width:auto"></a></div></th><th class=3D"expan=
der" style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collap=
se:collapse!important;color:#0a0a0a;font-family:Roboto,sans-serif;font-size=
:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0!impor=
tant;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-ali=
gn:left;vertical-align:top;visibility:hidden;width:0;word-wrap:break-word">=
</th></tr></tbody></table></th></tr></tbody></table></td></tr></tbody></tab=
le></td></tr></tbody></table><table align=3D"center" class=3D"container bod=
"y-border" content float-center" style=3D"Margin:0 auto;background:#fefefe;bo=
rder-collapse:collapse;border-radius:10px!important;border-spacing:0;float:=
none;margin:0 auto;padding-bottom:0;padding-left:0;padding-right:0;padding-=
top:0;text-align:center;vertical-align:top;width:660px"><tbody><tr style=3D=
"padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:l=
eft;vertical-align:top"><td style=3D"-moz-hyphens:auto;-webkit-hyphens:auto=
;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Robo=
"to,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;m="
argin:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-=
align:left;vertical-align:top;word-wrap:break-word"><table class=3D"spacer"=
 style=3D"border-collapse:collapse;border-spacing:0;padding-bottom:0;paddin=
g-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;w=
idth:100%"><tbody><tr style=3D"padding-bottom:0;padding-left:0;padding-righ=
t:0;padding-top:0;text-align:left;vertical-align:top"><td height=3D"20" sty=
le=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:colla=
pse!important;color:#0a0a0a;font-family:Roboto,sans-serif;font-size:20px;fo=
"nt-weight:400;hyphens:auto;line-height:20px;margin:0;mso-line-height-rule:e="
xactly;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-a=
lign:left;vertical-align:top;word-wrap:break-word">&nbsp;</td></tr></tbody>=
</table><table class=3D"row" style=3D"border-collapse:collapse;border-spaci=
ng:0;display:table;padding:0;padding-bottom:0;padding-left:0;padding-right:=
"0;padding-top:0;position:relative;text-align:left;vertical-align:top;width:="
100%"><tbody><tr style=3D"padding-bottom:0;padding-left:0;padding-right:0;p=
adding-top:0;text-align:left;vertical-align:top"><th class=3D"small-12 larg=
"e-12" columns first last" style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Ma=
rgin:0 auto;border-collapse:collapse!important;color:#0a0a0a;font-family:Ro=
boto,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3=
;margin:0 auto;padding-bottom:16px;padding-left:16px;padding-right:16px;pad=
ding-top:0;text-align:left;vertical-align:top;width:644px;word-wrap:break-w=
ord"><table style=3D"border-collapse:collapse;border-spacing:0;padding-bott=
om:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-=
align:top;width:100%"><tbody><tr style=3D"padding-bottom:0;padding-left:0;p=
adding-right:0;padding-top:0;text-align:left;vertical-align:top"><th style=
=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collaps=
e!important;color:#0a0a0a;font-family:Roboto,sans-serif;font-size:16px;font=
"-weight:400;hyphens:auto;line-height:1.3;margin:0;padding-bottom:0;padding-="
left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;wor=
d-wrap:break-word"><div class=3D"eventShow" style=3D"background-color:#fff;=
border:1px solid #2a2d3e;border-radius:12px;border-top-left-radius:15px;bor=
"der-top-right-radius:15px;height:75px;margin:auto;margin-top:5px;width:75px="
"><div class=3D"eventShow--day" style=3D"background-color:#2a2d3e;border:1p=
x solid #2a2d3e;border-top-left-radius:12px;border-top-right-radius:12px;co=
lor:#fff;height:21px;padding-top:4px"><p class=3D"text-center" style=3D"Mar=
gin:0;Margin-bottom:10px;color:#fff;font-family:Roboto,sans-serif;font-size=
":12px;font-weight:400;letter-spacing:0;line-height:16px;margin:0;margin-bot="
tom:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-al=
ign:center">Tuesday</p></div><div class=3D"eventShow--number" style=3D"colo=
r:#333;font-size:42px;font-weight:300;height:50px;letter-spacing:0;line-hei=
ght:50px;text-align:center;width:75px">25</div></div></th><th class=3D"expa=
nder" style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-colla=
pse:collapse!important;color:#0a0a0a;font-family:Roboto,sans-serif;font-siz=
e:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0!impo=
rtant;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-al=
ign:left;vertical-align:top;visibility:hidden;width:0;word-wrap:break-word"=
></th></tr></tbody></table></th></tr></tbody></table><table class=3D"row" s=
tyle=3D"border-collapse:collapse;border-spacing:0;display:table;padding:0;p=
adding-bottom:0;padding-left:0;padding-right:0;padding-top:0;position:relat=
ive;text-align:left;vertical-align:top;width:100%"><tbody><tr style=3D"padd=
ing-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;v=
ertical-align:top"><th class=3D"small-12 large-12 columns first last" style=
=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0 auto;border-collapse:co=
llapse!important;color:#0a0a0a;font-family:Roboto,sans-serif;font-size:16px=
;font-weight:400;hyphens:auto;line-height:1.3;margin:0 auto;padding-bottom:=
16px;padding-left:16px;padding-right:16px;padding-top:0;text-align:left;ver=
tical-align:top;width:644px;word-wrap:break-word"><table style=3D"border-co=
llapse:collapse;border-spacing:0;padding-bottom:0;padding-left:0;padding-ri=
ght:0;padding-top:0;text-align:left;vertical-align:top;width:100%"><tbody><=
tr style=3D"padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;t=
ext-align:left;vertical-align:top"><th style=3D"-moz-hyphens:auto;-webkit-h=
yphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-=
"family:Roboto,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-h="
eight:1.3;margin:0;padding-bottom:0;padding-left:0;padding-right:0;padding-=
top:0;text-align:left;vertical-align:top;word-wrap:break-word"><table class=
=3D"row" style=3D"border-collapse:collapse;border-spacing:0;display:table;p=
adding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;posi=
tion:relative;text-align:left;vertical-align:top;width:100%"><tbody><tr sty=
le=3D"padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-al=
ign:left;vertical-align:top"><p class=3D"text-center body-organizer_text" s=
tyle=3D"Margin:0;Margin-bottom:10px;color:#888;font-family:Roboto,sans-seri=
f;font-size:14px;font-weight:300;letter-spacing:0;line-height:16px;margin:0=
;margin-bottom:10px;padding-bottom:0;padding-left:0;padding-right:0;padding=
-top:0;text-align:center">Julien Viard invites you</p></tr></tbody></table>=
<table class=3D"row" style=3D"border-collapse:collapse;border-spacing:0;dis=
play:table;padding:0;padding-bottom:0;padding-left:0;padding-right:0;paddin=
g-top:0;position:relative;text-align:left;vertical-align:top;width:100%"><t=
body><tr style=3D"padding-bottom:0;padding-left:0;padding-right:0;padding-t=
op:0;text-align:left;vertical-align:top"><p class=3D"text-center body-title=
" style=3D"Margin:0;Margin-bottom:10px;color:#333;font-family:Roboto,sans-s=
"erif;font-size:28px;font-weight:700;letter-spacing:0;line-height:50px;margi="
n:0;margin-bottom:10px;max-width:625px;overflow:hidden;padding-bottom:0;pad=
"ding-left:0;padding-right:0;padding-top:0;text-align:center;text-overflow:e="
llipsis;white-space:nowrap">Split Manager Hosting</p></tr></tbody></table><=
table class=3D"spacer" style=3D"border-collapse:collapse;border-spacing:0;p=
adding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:lef=
t;vertical-align:top;width:100%"><tbody><tr style=3D"padding-bottom:0;paddi=
ng-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"=
><td height=3D"20" style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0=
;border-collapse:collapse!important;color:#0a0a0a;font-family:Roboto,sans-s=
"erif;font-size:20px;font-weight:400;hyphens:auto;line-height:20px;margin:0;="
mso-line-height-rule:exactly;padding-bottom:0;padding-left:0;padding-right:=
0;padding-top:0;text-align:left;vertical-align:top;word-wrap:break-word">&n=
bsp;</td></tr></tbody></table><table class=3D"row" style=3D"border-collapse=
:collapse;border-spacing:0;display:table;padding:0;padding-bottom:0;padding=
"-left:0;padding-right:0;padding-top:0;position:relative;text-align:left;ver="
tical-align:top;width:100%"><tbody><tr style=3D"padding-bottom:0;padding-le=
ft:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><th =
class=3D"dateTime small-12 large-6 columns first" style=3D"-moz-hyphens:aut=
o;-webkit-hyphens:auto;Margin:0 auto;border-collapse:collapse!important;col=
or:#0a0a0a;font-family:Roboto,sans-serif;font-size:16px;font-weight:400;hyp=
hens:auto;line-height:1.3;margin:0 auto;padding-bottom:16px;padding-left:0!=
important;padding-right:8px;padding-top:0;text-align:left;vertical-align:to=
p;width:50%;word-wrap:break-word"><table style=3D"border-collapse:collapse;=
border-spacing:0;padding-bottom:0;padding-left:0;padding-right:0;padding-to=
p:0;text-align:left;vertical-align:top;width:100%"><tbody><tr style=3D"padd=
ing-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;v=
ertical-align:top"><th style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Marg=
in:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Roboto,sa=
"ns-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin="
:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align=
:left;vertical-align:top;word-wrap:break-word"><div class=3D"inline date" s=
tyle=3D"align-items:center;display:flex;justify-content:center;padding:0 10=
px"><img class=3D"icon-invitationCalendar" src=3D"https://mail.storage.info=
maniak.com/workspace/calendar.png" alt style=3D"-ms-interpolation-mode:bicu=
bic;clear:both;display:block;height:18px;margin-right:10px;max-width:100%;o=
utline:0;text-decoration:none;width:18px"><p style=3D"Margin:0;Margin-botto=
m:10px;color:#0a0a0a;font-family:Roboto,sans-serif;font-size:16px;font-weig=
"ht:400;line-height:1.3;margin:0;margin-bottom:0;padding-bottom:0;padding-le="
ft:0;padding-right:0;padding-top:0;text-align:left">25 July 2023</p></div><=
/th></tr></tbody></table></th><th class=3D"small-12 large-6 columns last" s=
tyle=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0 auto;border-collaps=
e:collapse!important;color:#0a0a0a;font-family:Roboto,sans-serif;font-size:=
16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0 auto;padding-bot=
tom:16px;padding-left:8px;padding-right:0!important;padding-top:0;text-alig=
n:left;vertical-align:top;width:50%;word-wrap:break-word"><table style=3D"b=
order-collapse:collapse;border-spacing:0;padding-bottom:0;padding-left:0;pa=
dding-right:0;padding-top:0;text-align:left;vertical-align:top;width:100%">=
<tbody><tr style=3D"padding-bottom:0;padding-left:0;padding-right:0;padding=
-top:0;text-align:left;vertical-align:top"><th style=3D"-moz-hyphens:auto;-=
webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a=
"0a;font-family:Roboto,sans-serif;font-size:16px;font-weight:400;hyphens:aut="
o;line-height:1.3;margin:0;padding-bottom:0;padding-left:0;padding-right:0;=
padding-top:0;text-align:left;vertical-align:top;word-wrap:break-word"><div=
 class=3D"inline time" style=3D"align-items:center;display:flex;justify-con=
tent:center;padding:0 10px"><img class=3D"icon-invitationClock" src=3D"http=
s://mail.storage.infomaniak.com/workspace/clock.png" alt style=3D"-ms-inter=
polation-mode:bicubic;clear:both;display:block;height:18px;margin-right:10p=
x;max-width:100%;outline:0;text-decoration:none;width:18px"><p style=3D"Mar=
gin:0;Margin-bottom:10px;color:#0a0a0a;font-family:Roboto,sans-serif;font-s=
"ize:16px;font-weight:400;line-height:1.3;margin:0;margin-bottom:0;padding-b="
ottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left">09:00=
 - 10:00 <span class=3D"timezone" style=3D"color:#666;font-size:12px;margin=
-left:2px">(GMT+02:00)</span></p></div></th></tr></tbody></table></th></tr>=
</tbody></table><hr style=3D"margin:0 0 25px 0;opacity:.3"><table class=3D"=
row" style=3D"border-collapse:collapse;border-spacing:0;display:table;paddi=
ng:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;position=
:relative;text-align:left;vertical-align:top;width:100%"><tbody><tr style=
=3D"padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-alig=
n:left;vertical-align:top"><th class=3D"small-12 large-12 columns first las=
t" style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0 auto;border-col=
"lapse:collapse!important;color:#0a0a0a;font-family:Roboto,sans-serif;font-s="
ize:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0 auto;padding=
"-bottom:16px;padding-left:0!important;padding-right:0!important;padding-top="
:0;text-align:left;vertical-align:top;width:100%;word-wrap:break-word"><tab=
le style=3D"border-collapse:collapse;border-spacing:0;padding-bottom:0;padd=
ing-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top=
;width:100%"><tbody><tr style=3D"padding-bottom:0;padding-left:0;padding-ri=
ght:0;padding-top:0;text-align:left;vertical-align:top"><th style=3D"-moz-h=
yphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!importan=
"t;color:#0a0a0a;font-family:Roboto,sans-serif;font-size:16px;font-weight:40="
0;hyphens:auto;line-height:1.3;margin:0;padding-bottom:0;padding-left:0;pad=
"ding-right:0;padding-top:0;text-align:left;vertical-align:top;word-wrap:bre="
ak-word"><div class=3D"inline no-padding" style=3D"display:flex;justify-con=
tent:center;padding:0">Will you be there?</div></th><th class=3D"expander" =
style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:co=
llapse!important;color:#0a0a0a;font-family:Roboto,sans-serif;font-size:16px=
;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0!important;=
padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:le=
ft;vertical-align:top;visibility:hidden;width:0;word-wrap:break-word"></th>=
</tr></tbody></table></th></tr></tbody></table><table class=3D"row" style=
=3D"border-collapse:collapse;border-spacing:0;display:table;padding:0;paddi=
ng-bottom:0;padding-left:0;padding-right:0;padding-top:0;position:relative;=
text-align:left;vertical-align:top;width:100%"><tbody><tr style=3D"padding-=
bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;verti=
cal-align:top"><th class=3D"small-12 large-4 columns first" style=3D"-moz-h=
yphens:auto;-webkit-hyphens:auto;Margin:0 auto;border-collapse:collapse!imp=
ortant;color:#0a0a0a;font-family:Roboto,sans-serif;font-size:16px;font-weig=
ht:400;hyphens:auto;line-height:1.3;margin:0 auto;padding-bottom:16px;paddi=
ng-left:0!important;padding-right:8px;padding-top:0;text-align:left;vertica=
l-align:top;width:33.333333%;word-wrap:break-word"><table style=3D"border-c=
ollapse:collapse;border-spacing:0;padding-bottom:0;padding-left:0;padding-r=
ight:0;padding-top:0;text-align:left;vertical-align:top;width:100%"><tbody>=
<tr style=3D"padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;=
text-align:left;vertical-align:top"><th style=3D"-moz-hyphens:auto;-webkit-=
hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font=
"-family:Roboto,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-="
height:1.3;margin:0;padding-bottom:0;padding-left:0;padding-right:0;padding=
-top:0;text-align:left;vertical-align:top;word-wrap:break-word"><div class=
=3D"inline" style=3D"display:flex;justify-content:center"><table class=3D"b=
utton body-button-2 success button invitationButton" style=3D"Margin:0 0 16=
px 0;border-collapse:collapse;border-radius:4px!important;border-spacing:0;=
box-shadow:0 0 transparent;margin:10px auto 0!important;min-width:120px;pad=
ding:16px 8px;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0=
;text-align:center;vertical-align:top;width:auto"><tbody><tr style=3D"paddi=
ng-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;ve=
rtical-align:top"><td style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margi=
n:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Roboto,san=
"s-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:="
0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:=
left;vertical-align:top;word-wrap:break-word"><table style=3D"border-collap=
se:collapse;border-spacing:0;padding-bottom:0;padding-left:0;padding-right:=
0;padding-top:0;text-align:left;vertical-align:top;width:100%"><tbody><tr s=
tyle=3D"padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-=
align:left;vertical-align:top"><td style=3D"-moz-hyphens:auto;-webkit-hyphe=
ns:auto;Margin:0;background:#3ebf4d;border:0 solid #3ebf4d;border-collapse:=
"collapse!important;border-radius:4px;box-shadow:0" 0 transparent;color:#fefe=
"fe;font-family:Roboto,sans-serif;font-size:16px;font-weight:400;hyphens:aut="
o;line-height:1.3;margin:0;padding:8px 16px;padding-bottom:0;padding-left:0=
";padding-right:0;padding-top:0;text-align:center;vertical-align:top;word-wr="
ap:break-word"><a type=3D"button" href=3D"https://calendar.infomaniak.com/p=
ublic/invitation/reply?t=3D7bc1b3974bf32df31a4a352008f4403d5e108dac&amp;a=
=3D57FuMwZg%2BOpdFLZMyWRKcJphzijDLvZOtVp8rS0T3bQ&amp;r=3Daccept" style=3D"b=
order:0 solid #3ebf4d;border-radius:3px;box-shadow:0 0 transparent;color:#f=
ff;display:inline-block;font-family:Roboto,sans-serif;font-size:14px;font-w=
eight:500;line-height:1.3;padding:8px 16px 8px 16px;text-align:center;text-=
decoration:none;text-transform:UPPERCASE;width:75%">Yes</a></td></tr></tbod=
y></table></td></tr></tbody></table></div></th></tr></tbody></table></th><t=
h class=3D"small-12 large-4 columns" style=3D"-moz-hyphens:auto;-webkit-hyp=
hens:auto;Margin:0 auto;border-collapse:collapse!important;color:#0a0a0a;fo=
nt-family:Roboto,sans-serif;font-size:16px;font-weight:400;hyphens:auto;lin=
e-height:1.3;margin:0 auto;padding-bottom:16px;padding-left:8px;padding-rig=
ht:8px;padding-top:0;text-align:left;vertical-align:top;width:33.333333%;wo=
rd-wrap:break-word"><table style=3D"border-collapse:collapse;border-spacing=
:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align=
:left;vertical-align:top;width:100%"><tbody><tr style=3D"padding-bottom:0;p=
adding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:=
top"><th style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-co=
llapse:collapse!important;color:#0a0a0a;font-family:Roboto,sans-serif;font-=
"size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding-bot="
tom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical=
-align:top;word-wrap:break-word"><div class=3D"inline" style=3D"display:fle=
x;justify-content:center"><table class=3D"button body-button-2 secondary bu=
"tton" invitationButton" style=3D"Margin:0 0 16px 0;border-collapse:collapse;=
border-radius:4px!important;border-spacing:0;box-shadow:0 0 transparent;mar=
gin:10px auto 0!important;min-width:120px;padding:16px 8px;padding-bottom:0=
;padding-left:0;padding-right:0;padding-top:0;text-align:center;vertical-al=
ign:top;width:auto"><tbody><tr style=3D"padding-bottom:0;padding-left:0;pad=
ding-right:0;padding-top:0;text-align:left;vertical-align:top"><td style=3D=
"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!i=
mportant;color:#0a0a0a;font-family:Roboto,sans-serif;font-size:16px;font-we=
ight:400;hyphens:auto;line-height:1.3;margin:0;padding-bottom:0;padding-lef=
t:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top;word-w=
rap:break-word"><table style=3D"border-collapse:collapse;border-spacing:0;p=
adding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:lef=
t;vertical-align:top;width:100%"><tbody><tr style=3D"padding-bottom:0;paddi=
ng-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"=
><td style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;background:#b=
8b8bd;background-color:#f1f1f1;border:0 solid #b8b8bd;border-collapse:colla=
"pse!important;border-radius:4px;box-shadow:0" 0 transparent;color:#fefefe;fo=
"nt-family:Roboto,sans-serif;font-size:16px;font-weight:400;hyphens:auto;lin="
e-height:1.3;margin:0;padding:8px 16px;padding-bottom:0;padding-left:0;padd=
"ing-right:0;padding-top:0;text-align:center;vertical-align:top;word-wrap:br="
eak-word"><a type=3D"button" href=3D"https://calendar.infomaniak.com/public=
/invitation/reply?t=3D7bc1b3974bf32df31a4a352008f4403d5e108dac&amp;a=3D57Fu=
MwZg%2BOpdFLZMyWRKcJphzijDLvZOtVp8rS0T3bQ&amp;r=3Dtentative" style=3D"borde=
r:0 solid #b8b8bd;border-radius:3px;box-shadow:0 0 transparent;color:#333;d=
isplay:inline-block;font-family:Roboto,sans-serif;font-size:14px;font-weigh=
t:500;line-height:1.3;padding:8px 16px 8px 16px;text-align:center;text-deco=
ration:none;text-transform:UPPERCASE;width:75%">PERHAPS</a></td></tr></tbod=
y></table></td></tr></tbody></table></div></th></tr></tbody></table></th><t=
h class=3D"small-12 large-4 columns last" style=3D"-moz-hyphens:auto;-webki=
t-hyphens:auto;Margin:0 auto;border-collapse:collapse!important;color:#0a0a=
0a;font-family:Roboto,sans-serif;font-size:16px;font-weight:400;hyphens:aut=
o;line-height:1.3;margin:0 auto;padding-bottom:16px;padding-left:8px;paddin=
g-right:0!important;padding-top:0;text-align:left;vertical-align:top;width:=
33.333333%;word-wrap:break-word"><table style=3D"border-collapse:collapse;b=
order-spacing:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top=
:0;text-align:left;vertical-align:top;width:100%"><tbody><tr style=3D"paddi=
ng-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;ve=
rtical-align:top"><th style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margi=
n:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Roboto,san=
"s-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:="
0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:=
left;vertical-align:top;word-wrap:break-word"><div class=3D"inline" style=
=3D"display:flex;justify-content:center"><table class=3D"button body-button=
"-2" alert button invitationButton" style=3D"Margin:0 0 16px 0;border-collaps=
e:collapse;border-radius:4px!important;border-spacing:0;box-shadow:0 0 tran=
sparent;margin:10px auto 0!important;min-width:120px;padding:16px 8px;paddi=
ng-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:center;=
vertical-align:top;width:auto"><tbody><tr style=3D"padding-bottom:0;padding=
-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><=
td style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse=
:collapse!important;color:#0a0a0a;font-family:Roboto,sans-serif;font-size:1=
6px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding-bottom:0;=
padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align=
:top;word-wrap:break-word"><table style=3D"border-collapse:collapse;border-=
spacing:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;tex=
t-align:left;vertical-align:top;width:100%"><tbody><tr style=3D"padding-bot=
tom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical=
-align:top"><td style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;ba=
ckground:#ec5840;border:0 solid #ec5840;border-collapse:collapse!important;=
"border-radius:4px;box-shadow:0" 0 transparent;color:#fefefe;font-family:Robo=
"to,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;m="
argin:0;padding:8px 16px;padding-bottom:0;padding-left:0;padding-right:0;pa=
dding-top:0;text-align:center;vertical-align:top;word-wrap:break-word"><a t=
ype=3D"button" href=3D"https://calendar.infomaniak.com/public/invitation/re=
ply?t="3D7bc1b3974bf32df31a4a352008f4403d5e108dac&amp;a=3D57FuMwZg%2BOpdFLZM="
yWRKcJphzijDLvZOtVp8rS0T3bQ&amp;r=3Ddecline" style=3D"border:0 solid #ec584=
"0;border-radius:3px;box-shadow:0" 0 transparent;color:#fff;display:inline-bl=
"ock;font-family:Roboto,sans-serif;font-size:14px;font-weight:500;line-heigh="
t:1.3;padding:8px 16px 8px 16px;text-align:center;text-decoration:none;text=
-transform:UPPERCASE;width:75%">No</a></td></tr></tbody></table></td></tr><=
/tbody></table></div></th></tr></tbody></table></th></tr></tbody></table><t=
able class=3D"spacer" style=3D"border-collapse:collapse;border-spacing:0;pa=
dding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left=
;vertical-align:top;width:100%"><tbody><tr style=3D"padding-bottom:0;paddin=
g-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top">=
<td height=3D"10" style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;=
border-collapse:collapse!important;color:#0a0a0a;font-family:Roboto,sans-se=
"rif;font-size:10px;font-weight:400;hyphens:auto;line-height:10px;margin:0;m="
so-line-height-rule:exactly;padding-bottom:0;padding-left:0;padding-right:0=
;padding-top:0;text-align:left;vertical-align:top;word-wrap:break-word">&nb=
sp;</td></tr></tbody></table><hr style=3D"margin:0 0 25px 0;opacity:.3"><ta=
ble class=3D"row" style=3D"border-collapse:collapse;border-spacing:0;displa=
y:table;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-t=
op:0;position:relative;text-align:left;vertical-align:top;width:100%"><tbod=
y><tr style=3D"padding-bottom:0;padding-left:0;padding-right:0;padding-top:=
0;text-align:left;vertical-align:top"><th class=3D"small-1 large-1 columns =
first" style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0 auto;border=
"-collapse:collapse!important;color:#0a0a0a;font-family:Roboto,sans-serif;fo="
nt-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0 auto;pad=
"ding-bottom:16px;padding-left:0!important;padding-right:8px;padding-top:0;t="
ext-align:left;vertical-align:top;width:8.333333%;word-wrap:break-word"><ta=
ble style=3D"border-collapse:collapse;border-spacing:0;padding-bottom:0;pad=
ding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:to=
p;width:100%"><tbody><tr style=3D"padding-bottom:0;padding-left:0;padding-r=
ight:0;padding-top:0;text-align:left;vertical-align:top"><th style=3D"-moz-=
hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!importa=
"nt;color:#0a0a0a;font-family:Roboto,sans-serif;font-size:16px;font-weight:4="
00;hyphens:auto;line-height:1.3;margin:0;padding-bottom:0;padding-left:0;pa=
"dding-right:0;padding-top:0;text-align:left;vertical-align:top;word-wrap:br="
eak-word"><img class=3D"icon-invitation" src=3D"https://mail.storage.infoma=
niak.com/workspace/users.png" alt style=3D"-ms-interpolation-mode:bicubic;c=
lear:both;display:block;max-width:100%;outline:0;text-decoration:none;width=
:18px"></th></tr></tbody></table></th><th class=3D"small-11 large-11 column=
"s" last" style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0 auto;borde=
r-collapse:collapse!important;color:#0a0a0a;font-family:Roboto,sans-serif;f=
ont-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0 auto;pa=
dding-bottom:16px;padding-left:8px;padding-right:0!important;padding-top:0;=
text-align:left;vertical-align:top;width:91.666666%;word-wrap:break-word"><=
table style=3D"border-collapse:collapse;border-spacing:0;padding-bottom:0;p=
adding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:=
top;width:100%"><tbody><tr style=3D"padding-bottom:0;padding-left:0;padding=
-right:0;padding-top:0;text-align:left;vertical-align:top"><th style=3D"-mo=
z-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!impor=
"tant;color:#0a0a0a;font-family:Roboto,sans-serif;font-size:16px;font-weight="
:400;hyphens:auto;line-height:1.3;margin:0;padding-bottom:0;padding-left:0;=
"padding-right:0;padding-top:0;text-align:left;vertical-align:top;word-wrap:="
break-word"><p class=3D"invitedText" style=3D"Margin:0;Margin-bottom:10px;c=
olor:#0a0a0a;font-family:Roboto,sans-serif;font-size:18px;font-weight:400;l=
"etter-spacing:0;line-height:21px;margin:0;margin-bottom:10px;padding-bottom="
:0;padding-left:0;padding-right:0;padding-top:0;text-align:left">Guests</p>=
<div class=3D"inline avatars" style=3D"display:flex;justify-content:left;pa=
dding-bottom:20px"><ul style=3D"Margin:0;padding:0"><li style=3D"Margin:0 0=
 "1em;list-style:disc" inside;mso-special-format:bullet">julien.viard@infoman=
iak.com (Organiser)</li><li style=3D"Margin:0 0 1em;list-style:disc inside;=
mso-special-format:bullet">florian.grenier@infomaniak.com</li><li style=3D"=
Margin:0 0 1em;list-style:disc inside;mso-special-format:bullet">thibaut.ta=
elman@infomaniak.com</li><li style=3D"Margin:0 0 1em;list-style:disc inside=
;mso-special-format:bullet">valentin.richard@infomaniak.com</li><li style=
=3D"Margin:0 0 1em;list-style:disc inside;mso-special-format:bullet">mathie=
u.tappolet@infomaniak.com</li><li style=3D"Margin:0 0 1em;list-style:disc i=
nside;mso-special-format:bullet">matthieu.mabillard@infomaniak.com</li></ul=
></div></th></tr></tbody></table></th></tr></tbody></table>  <hr style=3D"m=
argin:0 0 25px 0;opacity:.3"><table class=3D"row" style=3D"border-collapse:=
collapse;border-spacing:0;display:table;padding:0;padding-bottom:0;padding-=
"left:0;padding-right:0;padding-top:0;position:relative;text-align:left;vert="
ical-align:top;width:100%"><tbody><tr style=3D"padding-bottom:0;padding-lef=
t:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><th c=
lass=3D"small-1 large-1 columns first" style=3D"-moz-hyphens:auto;-webkit-h=
yphens:auto;Margin:0 auto;border-collapse:collapse!important;color:#0a0a0a;=
font-family:Roboto,sans-serif;font-size:16px;font-weight:400;hyphens:auto;l=
ine-height:1.3;margin:0 auto;padding-bottom:16px;padding-left:0!important;p=
adding-right:8px;padding-top:0;text-align:left;vertical-align:top;width:8.3=
33333%;word-wrap:break-word"><table style=3D"border-collapse:collapse;borde=
r-spacing:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;t=
ext-align:left;vertical-align:top;width:100%"><tbody><tr style=3D"padding-b=
ottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertic=
al-align:top"><th style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;=
border-collapse:collapse!important;color:#0a0a0a;font-family:Roboto,sans-se=
"rif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;pa="
dding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left=
;vertical-align:top;word-wrap:break-word"><img class=3D"icon-invitation-kme=
et" src=3D"https://mail.storage.infomaniak.com/workspace/kmeet.png" alt sty=
le=3D"-ms-interpolation-mode:bicubic;clear:both;display:block;max-width:100=
%;outline:0;text-decoration:none;width:24px"></th></tr></tbody></table></th=
><th class=3D"small-11 large-11 columns last" style=3D"-moz-hyphens:auto;-w=
ebkit-hyphens:auto;Margin:0 auto;border-collapse:collapse!important;color:#=
0a0a0a;font-family:Roboto,sans-serif;font-size:16px;font-weight:400;hyphens=
:auto;line-height:1.3;margin:0 auto;padding-bottom:16px;padding-left:8px;pa=
dding-right:0!important;padding-top:0;text-align:left;vertical-align:top;wi=
dth:91.666666%;word-wrap:break-word"><table style=3D"border-collapse:collap=
se;border-spacing:0;padding-bottom:0;padding-left:0;padding-right:0;padding=
-top:0;text-align:left;vertical-align:top;width:100%"><tbody><tr style=3D"p=
adding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:lef=
t;vertical-align:top"><th style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;M=
argin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Roboto=
",sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;mar="
gin:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-al=
ign:left;vertical-align:top;word-wrap:break-word"><div><p style=3D"Margin:0=
;Margin-bottom:10px;color:#0a0a0a;font-family:Roboto,sans-serif;font-size:1=
"6px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;padding-bot="
tom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left">kMeet m=
eeting room</p><a class=3D"seeOnPlan" href=3D"https://kmeet.infomaniak.com/=
wgyz-vyes-mypy-jkmz" target=3D"_blank" style=3D"color:#2199e8;font-family:R=
oboto,sans-serif;font-weight:400;line-height:1.3;margin-top:5px;padding:0;t=
ext-align:left;text-decoration:none">https://kmeet.infomaniak.com/wgyz-vyes=
-mypy-jkmz</a><p class=3D"kmeetAppText" style=3D"Margin:0;Margin-bottom:10p=
x;color:#888;font-family:Roboto,sans-serif;font-size:14px;font-weight:400;l=
"etter-spacing:0;line-height:16px;margin:0;margin-bottom:10px;padding-bottom="
:0;padding-left:0;padding-right:0;padding-top:0;text-align:left">You can al=
so download the Meet application at <a href=3D"https://www.infomaniak.com/e=
n/kmeet" target=3D"_blank" style=3D"color:#2199e8;font-family:Roboto,sans-s=
erif;font-weight:400;line-height:1.3;padding:0;text-align:left;text-decorat=
ion:none">this link</a></p></div></th></tr></tbody></table></th></tr></tbod=
y></table> </th></tr></tbody></table></th></tr></tbody></table></td></tr></=
tbody></table><table align=3D"center" class=3D"wrapper footer float-center"=
 style=3D"Margin:0 auto;border-collapse:collapse;border-spacing:0;float:non=
e;margin:0 auto;padding-bottom:0;padding-left:0;padding-right:0;padding-top=
:0;text-align:center;vertical-align:top;width:100%"><tbody><tr style=3D"pad=
ding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;=
vertical-align:top"><td class=3D"wrapper-inner" style=3D"-moz-hyphens:auto;=
-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0=
"a0a;font-family:Roboto,sans-serif;font-size:16px;font-weight:400;hyphens:au="
to;line-height:1.3;margin:0;padding-bottom:0;padding-left:0;padding-right:0=
;padding-top:0;text-align:left;vertical-align:top;word-wrap:break-word"><ta=
ble class=3D"row collapse" style=3D"border-collapse:collapse;border-spacing=
:0;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;=
position:relative;text-align:left;vertical-align:top;width:100%"><tbody><tr=
 style=3D"padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;tex=
t-align:left;vertical-align:top"><th class=3D"small-12 large-12 columns fir=
"st" last" style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0 auto;bord=
er-collapse:collapse!important;color:#0a0a0a;font-family:Roboto,sans-serif;=
font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0 auto;p=
adding-bottom:16px;padding-left:0;padding-right:0;padding-top:0;text-align:=
left;vertical-align:top;width:668px;word-wrap:break-word"><table style=3D"b=
order-collapse:collapse;border-spacing:0;padding-bottom:0;padding-left:0;pa=
dding-right:0;padding-top:0;text-align:left;vertical-align:top;width:100%">=
<tbody><tr style=3D"padding-bottom:0;padding-left:0;padding-right:0;padding=
-top:0;text-align:left;vertical-align:top"><th style=3D"-moz-hyphens:auto;-=
webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a=
"0a;font-family:Roboto,sans-serif;font-size:16px;font-weight:400;hyphens:aut="
o;line-height:1.3;margin:0;padding-bottom:0;padding-left:0;padding-right:0;=
padding-top:0;text-align:left;vertical-align:top;word-wrap:break-word"><tab=
le class=3D"spacer" style=3D"border-collapse:collapse;border-spacing:0;padd=
ing-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;v=
ertical-align:top;width:100%"><tbody><tr style=3D"padding-bottom:0;padding-=
left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top"><t=
d height=3D"12" style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;bo=
rder-collapse:collapse!important;color:#0a0a0a;font-family:Roboto,sans-seri=
f;font-size:12px;font-weight:400;hyphens:auto;line-height:12px;margin:0;mso=
-line-height-rule:exactly;padding-bottom:0;padding-left:0;padding-right:0;p=
adding-top:0;text-align:left;vertical-align:top;word-wrap:break-word">&nbsp=
;</td></tr></tbody></table><center style=3D"min-width:612px;width:100%"><ta=
ble align=3D"center" class=3D"menu align float-center" style=3D"Margin:0 au=
to;border-collapse:collapse;border-spacing:0;float:none;margin:0 auto;paddi=
ng-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:center;=
vertical-align:top;width:auto"><tbody><tr style=3D"padding-bottom:0;padding=
-left:0;padding-right:0;padding-top:0;text-align:center;vertical-align:top"=
><td style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collap=
se:collapse!important;color:#0a0a0a;font-family:Roboto,sans-serif;font-size=
":16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0;padding-bottom:="
0;padding-left:0;padding-right:0;padding-top:0;text-align:left;vertical-ali=
gn:top;word-wrap:break-word"><table style=3D"border-collapse:collapse;borde=
r-spacing:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;t=
ext-align:left;vertical-align:top;width:100%"><tbody><tr style=3D"padding-b=
ottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:center;vert=
ical-align:top"><th class=3D"menu-item float-center" style=3D"-moz-hyphens:=
auto;-webkit-hyphens:auto;Margin:0 auto;border-collapse:collapse!important;=
color:#0a0a0a;float:none;font-family:Roboto,sans-serif;font-size:16px;font-=
weight:400;hyphens:auto;line-height:1.3;margin:0 auto;padding:10px;padding-=
bottom:0;padding-left:0;padding-right:10px;padding-top:0;text-align:center;=
vertical-align:top;word-wrap:break-word"><a  style=3D"color:#2199e8;font-fa=
mily:Roboto,sans-serif;font-weight:400;line-height:1.3;padding:0;text-align=
:left;text-decoration:none"><a href=3D"https://www.infomaniak.com/goto/en/s=
upport.contact" style=3D"color:#2199e8;font-family:Roboto,sans-serif;font-w=
eight:400;line-height:1.3;padding:0;text-align:left;text-decoration:none"><=
p class=3D"footer__fac" style=3D"Margin:0;Margin-bottom:10px;color:#666;fon=
t-family:Roboto,sans-serif;font-size:14px;font-weight:400;line-height:1.3;m=
argin:0;margin-bottom:10px;padding-bottom:0;padding-left:0;padding-right:0;=
padding-top:0;text-align:center">Support</p></a></a></th><th class=3D"menu-=
item float-center" style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0=
 auto;border-collapse:collapse!important;color:#0a0a0a;float:none;font-fami=
ly:Roboto,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-heigh=
t:1.3;margin:0 auto;padding:10px;padding-bottom:0;padding-left:0;padding-ri=
ght:10px;padding-top:0;text-align:center;vertical-align:top;word-wrap:break=
-word"><a  style=3D"color:#2199e8;font-family:Roboto,sans-serif;font-weight=
:400;line-height:1.3;padding:0;text-align:left;text-decoration:none"><a hre=
f=3D"https://www.infomaniak.com/goto/en/support.faq.admin2" style=3D"color:=
#2199e8;font-family:Roboto,sans-serif;font-weight:400;line-height:1.3;paddi=
ng:0;text-align:left;text-decoration:none"><p class=3D"footer__fac" style=
=3D"Margin:0;Margin-bottom:10px;color:#666;font-family:Roboto,sans-serif;fo=
nt-size:14px;font-weight:400;line-height:1.3;margin:0;margin-bottom:10px;pa=
"dding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:cent="
er">Guides</p></a></a></th><th class=3D"menu-item float-center" style=3D"-m=
oz-hyphens:auto;-webkit-hyphens:auto;Margin:0 auto;border-collapse:collapse=
!important;color:#0a0a0a;float:none;font-family:Roboto,sans-serif;font-size=
:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0 auto;padding:10=
px;padding-bottom:0;padding-left:0;padding-right:10px;padding-top:0;text-al=
ign:center;vertical-align:top;word-wrap:break-word"><a  style=3D"color:#219=
9e8;font-family:Roboto,sans-serif;font-weight:400;line-height:1.3;padding:0=
;text-align:left;text-decoration:none"><a href=3D"https://news.infomaniak.c=
om/" style=3D"color:#2199e8;font-family:Roboto,sans-serif;font-weight:400;l=
ine-height:1.3;padding:0;text-align:left;text-decoration:none"><p class=3D"=
footer__fac" style=3D"Margin:0;Margin-bottom:10px;color:#666;font-family:Ro=
boto,sans-serif;font-size:14px;font-weight:400;line-height:1.3;margin:0;mar=
gin-bottom:10px;padding-bottom:0;padding-left:0;padding-right:0;padding-top=
:0;text-align:center">Latest news</p></a></a></th></tr></tbody></table></td=
></tr></tbody></table></center><p class=3D"text-center footer__certificate"=
 style=3D"Margin:0;Margin-bottom:10px;color:#777;font-family:Roboto,sans-se=
rif;font-size:11px;font-weight:400;line-height:1.3;margin:0;margin-bottom:1=
0px;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-alig=
n:center">An ISO 27001, ISO 50001 and ISO 14001 certified company</p><cente=
r style=3D"min-width:612px;width:100%"><table align=3D"center" class=3D"men=
u align float-center" style=3D"Margin:0 auto;border-collapse:collapse;borde=
r-spacing:0;float:none;margin:0 auto;padding-bottom:0;padding-left:0;paddin=
g-right:0;padding-top:0;text-align:center;vertical-align:top;width:auto"><t=
body><tr style=3D"padding-bottom:0;padding-left:0;padding-right:0;padding-t=
op:0;text-align:center;vertical-align:top"><td style=3D"-moz-hyphens:auto;-=
webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a=
"0a;font-family:Roboto,sans-serif;font-size:16px;font-weight:400;hyphens:aut="
o;line-height:1.3;margin:0;padding-bottom:0;padding-left:0;padding-right:0;=
padding-top:0;text-align:left;vertical-align:top;word-wrap:break-word"><tab=
le style=3D"border-collapse:collapse;border-spacing:0;padding-bottom:0;padd=
ing-left:0;padding-right:0;padding-top:0;text-align:left;vertical-align:top=
;width:100%"><tbody><tr style=3D"padding-bottom:0;padding-left:0;padding-ri=
ght:0;padding-top:0;text-align:center;vertical-align:top"><th class=3D"menu=
-item float-center" style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:=
0 auto;border-collapse:collapse!important;color:#0a0a0a;float:none;font-fam=
ily:Roboto,sans-serif;font-size:16px;font-weight:400;hyphens:auto;line-heig=
ht:1.3;margin:0 auto;padding:10px;padding-bottom:0;padding-left:0;padding-r=
ight:10px;padding-top:0;text-align:center;vertical-align:top;word-wrap:brea=
k-word"><a  style=3D"color:#2199e8;font-family:Roboto,sans-serif;font-weigh=
t:400;line-height:1.3;padding:0;text-align:left;text-decoration:none"><a hr=
ef=3D"https://www.facebook.com/infomaniaknetwork" style=3D"color:#2199e8;fo=
nt-family:Roboto,sans-serif;font-weight:400;line-height:1.3;padding:0;text-=
align:left;text-decoration:none"><img src=3D"https://mail.storage.infomania=
k.com/workspace/facebook-social.png" alt style=3D"-ms-interpolation-mode:bi=
cubic;border:none;clear:both;display:block;max-width:100%;outline:0;text-de=
coration:none;width:auto"></a></a></th><th class=3D"menu-item float-center"=
 style=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0 auto;border-colla=
pse:collapse!important;color:#0a0a0a;float:none;font-family:Roboto,sans-ser=
if;font-size:16px;font-weight:400;hyphens:auto;line-height:1.3;margin:0 aut=
o;padding:10px;padding-bottom:0;padding-left:0;padding-right:10px;padding-t=
op:0;text-align:center;vertical-align:top;word-wrap:break-word"><a  style=
=3D"color:#2199e8;font-family:Roboto,sans-serif;font-weight:400;line-height=
:1.3;padding:0;text-align:left;text-decoration:none"><a href=3D"https://twi=
tter.com/infomaniak" style=3D"color:#2199e8;font-family:Roboto,sans-serif;f=
ont-weight:400;line-height:1.3;padding:0;text-align:left;text-decoration:no=
ne"><img src=3D"https://mail.storage.infomaniak.com/workspace/twitter-socia=
l.png" alt style=3D"-ms-interpolation-mode:bicubic;border:none;clear:both;d=
isplay:block;max-width:100%;outline:0;text-decoration:none;width:auto"></a>=
</a></th><th class=3D"menu-item float-center" style=3D"-moz-hyphens:auto;-w=
ebkit-hyphens:auto;Margin:0 auto;border-collapse:collapse!important;color:#=
0a0a0a;float:none;font-family:Roboto,sans-serif;font-size:16px;font-weight:=
400;hyphens:auto;line-height:1.3;margin:0 auto;padding:10px;padding-bottom:=
0;padding-left:0;padding-right:10px;padding-top:0;text-align:center;vertica=
l-align:top;word-wrap:break-word"><a  style=3D"color:#2199e8;font-family:Ro=
boto,sans-serif;font-weight:400;line-height:1.3;padding:0;text-align:left;t=
ext-decoration:none"><a href=3D"https://www.youtube.com/channel/UC4Dt4z4qyW=
nKR7uVrHkn4YA" style=3D"color:#2199e8;font-family:Roboto,sans-serif;font-we=
ight:400;line-height:1.3;padding:0;text-align:left;text-decoration:none"><i=
mg src=3D"https://mail.storage.infomaniak.com/workspace/youtube-social.png"=
 alt style=3D"-ms-interpolation-mode:bicubic;border:none;clear:both;display=
:block;max-width:100%;outline:0;text-decoration:none;width:auto"></a></a></=
th><th class=3D"menu-item float-center" style=3D"-moz-hyphens:auto;-webkit-=
hyphens:auto;Margin:0 auto;border-collapse:collapse!important;color:#0a0a0a=
;float:none;font-family:Roboto,sans-serif;font-size:16px;font-weight:400;hy=
phens:auto;line-height:1.3;margin:0 auto;padding:10px;padding-bottom:0;padd=
ing-left:0;padding-right:10px;padding-top:0;text-align:center;vertical-alig=
n:top;word-wrap:break-word"><a  style=3D"color:#2199e8;font-family:Roboto,s=
ans-serif;font-weight:400;line-height:1.3;padding:0;text-align:left;text-de=
coration:none"><a href=3D"https://www.instagram.com/infomaniak_network/" st=
yle=3D"color:#2199e8;font-family:Roboto,sans-serif;font-weight:400;line-hei=
ght:1.3;padding:0;text-align:left;text-decoration:none"><img src=3D"https:/=
/mail.storage.infomaniak.com/workspace/instagram-social.png" alt style=3D"-=
ms-interpolation-mode:bicubic;border:none;clear:both;display:block;max-widt=
h:100%;outline:0;text-decoration:none;width:auto"></a></a></th></tr></tbody=
></table></td></tr></tbody></table></center></th><th class=3D"expander" sty=
le=3D"-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:colla=
pse!important;color:#0a0a0a;font-family:Roboto,sans-serif;font-size:16px;fo=
"nt-weight:400;hyphens:auto;line-height:1.3;margin:0;padding:0!important;pad="
ding-bottom:0;padding-left:0;padding-right:0;padding-top:0;text-align:left;=
vertical-align:top;visibility:hidden;width:0;word-wrap:break-word"></th></t=
r></tbody></table></th></tr></tbody></table></td></tr></tbody></table></cen=
ter></td></tr></table><!-- prevent Gmail on iOS font size manipulation --><=
div style=3D"display:none;white-space:nowrap;font:15px courier;line-height:=
0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &n=
bsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; =
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></body>=
</html>

--_=_swift_1689871058_10197a541b3d8fc893ef779889a086bc_=_--


--_=_swift_1689871058_3dedf47dfaf9e24ab8cabce475fa3c56_=_
Content-Type: application/ics; charset="UTF-8"; name=invite.ics
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=invite.ics

QkVHSU46VkNBTEVOREFSDQpWRVJTSU9OOjIuMA0KUFJPRElEOi0vL1NhYnJlLy9TYWJyZSBWT2Jq
ZWN0IDQuNS4zLy9FTg0KQ0FMU0NBTEU6R1JFR09SSUFODQpNRVRIT0Q6UkVRVUVTVA0KQkVHSU46
VlRJTUVaT05FDQpUWklEOkV1cm9wZS9adXJpY2gNClgtTElDLUxPQ0FUSU9OOkV1cm9wZS9adXJp
Y2gNCkJFR0lOOlNUQU5EQVJEDQpUWk9GRlNFVEZST006KzAyMDANClRaT0ZGU0VUVE86KzAxMDAN
ClRaTkFNRTpDRVQNCkRUU1RBUlQ6MjAyMzEwMjlUMDEwMDAwDQpFTkQ6U1RBTkRBUkQNCkJFR0lO
OkRBWUxJR0hUDQpUWk9GRlNFVEZST006KzAxMDANClRaT0ZGU0VUVE86KzAyMDANClRaTkFNRTpD
RVNUDQpEVFNUQVJUOjIwMjMwMzI2VDAxMDAwMA0KRU5EOkRBWUxJR0hUDQpFTkQ6VlRJTUVaT05F
DQpCRUdJTjpWRVZFTlQNClNVTU1BUlk6U3BsaXQgTWFuYWdlciBIb3N0aW5nDQpERVNDUklQVElP
TjpcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbk1lcmNp
IGRlIG5lIHANCiBhcyBtb2RpZmllciBjZXR0ZSBwYXJ0aWUuXG5cblZvdXMgcG91dmV6IHJlam9p
bmRyZSBsYSBzYWxsZSBkZSBjb25mw6lyZW5jZQ0KICBrTWVldCDDoCBsJ2FkcmVzc2Ugc3VpdmFu
dGU6IGh0dHBzOi8va21lZXQuaW5mb21hbmlhay5jb20vd2d5ei12eWVzLW15cHktDQogamttelxu
XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuDQpUUkFOU1A6
T1BBUVVFDQpTRVFVRU5DRToxDQpEVFNUQVJUO1RaSUQ9RXVyb3BlL1p1cmljaDoyMDIzMDcyNVQw
OTAwMDANCkRURU5EO1RaSUQ9RXVyb3BlL1p1cmljaDoyMDIzMDcyNVQxMDAwMDANCk9SR0FOSVpF
UjtDTj1KdWxpZW4gVmlhcmQ7RU1BSUw9anVsaWVuLnZpYXJkQGluZm9tYW5pYWsuY29tOm1haWx0
bzpqdWxpZW4udg0KIGlhcmRAaW5mb21hbmlhay5jb20NCkFUVEVOREVFO0NVVFlQRT1JTkRJVklE
VUFMO1BBUlRTVEFUPUFDQ0VQVEVEO1JPTEU9Q0hBSVI7Q049SnVsaWVuIFZpYXJkOm1haQ0KIGx0
bzpqdWxpZW4udmlhcmRAaW5mb21hbmlhay5jb20NCkFUVEVOREVFO0NVVFlQRT1JTkRJVklEVUFM
O1BBUlRTVEFUPU5FRURTLUFDVElPTjtST0xFPVJFUS1QQVJUSUNJUEFOVDtDTj1GbA0KIG9yaWFu
IEdyZW5pZXI7UlNWUD1UUlVFOm1haWx0bzpmbG9yaWFuLmdyZW5pZXJAaW5mb21hbmlhay5jb20N
CkFUVEVOREVFO0NVVFlQRT1JTkRJVklEVUFMO1BBUlRTVEFUPU5FRURTLUFDVElPTjtST0xFPVJF
US1QQVJUSUNJUEFOVDtDTj1UaA0KIGliYXV0IFRhZWxtYW47UlNWUD1UUlVFOm1haWx0bzp0aGli
YXV0LnRhZWxtYW5AaW5mb21hbmlhay5jb20NCkFUVEVOREVFO0NVVFlQRT1JTkRJVklEVUFMO1BB
UlRTVEFUPU5FRURTLUFDVElPTjtST0xFPVJFUS1QQVJUSUNJUEFOVDtDTj1WYQ0KIGxlbnRpbiBS
aWNoYXJkO1JTVlA9VFJVRTptYWlsdG86dmFsZW50aW4ucmljaGFyZEBpbmZvbWFuaWFrLmNvbQ0K
QVRURU5ERUU7Q1VUWVBFPUlORElWSURVQUw7UEFSVFNUQVQ9TkVFRFMtQUNUSU9OO1JPTEU9UkVR
LVBBUlRJQ0lQQU5UO0NOPU1hDQogdGhpZXUgVGFwcG9sZXQ7UlNWUD1UUlVFOm1haWx0bzptYXRo
aWV1LnRhcHBvbGV0QGluZm9tYW5pYWsuY29tDQpBVFRFTkRFRTtDVVRZUEU9SU5ESVZJRFVBTDtQ
QVJUU1RBVD1ORUVEUy1BQ1RJT047Uk9MRT1SRVEtUEFSVElDSVBBTlQ7Q049TWENCiB0dGhpZXUg
TWFiaWxsYXJkO1JTVlA9VFJVRTptYWlsdG86bWF0dGhpZXUubWFiaWxsYXJkQGluZm9tYW5pYWsu
Y29tDQpYLUlORk9NQU5JQUstTUVFVC1ST09NLVVSTDpodHRwczovL2ttZWV0LmluZm9tYW5pYWsu
Y29tL3dneXotdnllcy1teXB5LWprbXoNClVJRDo2YzRkMTk4ZS1iOTljLTRiNDMtYTE3Mi0xNzBm
ZDFiMzY3YjINCkRUU1RBTVA6MjAyMzA3MjBUMTYzNzM3Wg0KRU5EOlZFVkVOVA0KRU5EOlZDQUxF
TkRBUg0K

--_=_swift_1689871058_3dedf47dfaf9e24ab8cabce475fa3c56_=_
Content-Type: text/calendar; charset="UTF-8"; method=REQUEST
Content-Transfer-Encoding: base64

QkVHSU46VkNBTEVOREFSDQpWRVJTSU9OOjIuMA0KUFJPRElEOi0vL1NhYnJlLy9TYWJyZSBWT2Jq
ZWN0IDQuNS4zLy9FTg0KQ0FMU0NBTEU6R1JFR09SSUFODQpNRVRIT0Q6UkVRVUVTVA0KQkVHSU46
VlRJTUVaT05FDQpUWklEOkV1cm9wZS9adXJpY2gNClgtTElDLUxPQ0FUSU9OOkV1cm9wZS9adXJp
Y2gNCkJFR0lOOlNUQU5EQVJEDQpUWk9GRlNFVEZST006KzAyMDANClRaT0ZGU0VUVE86KzAxMDAN
ClRaTkFNRTpDRVQNCkRUU1RBUlQ6MjAyMzEwMjlUMDEwMDAwDQpFTkQ6U1RBTkRBUkQNCkJFR0lO
OkRBWUxJR0hUDQpUWk9GRlNFVEZST006KzAxMDANClRaT0ZGU0VUVE86KzAyMDANClRaTkFNRTpD
RVNUDQpEVFNUQVJUOjIwMjMwMzI2VDAxMDAwMA0KRU5EOkRBWUxJR0hUDQpFTkQ6VlRJTUVaT05F
DQpCRUdJTjpWRVZFTlQNClNVTU1BUlk6U3BsaXQgTWFuYWdlciBIb3N0aW5nDQpERVNDUklQVElP
TjpcblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbk1lcmNp
IGRlIG5lIHANCiBhcyBtb2RpZmllciBjZXR0ZSBwYXJ0aWUuXG5cblZvdXMgcG91dmV6IHJlam9p
bmRyZSBsYSBzYWxsZSBkZSBjb25mw6lyZW5jZQ0KICBrTWVldCDDoCBsJ2FkcmVzc2Ugc3VpdmFu
dGU6IGh0dHBzOi8va21lZXQuaW5mb21hbmlhay5jb20vd2d5ei12eWVzLW15cHktDQogamttelxu
XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuDQpUUkFOU1A6
T1BBUVVFDQpTRVFVRU5DRToxDQpEVFNUQVJUO1RaSUQ9RXVyb3BlL1p1cmljaDoyMDIzMDcyNVQw
OTAwMDANCkRURU5EO1RaSUQ9RXVyb3BlL1p1cmljaDoyMDIzMDcyNVQxMDAwMDANCk9SR0FOSVpF
UjtDTj1KdWxpZW4gVmlhcmQ7RU1BSUw9anVsaWVuLnZpYXJkQGluZm9tYW5pYWsuY29tOm1haWx0
bzpqdWxpZW4udg0KIGlhcmRAaW5mb21hbmlhay5jb20NCkFUVEVOREVFO0NVVFlQRT1JTkRJVklE
VUFMO1BBUlRTVEFUPUFDQ0VQVEVEO1JPTEU9Q0hBSVI7Q049SnVsaWVuIFZpYXJkOm1haQ0KIGx0
bzpqdWxpZW4udmlhcmRAaW5mb21hbmlhay5jb20NCkFUVEVOREVFO0NVVFlQRT1JTkRJVklEVUFM
O1BBUlRTVEFUPU5FRURTLUFDVElPTjtST0xFPVJFUS1QQVJUSUNJUEFOVDtDTj1GbA0KIG9yaWFu
IEdyZW5pZXI7UlNWUD1UUlVFOm1haWx0bzpmbG9yaWFuLmdyZW5pZXJAaW5mb21hbmlhay5jb20N
CkFUVEVOREVFO0NVVFlQRT1JTkRJVklEVUFMO1BBUlRTVEFUPU5FRURTLUFDVElPTjtST0xFPVJF
US1QQVJUSUNJUEFOVDtDTj1UaA0KIGliYXV0IFRhZWxtYW47UlNWUD1UUlVFOm1haWx0bzp0aGli
YXV0LnRhZWxtYW5AaW5mb21hbmlhay5jb20NCkFUVEVOREVFO0NVVFlQRT1JTkRJVklEVUFMO1BB
UlRTVEFUPU5FRURTLUFDVElPTjtST0xFPVJFUS1QQVJUSUNJUEFOVDtDTj1WYQ0KIGxlbnRpbiBS
aWNoYXJkO1JTVlA9VFJVRTptYWlsdG86dmFsZW50aW4ucmljaGFyZEBpbmZvbWFuaWFrLmNvbQ0K
QVRURU5ERUU7Q1VUWVBFPUlORElWSURVQUw7UEFSVFNUQVQ9TkVFRFMtQUNUSU9OO1JPTEU9UkVR
LVBBUlRJQ0lQQU5UO0NOPU1hDQogdGhpZXUgVGFwcG9sZXQ7UlNWUD1UUlVFOm1haWx0bzptYXRo
aWV1LnRhcHBvbGV0QGluZm9tYW5pYWsuY29tDQpBVFRFTkRFRTtDVVRZUEU9SU5ESVZJRFVBTDtQ
QVJUU1RBVD1ORUVEUy1BQ1RJT047Uk9MRT1SRVEtUEFSVElDSVBBTlQ7Q049TWENCiB0dGhpZXUg
TWFiaWxsYXJkO1JTVlA9VFJVRTptYWlsdG86bWF0dGhpZXUubWFiaWxsYXJkQGluZm9tYW5pYWsu
Y29tDQpYLUlORk9NQU5JQUstTUVFVC1ST09NLVVSTDpodHRwczovL2ttZWV0LmluZm9tYW5pYWsu
Y29tL3dneXotdnllcy1teXB5LWprbXoNClVJRDo2YzRkMTk4ZS1iOTljLTRiNDMtYTE3Mi0xNzBm
ZDFiMzY3YjINCkRUU1RBTVA6MjAyMzA3MjBUMTYzNzM3Wg0KRU5EOlZFVkVOVA0KRU5EOlZDQUxF
TkRBUg0K

--_=_swift_1689871058_3dedf47dfaf9e24ab8cabce475fa3c56_=_--
`);

function replaceNewLine(
  input: string,
): string {
 return input.replace(/\n/g, CRLF);
}
