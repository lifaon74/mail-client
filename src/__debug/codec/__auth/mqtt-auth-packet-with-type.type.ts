import { PACKET_TYPE } from '../../../constants/packet-type.enum';
import { IMQTTPacketWithType } from '../../with-type/mqtt-packet-with-type.type';
import { IMQTTAuthPacket } from './mqtt-auth-packet.type';

export type IMQTTAuthPacketWithType = IMQTTPacketWithType<PACKET_TYPE.AUTH, IMQTTAuthPacket>;
