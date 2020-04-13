import { Serializer, ConstructorParams } from './serializer';
import OrderInfo from '../entities/order_info';
import ShippingAddressSerializer from './shipping_address_serializer';

let _ShippingAddressSerializer = ShippingAddressSerializer;

let params: ConstructorParams = {
    name: {
        required: false,
        type: 'string'
    },
    phoneNumber: {
        required: false,
        type: 'string'
    },
    email: {
        required: false,
        type: 'string'
    },
    shippingAddress: {
        required: false,
        type: 'ShippingAddress'
    }
}

let OrderInfoSerializer = new Serializer<OrderInfo>(OrderInfo, 'OrderInfo', params);

export default OrderInfoSerializer;
export { OrderInfoSerializer, params as OrderInfoSerializerParams };