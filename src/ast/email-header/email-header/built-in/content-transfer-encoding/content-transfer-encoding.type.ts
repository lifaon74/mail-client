export type IClassicContentTransferEncoding =
  | '7bit'
  | '8bit'
  | 'binary'
  | 'quoted-printable'
  | 'base64'
  ;

export type IContentTransferEncoding =
  | IClassicContentTransferEncoding
  | string
  ;
