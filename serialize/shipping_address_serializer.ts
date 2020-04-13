import { Serializer, ConstructorParams } from './serializer';
import ShippingAddress from '../entities/shipping_address';


let params: ConstructorParams = {
    countryCode: {
        required: true,
        type: 'string'
    },
    state: {
        required: true,
        type: 'string'
    },
    city: {
        required: true,
        type: 'string'
    },
    streetLine1: {
        required: true,
        type: 'string'
    },
    streetLine2: {
        required: true,
        type: 'string'
    },
    postCode: {
        required: true,
        type: 'string'
    }
}

let ShippingAddressSerializer = new Serializer<ShippingAddress>(ShippingAddress, 'ShippingAddress', params);

export default ShippingAddressSerializer;
export { ShippingAddressSerializer, params as ShippingAddressSerializerParams };