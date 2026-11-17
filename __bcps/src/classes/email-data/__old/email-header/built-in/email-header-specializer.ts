import { EmailHeaderDate } from './date/email-header-date.class';
import { EMAIL_HEADER_DATE_KEY_NAME } from './date/email-header-date-key.contant';
import {
  InferEmailHeaderGKey,
  EmailHeader,
  IGenericEmailHeader,
  EmailHeaderWithReadonlyKey,
  IEmailHeaderValueLike,
} from '../email-header.class';
import { EmailHeaderList, IGenericEmailHeaders } from '../email-header-list.class';
import { EMAIL_HEADER_CONTENT_TYPE_KEY_NAME } from './content-type/email-header-content-type-key.contant';
import { EmailHeaderContentType } from './content-type/email-header-content-type.class';

export type ISpecializedEmailHeaders =
  | EmailHeaderContentType
  | EmailHeaderDate
  ;

export type ISpecializedEmailHeaderKeys =
  InferEmailHeaderGKey<ISpecializedEmailHeaders>
  ;

export type ICreateSpecializedEmailHeaderReturn<GKey extends ISpecializedEmailHeaderKeys> =
  Extract<ISpecializedEmailHeaders, EmailHeaderWithReadonlyKey<GKey>>
  ;

export class EmailHeaderSpecializer {
  static specializeHeader<GKey extends ISpecializedEmailHeaderKeys>(
    header: EmailHeader,
    key?: GKey,
  ): ICreateSpecializedEmailHeaderReturn<GKey> {
    return this.createSpecializedHeader<GKey>(
      header.key as GKey,
      header.value,
    );
  }

  static createSpecializedHeader<GKey extends ISpecializedEmailHeaderKeys>(
    key: GKey,
    value: IEmailHeaderValueLike,
  ): ICreateSpecializedEmailHeaderReturn<GKey> {
    /*if (key === HEADER_BCC_KEY_NAME) {
      return createEmailHeaderBccFromValueString(value);
    } else if (key === HEADER_CC_KEY_NAME) {
      return createEmailHeaderCcFromValueString(value);
    } else if (key === HEADER_CONTENT_TRANSFER_ENCODING_KEY_NAME) {
      return createEmailHeaderContentTransferEncodingFromValueString(value);
    } else */if (key === EMAIL_HEADER_CONTENT_TYPE_KEY_NAME) {
      return new EmailHeaderContentType(value) as any;
    } else if (key === EMAIL_HEADER_DATE_KEY_NAME) {
      return new EmailHeaderDate(value) as any;
      // } else if (key === HEADER_FROM_KEY_NAME) {
      //   return createEmailHeaderFromFromValueString(value);
      // } else if (key === HEADER_IN_REPLY_TO_KEY_NAME) {
      //   return createEmailHeaderInReplyToFromValueString(value);
      // } else if (key === HEADER_MESSAGE_ID_KEY_NAME) {
      //   return createEmailHeaderMessageIdFromValueString(value);
      // } else if (key === HEADER_MIME_VERSION_KEY_NAME) {
      //   return createEmailHeaderMimeVersionFromValueString(value);
      // } else if (key === HEADER_REFERENCES_KEY_NAME) {
      //   return createEmailHeaderReferencesFromValueString(value);
      // } else if (key === HEADER_REPLY_TO_KEY_NAME) {
      //   return createEmailHeaderReplyToFromValueString(value);
      // } else if (key === HEADER_SENDER_KEY_NAME) {
      //   return createEmailHeaderSenderFromValueString(value);
      // } else if (key === HEADER_SUBJECT_KEY_NAME) {
      //   return createEmailHeaderSubjectFromValueString(value);
      // } else if (key === HEADER_TO_KEY_NAME) {
      //   return createEmailHeaderToFromValueString(value);
    } else {
      throw new Error(`Cannot specialize: ${key}`);
    }
  }

  static specializeHeaders(
    headers: IGenericEmailHeaders,
  ): EmailHeaderList<ISpecializedEmailHeaders> {
    return new EmailHeaderList<ISpecializedEmailHeaders>(
      Array.from(headers.values(), (header: IGenericEmailHeader): ISpecializedEmailHeaders => {
        return this.specializeHeader<any>(header);
      }),
    );
  }
}
