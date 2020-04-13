import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResultCachedPhoto from '../entities/inline_query_result_cached_photo';
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
    photoFileId: {
        required: true,
        type: 'string'
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

let InlineQueryResultCachedPhotoSerializer = new Serializer<InlineQueryResultCachedPhoto>(InlineQueryResultCachedPhoto, 'InlineQueryResultCachedPhoto', params);

export default InlineQueryResultCachedPhotoSerializer;
export { InlineQueryResultCachedPhotoSerializer, params as InlineQueryResultCachedPhotoSerializerParams };