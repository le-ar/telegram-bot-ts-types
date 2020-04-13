import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResultMpeg4Gif from '../entities/inline_query_result_mpeg4_gif';
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
    mpeg4Url: {
        required: true,
        type: 'string'
    },
    mpeg4Width: {
        required: false,
        type: 'number'
    },
    mpeg4Height: {
        required: false,
        type: 'number'
    },
    mpeg4Duration: {
        required: false,
        type: 'number'
    },
    thumbUrl: {
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

let InlineQueryResultMpeg4GifSerializer = new Serializer<InlineQueryResultMpeg4Gif>(InlineQueryResultMpeg4Gif, 'InlineQueryResultMpeg4Gif', params);

export default InlineQueryResultMpeg4GifSerializer;
export { InlineQueryResultMpeg4GifSerializer, params as InlineQueryResultMpeg4GifSerializerParams };