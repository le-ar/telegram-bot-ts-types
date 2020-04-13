import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResultCachedMpeg4Gif from '../entities/inline_query_result_cached_mpeg4_gif';
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
    mpeg4FileId: {
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

let InlineQueryResultCachedMpeg4GifSerializer = new Serializer<InlineQueryResultCachedMpeg4Gif>(InlineQueryResultCachedMpeg4Gif, 'InlineQueryResultCachedMpeg4Gif', params);

export default InlineQueryResultCachedMpeg4GifSerializer;
export { InlineQueryResultCachedMpeg4GifSerializer, params as InlineQueryResultCachedMpeg4GifSerializerParams };