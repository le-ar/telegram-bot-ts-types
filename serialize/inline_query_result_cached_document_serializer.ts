import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResultCachedDocument from '../entities/inline_query_result_cached_document';
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
    documentFileId: {
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

let InlineQueryResultCachedDocumentSerializer = new Serializer<InlineQueryResultCachedDocument>(InlineQueryResultCachedDocument, 'InlineQueryResultCachedDocument', params);

export default InlineQueryResultCachedDocumentSerializer;
export { InlineQueryResultCachedDocumentSerializer, params as InlineQueryResultCachedDocumentSerializerParams };