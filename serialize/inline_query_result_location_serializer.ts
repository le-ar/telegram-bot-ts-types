import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResultLocation from '../entities/inline_query_result_location';
import InlineKeyboardMarkupSerializer from './inline_keyboard_markup_serializer';
import InputMessageContentSerializer from './input_message_content_serializer';

let _InlineKeyboardMarkupSerializer = InlineKeyboardMarkupSerializer;
let _InputMessageContentSerializer = InputMessageContentSerializer;

let params: ConstructorParams = {
    type: {
        required: true,
        type: 'string'
    },
    id: {
        required: true,
        type: 'string'
    },
    latitude: {
        required: true,
        type: 'number'
    },
    longitude: {
        required: true,
        type: 'number'
    },
    title: {
        required: true,
        type: 'string'
    },
    livePeriod: {
        required: false,
        type: 'number'
    },
    replyMarkup: {
        required: false,
        type: 'InlineKeyboardMarkup'
    },
    inputMessageContent: {
        required: false,
        type: 'InputMessageContent'
    },
    thumbUrl: {
        required: false,
        type: 'string'
    },
    thumbWidth: {
        required: false,
        type: 'number'
    },
    thumbHeight: {
        required: false,
        type: 'number'
    }
}

let InlineQueryResultLocationSerializer = new Serializer<InlineQueryResultLocation>(InlineQueryResultLocation, 'InlineQueryResultLocation', params);

export default InlineQueryResultLocationSerializer;
export { InlineQueryResultLocationSerializer, params as InlineQueryResultLocationSerializerParams };