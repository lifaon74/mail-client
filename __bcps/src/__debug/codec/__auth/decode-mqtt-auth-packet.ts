import { u8 } from '@lifaon/number-types';
import { PROTOCOL_VERSION } from '../../../constants/protocol-version.type';
import { AUTHENTICATE_REASON_CODE } from '../../../constants/reason-codes/authenticate-reason-code/authenticate-reason-code.enum';
import { getU8Length } from '../../../encoding/number/u8/get-u8-length';
import { decodeVariableByteInteger } from '../../../encoding/number/variable-byte-integer/decode-variable-byte-integer';
import { IVariableByteInteger } from '../../../encoding/number/variable-byte-integer/variable-byte-integer.type';
import { decodeMQTTPacketProperties } from '../../shared/properties/many/decode-mqtt-packet-properties';
import { getMQTTPacketPropertiesLengthTotal } from '../../shared/properties/many/get-mqtt-packet-properties-length';
import { verifyRemainingPacketLength } from '../../shared/verify-remaining-packet-length';
import { IMQTTAuthPacketPropertiesUnion } from './mqtt-auth-packet-properties.type';
import { IMQTTAuthPacket } from './mqtt-auth-packet.type';

export function* decodeMQTTAuthPacket(
  protocolVersion: PROTOCOL_VERSION,
): Generator<void, IMQTTAuthPacket, u8> {
  return yield* decodeMQTTAuthPacketKnowingFirstByte(yield, protocolVersion);
}

export function* decodeMQTTAuthPacketKnowingFirstByte(
  firstByte: u8,
  protocolVersion: PROTOCOL_VERSION,
): Generator<void, IMQTTAuthPacket, u8> {
  if (firstByte !== 0b11110000) {
    throw new Error(`Not an AUTH packet`);
  }

  let remainingPacketLength: IVariableByteInteger = yield* decodeVariableByteInteger();

  // reason code
  const reasonCode: AUTHENTICATE_REASON_CODE = yield;
  remainingPacketLength -= getU8Length();

  // V5: properties
  const properties: IMQTTAuthPacketPropertiesUnion[] = (protocolVersion === PROTOCOL_VERSION.VERSION_5)
    ? (yield* decodeMQTTPacketProperties<IMQTTAuthPacketPropertiesUnion>())
    : [];
  remainingPacketLength -= getMQTTPacketPropertiesLengthTotal(properties);

  verifyRemainingPacketLength(remainingPacketLength);

  return {
    reasonCode,
    properties,
  };
}

