import {
  IMQTTPacketAuthenticationDataProperty,
} from '../../shared/properties/property/authentication-data/mqtt-packet-authentication-data-property.type';
import {
  IMQTTPacketAuthenticationMethodProperty,
} from '../../shared/properties/property/authentication-method/mqtt-packet-authentication-method-property.type';
import { IMQTTPacketReasonStringProperty } from '../../shared/properties/property/reason-string/mqtt-packet-reason-string-property.type';
import { IMQTTPacketUserProperty } from '../../shared/properties/property/user-property/mqtt-packet-user-property.type';

export type IMQTTAuthPacketPropertiesUnion =
  IMQTTPacketAuthenticationMethodProperty
  | IMQTTPacketAuthenticationDataProperty
  | IMQTTPacketReasonStringProperty
  | IMQTTPacketUserProperty
  ;
