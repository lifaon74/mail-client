import { EmailHeaderKeyWithReadonlyValue } from '../../email-header-key.class';

export const EMAIL_HEADER_DATE_KEY_NAME = 'Date';

export type IEmailHeaderDateKeyName = typeof EMAIL_HEADER_DATE_KEY_NAME;

export const EMAIL_HEADER_DATE_KEY = new EmailHeaderKeyWithReadonlyValue<IEmailHeaderDateKeyName>(EMAIL_HEADER_DATE_KEY_NAME);
