import { IEmailHeaderContentTypeKeyName, EMAIL_HEADER_CONTENT_TYPE_KEY } from './email-header-content-type-key.contant';
import { EmailHeaderWithReadonlyKey, IEmailHeaderValueLike } from '../../email-header.class';
import { MimeTypeClass } from '../../../../../mime-type/mime-type.class';

/** TYPES **/

export type IEmailHeaderContentTypeLike =
  | MimeTypeClass
  | IEmailHeaderValueLike
  ;

/** CLASS **/

export class EmailHeaderContentType extends EmailHeaderWithReadonlyKey<IEmailHeaderContentTypeKeyName> {
  constructor(
    input: IEmailHeaderContentTypeLike,
  ) {
    super(
      EMAIL_HEADER_CONTENT_TYPE_KEY,
      (input instanceof MimeTypeClass)
        ? input.toString()
        : input,
    );
  }

  get mimeType(): MimeTypeClass {
    return MimeTypeClass.parse(this.value.toString());
  }

  set mimeType(
    mimeType: MimeTypeClass,
  ) {
    this.value = mimeType.toString();
  }
}
