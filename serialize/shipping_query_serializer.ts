import { Serializer, ConstructorParams } from './serializer';
import ShippingQuery from '../entities/shipping_query';
import UserSerializer from './user_serializer';
import ShippingAddressSerializer from './shipping_address_serializer';

let _UserSerializer = UserSerializer;
let _ShippingAddressSerializer = ShippingAddressSerializer;

let params: ConstructorParams = {
    id: {
        required: true,
        type: 'string'
    },
    from: {
        required: true,
        type: 'User'
    },
    invoicePayload: {
        required: true,
        type: 'string'
    },
    shippingAddress: {
        required: true,
        type: 'ShippingAddress'
    }
}

let ShippingQuerySerializer = new Serializer<ShippingQuery>(ShippingQuery, 'ShippingQuery', params);

export default ShippingQuerySerializer;
export { ShippingQuerySerializer, params as ShippingQuerySerializerParams };