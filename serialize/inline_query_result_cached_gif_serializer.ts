import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResultCachedGif from '../entities/inline_query_result_cached_gif';
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
    gifFileId: {
        required: true,
        type: 'string'
    },
    title: {
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

let InlineQueryResultCachedGifSerializer = new Serializer<InlineQueryResultCachedGif>(InlineQueryResultCachedGif, 'InlineQueryResultCachedGif', params);

export default InlineQueryResultCachedGifSerializer;
export { InlineQueryResultCachedGifSerializer, params as InlineQueryResultCachedGifSerializerParams };