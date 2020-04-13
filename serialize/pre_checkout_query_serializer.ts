import { Serializer, ConstructorParams } from './serializer';
import PreCheckoutQuery from '../entities/pre_checkout_query';
import UserSerializer from './user_serializer';
import OrderInfoSerializer from './order_info_serializer';

let _UserSerializer = UserSerializer;
let _OrderInfoSerializer = OrderInfoSerializer;

let params: ConstructorParams = {
    id: {
        required: true,
        type: 'string'
    },
    from: {
        required: true,
        type: 'User'
    },
    currency: {
        required: true,
        type: 'string'
    },
    totalAmount: {
        required: true,
        type: 'number'
    },
    invoicePayload: {
        required: true,
        type: 'string'
    },
    shippingOptionId: {
        required: false,
        type: 'string'
    },
    orderInfo: {
        required: false,
        type: 'OrderInfo'
    }
}

let PreCheckoutQuerySerializer = new Serializer<PreCheckoutQuery>(PreCheckoutQuery, 'PreCheckoutQuery', params);

export default PreCheckoutQuerySerializer;
export { PreCheckoutQuerySerializer, params as PreCheckoutQuerySerializerParams };