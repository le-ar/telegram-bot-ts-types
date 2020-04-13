import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResultVideo from '../entities/inline_query_result_video';
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
    videoUrl: {
        required: true,
        type: 'string'
    },
    mimeType: {
        required: true,
        type: 'string'
    },
    thumbUrl: {
        required: true,
        type: 'string'
    },
    title: {
        required: true,
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
    videoWidth: {
        required: false,
        type: 'number'
    },
    videoHeight: {
        required: false,
        type: 'number'
    },
    videoDuration: {
        required: false,
        type: 'number'
    },
    description: {
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

let InlineQueryResultVideoSerializer = new Serializer<InlineQueryResultVideo>(InlineQueryResultVideo, 'InlineQueryResultVideo', params);

export default InlineQueryResultVideoSerializer;
export { InlineQueryResultVideoSerializer, params as InlineQueryResultVideoSerializerParams };