import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResultCachedSticker from '../entities/inline_query_result_cached_sticker';
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
    stickerFileId: {
        required: true,
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

let InlineQueryResultCachedStickerSerializer = new Serializer<InlineQueryResultCachedSticker>(InlineQueryResultCachedSticker, 'InlineQueryResultCachedSticker', params);

export default InlineQueryResultCachedStickerSerializer;
export { InlineQueryResultCachedStickerSerializer, params as InlineQueryResultCachedStickerSerializerParams };