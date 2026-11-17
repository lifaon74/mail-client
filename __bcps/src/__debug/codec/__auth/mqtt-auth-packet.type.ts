import { AUTHENTICATE_REASON_CODE } from '../../../constants/reason-codes/authenticate-reason-code/authenticate-reason-code.enum';
import { IMQTTAuthPacketPropertiesUnion } from './mqtt-auth-packet-properties.type';

// https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html#_Toc3901217

// https://github.com/mqttjs/mqtt-packet/blob/aae4e2ca077ebf57f5fd7e96c65e73c4a9677c24/writeToStream.js#L752

export interface IMQTTAuthPacket {
  reasonCode: AUTHENTICATE_REASON_CODE;
  properties: IMQTTAuthPacketPropertiesUnion[]; // V5
}
