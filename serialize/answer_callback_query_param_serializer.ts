import { Serializer, ConstructorParams } from './serializer';
import AnswerCallbackQueryParam from '../method_params/answer_callback_query_param';


let params: ConstructorParams = {
    callbackQueryId: {
        required: true,
        type: 'string'
    },
    text: {
        required: false,
        type: 'string'
    },
    showAlert: {
        required: false,
        type: 'boolean'
    },
    url: {
        required: false,
        type: 'string'
    },
    cacheTime: {
        required: false,
        type: 'number'
    }
}

let AnswerCallbackQueryParamSerializer = new Serializer<AnswerCallbackQueryParam>(AnswerCallbackQueryParam, 'AnswerCallbackQueryParam', params);

export default AnswerCallbackQueryParamSerializer;
export { AnswerCallbackQueryParamSerializer, params as AnswerCallbackQueryParamSerializerParams };