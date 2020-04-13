import { Serializer, ConstructorParams } from './serializer';
import SuccessfulPayment from '../entities/successful_payment';
import OrderInfoSerializer from './order_info_serializer';

let _OrderInfoSerializer = OrderInfoSerializer;

let params: ConstructorParams = {
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
    },
    telegramPaymentChargeId: {
        required: true,
        type: 'string'
    },
    providerPaymentChargeId: {
        required: true,
        type: 'string'
    }
}

let SuccessfulPaymentSerializer = new Serializer<SuccessfulPayment>(SuccessfulPayment, 'SuccessfulPayment', params);

export default SuccessfulPaymentSerializer;
export { SuccessfulPaymentSerializer, params as SuccessfulPaymentSerializerParams };