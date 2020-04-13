import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResultGif from '../entities/inline_query_result_gif';
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
    gifUrl: {
        required: true,
        type: 'string'
    },
    gifWidth: {
        required: false,
        type: 'number'
    },
    gifHeight: {
        required: false,
        type: 'number'
    },
    gifDuration: {
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

let InlineQueryResultGifSerializer = new Serializer<InlineQueryResultGif>(InlineQueryResultGif, 'InlineQueryResultGif', params);

export default InlineQueryResultGifSerializer;
export { InlineQueryResultGifSerializer, params as InlineQueryResultGifSerializerParams };