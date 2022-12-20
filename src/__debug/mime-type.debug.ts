import { createMimeTypeParameterListFromIterable } from '../classes/mime-type/components/mime-type-parameter-list/create-mime-type-parameter-list';
import { createSafeMimeType } from '../classes/mime-type/create-mime-type';
import { IMimeType } from '../classes/mime-type/mime-type.type';

export function mimeTypeDebug(): void {
  // const data = new MimeTypeParameter(
  //   MimeTypeParameterKey.fromString('abc'),
  //   MimeTypeParameterValue.fromString('def'),
  // );

  // console.log(createMimeTypeParameterKeyFromString('def').get());

  // console.log(createMimeTypeParameterValueFromString('def').getQuoted());
  // console.log(createMimeTypeParameterValueFromString('"def"').getQuoted());
  // console.log(createMimeTypeParameterValueFromString('"de\\"f"').getQuoted());
  // console.log(createMimeTypeParameterValueFromString('"de\\\\f"').getQuoted());
  // console.log(createMimeTypeParameterValueFromString('de"f').getQuoted());
  // console.log(createMimeTypeParameterValueFromString('"de"f"').getQuoted());
  // console.log(createMimeTypeParameterValueFromString('"de\\\\"f"').getQuoted());

  // console.log(createMimeTypeParameterFromString('abc="def"').toString());
  // console.log(createMimeTypeParameterFromString('abc="a\\"h"').toString());

  // console.log(createMimeTypeParameterListFromString('name="test.bin"').toString());
  // console.log(createMimeTypeParameterListFromString('name="test\\".bin"; abc="def"; bob ').toString());
  // console.log(createMimeTypeParameterListFromString('abc="def"; ghi').toString());

  // console.log(createMimeTypeFromString('application/octet-stream; name="test.bin"'));

  // console.log(MIME_TYPE_TEXT_PLAIN_UTF8_CONSTANT.toString());

  // const data: IMimeType = createMimeTypeFromParts(
  //   'multipart',
  //   'mixed',
  //   createMimeTypeParameterListFromMimeTypeParameters([
  //     generateMimeTypeParameterBoundary(),
  //   ]),
  // );

  // console.log(data.toString());

  // const data = MimeTypeMultipartAlternative.generate();
  // const data = MimeType.fromString(`application/octet-stream; name="test.bin"`);
  // const data = MimeTypeParameterList.fromString(`name="test.bin"`);
  // const data = MimeTypeParameterList.fromString(`name="test\\".bin"; abc="def"; bob `);
  // const data = MimeTypeParameterList.fromString(`abc="def"`);
  // const data = MimeTypeParameterList.fromString(`abc="def"; ghi`);
  // const data = MimeTypeParameterList.fromString(`abc="def" ;`);
  // const data = MimeTypeParameterList.fromString(`abc="def`);
  // const data = MimeTypeParameterList.fromString(`abc="def"; a=`);
  // const data = MimeTypeParameterList.fromString(`name="test\\\\".bin"`);
  // const data = MimeTypeParameterList.fromString(`name="test\\".bin"`);

  // console.log(data);
  // console.log(data.toString());
}
