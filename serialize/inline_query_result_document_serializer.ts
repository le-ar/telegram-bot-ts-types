import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResultDocument from '../entities/inline_query_result_document';
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
    documentUrl: {
        required: true,
        type: 'string'
    },
    mimeType: {
        required: true,
        type: 'string'
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

let InlineQueryResultDocumentSerializer = new Serializer<InlineQueryResultDocument>(InlineQueryResultDocument, 'InlineQueryResultDocument', params);

export default InlineQueryResultDocumentSerializer;
export { InlineQueryResultDocumentSerializer, params as InlineQueryResultDocumentSerializerParams };