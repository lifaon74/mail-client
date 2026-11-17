import { IMFHeaders } from '../email-headers/email-headers.class';

export abstract class EmailBody {
  abstract toString(
    headers: IMFHeaders,
  ): string;
}
