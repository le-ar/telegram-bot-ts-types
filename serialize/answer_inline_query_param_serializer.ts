import { Serializer, ConstructorParams } from './serializer';
import AnswerInlineQueryParam from '../method_params/answer_inline_query_param';
import InlineQueryResultSerializer from './inline_query_result_serializer';

let _InlineQueryResultSerializer = InlineQueryResultSerializer;

let params: ConstructorParams = {
    inlineQueryId: {
        required: true,
        type: 'string'
    },
    results: {
        required: true,
        type: 'InlineQueryResult[]'
    },
    cacheTime: {
        required: false,
        type: 'number'
    },
    isPersonal: {
        required: false,
        type: 'boolean'
    },
    nextOffset: {
        required: false,
        type: 'string'
    },
    switchPmText: {
        required: false,
        type: 'string'
    },
    switchPmParameter: {
        required: false,
        type: 'string'
    }
}

let AnswerInlineQueryParamSerializer = new Serializer<AnswerInlineQueryParam>(AnswerInlineQueryParam, 'AnswerInlineQueryParam', params);

export default AnswerInlineQueryParamSerializer;
export { AnswerInlineQueryParamSerializer, params as AnswerInlineQueryParamSerializerParams };