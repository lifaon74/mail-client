import { MimeTypeClass } from '../classes/mime-type/mime-type.class';
import { MimeTypeParameters } from '../classes/mime-type/mime-type-parameters.class';

export function mimeTypeDebug(): void {
  // const data = new MimeTypeParameter(
  //   MimeTypeParameterKey.parse('abc'),
  //   new MimeTypeParameterValue.parse('def'),
  // );

  // application/vnd.api+json
  // console.log(new MimeTypeParameterKey('def').value);
  //
  // console.log(new MimeTypeParameterValue('def').quoted);
  // console.log(new MimeTypeParameterValue('"def"').quoted);
  // console.log(new MimeTypeParameterValue('"de\\"f"').quoted);
  // console.log(new MimeTypeParameterValue('"de\\\\f"').quoted);
  // console.log(new MimeTypeParameterValue('de"f').quoted);
  // console.log(new MimeTypeParameterValue('"de"f"').quoted);
  // console.log(new MimeTypeParameterValue('"de\\\\"f"').quoted);

  // console.log(MimeTypeParameter.parse('abc="def"').toString());
  // console.log(MimeTypeParameter.parse('abc="a\\"h"').toString());

  // console.log(new MimeTypeParameters('name="test.bin"').toString());
  // console.log(new MimeTypeParameters('name="test\\".bin"; abc="def"; bob ').toString());
  // console.log(new MimeTypeParameters('abc="def"; ghi').toString());

  // console.log(new MimeTypeClass('application/octet-stream; name="test.bin"'));
  console.log(new MimeTypeClass('application/vnd.api+json'));

  // console.log(MIME_TYPE_TEXT_PLAIN_UTF8_CONSTANT.toString());

  // const data: IMimeType = createMimeTypeFromParts(
  //   'multipart',
  //   'mixed',
  //   createMimeTypeParametersFromMimeTypeParameters([
  //     generateMimeTypeParameterBoundary(),
  //   ]),
  // );

  // console.log(data.toString());

  // const data = MimeTypeMultipartAlternative.generate();
  // const data = new MimeTypeClass(`application/octet-stream; name="test.bin"`);
  // const data = new MimeTypeParameters(`name="test.bin"`);
  // const data = new MimeTypeParameters(`name="test\\".bin"; abc="def"; bob `);
  // const data = new MimeTypeParameters(`abc="def"`);
  // const data = new MimeTypeParameters(`abc="def"; ghi`);
  // const data = new MimeTypeParameters(`abc="def" ;`);
  // const data = new MimeTypeParameters(`abc="def`);
  // const data = new MimeTypeParameters(`abc="def"; a=`);
  // const data = new MimeTypeParameters(`name="test\\\\".bin"`);
  // const data = new MimeTypeParameters(`name="test\\".bin"`);

  // console.log(data);
  // console.log(data.toString());
}
