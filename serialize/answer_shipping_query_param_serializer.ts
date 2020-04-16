import { Serializer, ConstructorParams } from './serializer';
import AnswerShippingQueryParam from '../method_params/answer_shipping_query_param';
import ShippingOptionSerializer from './shipping_option_serializer';

let _ShippingOptionSerializer = ShippingOptionSerializer;

let params: ConstructorParams = {
    shippingQueryId: {
        required: true,
        type: 'string'
    },
    ok: {
        required: true,
        type: 'boolean'
    },
    shippingOptions: {
        required: false,
        type: 'ShippingOption[]'
    },
    errorMessage: {
        required: false,
        type: 'string'
    }
}

let AnswerShippingQueryParamSerializer = new Serializer<AnswerShippingQueryParam>(AnswerShippingQueryParam, 'AnswerShippingQueryParam', params);

export default AnswerShippingQueryParamSerializer;
export { AnswerShippingQueryParamSerializer, params as AnswerShippingQueryParamSerializerParams };