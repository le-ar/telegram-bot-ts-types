import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResultArticle from '../entities/inline_query_result_article';
import InputMessageContentSerializer from './input_message_content_serializer';
import InlineKeyboardMarkupSerializer from './inline_keyboard_markup_serializer';

let _InputMessageContentSerializer = InputMessageContentSerializer;
let _InlineKeyboardMarkupSerializer = InlineKeyboardMarkupSerializer;

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
    inputMessageContent: {
        required: true,
        type: 'InputMessageContent'
    },
    replyMarkup: {
        required: false,
        type: 'InlineKeyboardMarkup'
    },
    url: {
        required: false,
        type: 'string'
    },
    hideUrl: {
        required: false,
        type: 'boolean'
    },
    description: {
        required: false,
        type: 'string'
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

let InlineQueryResultArticleSerializer = new Serializer<InlineQueryResultArticle>(InlineQueryResultArticle, 'InlineQueryResultArticle', params);

export default InlineQueryResultArticleSerializer;
export { InlineQueryResultArticleSerializer, params as InlineQueryResultArticleSerializerParams };