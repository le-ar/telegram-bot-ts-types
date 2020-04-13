import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResultCachedVideo from '../entities/inline_query_result_cached_video';
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
    videoFileId: {
        required: true,
        type: 'string'
    },
    title: {
        required: true,
        type: 'string'
    },
    description: {
        required: false,
        type: 'string'
    },
    caption: {
        required: false,
        type: 'string'
    },
    parseMode: {
        required: false,
        type: 'string'
    },
    replyMarkup: {
        required: false,
        type: 'InlineKeyboardMarkup'
    },
    inputMessageContent: {
        required: false,
        type: 'InputMessageContent'
    }
}

let InlineQueryResultCachedVideoSerializer = new Serializer<InlineQueryResultCachedVideo>(InlineQueryResultCachedVideo, 'InlineQueryResultCachedVideo', params);

export default InlineQueryResultCachedVideoSerializer;
export { InlineQueryResultCachedVideoSerializer, params as InlineQueryResultCachedVideoSerializerParams };