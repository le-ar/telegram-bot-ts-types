import { Serializer, ConstructorParams } from './serializer';
import AnswerPreCheckoutQueryParam from '../method_params/answer_pre_checkout_query_param';


let params: ConstructorParams = {
    preCheckoutQueryId: {
        required: true,
        type: 'string'
    },
    ok: {
        required: true,
        type: 'boolean'
    },
    errorMessage: {
        required: false,
        type: 'string'
    }
}

let AnswerPreCheckoutQueryParamSerializer = new Serializer<AnswerPreCheckoutQueryParam>(AnswerPreCheckoutQueryParam, 'AnswerPreCheckoutQueryParam', params);

export default AnswerPreCheckoutQueryParamSerializer;
export { AnswerPreCheckoutQueryParamSerializer, params as AnswerPreCheckoutQueryParamSerializerParams };