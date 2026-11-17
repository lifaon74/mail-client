import { EmailHeaderKeyWithReadonlyValue } from '../../email-header-key.class';

export const EMAIL_HEADER_CONTENT_TYPE_KEY_NAME = 'Content-Type';

export type IEmailHeaderContentTypeKeyName = typeof EMAIL_HEADER_CONTENT_TYPE_KEY_NAME;

export const EMAIL_HEADER_CONTENT_TYPE_KEY = new EmailHeaderKeyWithReadonlyValue<IEmailHeaderContentTypeKeyName>(EMAIL_HEADER_CONTENT_TYPE_KEY_NAME);
