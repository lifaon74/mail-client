import { u8 } from '@lifaon/number-types';
import { PROTOCOL_VERSION } from '../../../constants/protocol-version.type';
import { getU8Length } from '../../../encoding/number/u8/get-u8-length';

import { encodeVariableByteInteger } from '../../../encoding/number/variable-byte-integer/encode-variable-byte-integer';
import { IVariableByteInteger } from '../../../encoding/number/variable-byte-integer/variable-byte-integer.type';
import { encodeMQTTPacketProperties } from '../../shared/properties/many/encode-mqtt-packet-properties';
import { getMQTTPacketPropertiesLengthTotal } from '../../shared/properties/many/get-mqtt-packet-properties-length';
import { IMQTTAuthPacket } from './mqtt-auth-packet.type';

export function* encodeMQTTAuthPacket(
  {
    reasonCode,
    properties,
  }: IMQTTAuthPacket,
  protocolVersion: PROTOCOL_VERSION,
): Generator<u8, void, void> {

  /* COMPUTE PACKET'S LENGTH */

  let packetLength: IVariableByteInteger = 0;

  packetLength += getU8Length(); // reason code

  // V5: properties
  if (protocolVersion === PROTOCOL_VERSION.VERSION_5) {
    packetLength += getMQTTPacketPropertiesLengthTotal(properties);
  }

  /* WRITE PACKET'S CONTENT */

  yield 0b11110000; // fixed header
  yield* encodeVariableByteInteger(packetLength); // length
  yield reasonCode; // reason code

  // V5: properties
  if (protocolVersion === PROTOCOL_VERSION.VERSION_5) {
    yield* encodeMQTTPacketProperties(properties);
  }
}

