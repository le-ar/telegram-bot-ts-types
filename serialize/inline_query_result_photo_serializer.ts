import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResultPhoto from '../entities/inline_query_result_photo';
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
    photoUrl: {
        required: true,
        type: 'string'
    },
    thumbUrl: {
        required: true,
        type: 'string'
    },
    photoWidth: {
        required: false,
        type: 'number'
    },
    photoHeight: {
        required: false,
        type: 'number'
    },
    title: {
        required: false,
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

let InlineQueryResultPhotoSerializer = new Serializer<InlineQueryResultPhoto>(InlineQueryResultPhoto, 'InlineQueryResultPhoto', params);

export default InlineQueryResultPhotoSerializer;
export { InlineQueryResultPhotoSerializer, params as InlineQueryResultPhotoSerializerParams };