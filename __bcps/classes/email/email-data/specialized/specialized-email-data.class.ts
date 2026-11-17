import { EmailData } from '../email-data.class';

/** TYPE **/

export interface IEmailDataSpecializer<GSpecializedEmailData extends EmailData> {
  (
    emailData: EmailData,
  ): GSpecializedEmailData | null;
}

/** CONSTANTS **/

export const DEFAULT_EMAIl_DATA_SPECIALIZERS = [

];

/** CLASS **/

export class SpecializedEmailData {
  static parse<GSpecializedEmailData extends EmailData>(
    input: string,
    specializers: Iterable<IEmailDataSpecializer<GSpecializedEmailData>>,
  ): EmailData {
    return this.specialize(
      EmailData.parse(input),
      specializers,
    );
  }

  static specialize<GSpecializedEmailData extends EmailData>(
    emailData: EmailData,
    specializers: Iterable<IEmailDataSpecializer<GSpecializedEmailData>>,
  ): GSpecializedEmailData {
    const iterator: Iterator<IEmailDataSpecializer<GSpecializedEmailData>> = specializers[Symbol.iterator]();
    let result: IteratorResult<IEmailDataSpecializer<GSpecializedEmailData>>;
    while (!(result = iterator.next()).done) {
      const specializedEmailData: GSpecializedEmailData | null = result.value(emailData);
      if (specializedEmailData !== null) {
        return specializedEmailData;
      }
    }

    return emailData as GSpecializedEmailData;
  }
}


