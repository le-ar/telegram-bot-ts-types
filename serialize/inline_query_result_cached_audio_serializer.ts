import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResultCachedAudio from '../entities/inline_query_result_cached_audio';
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
    audioFileId: {
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
    replyMarkup: {
        required: false,
        type: 'InlineKeyboardMarkup'
    },
    inputMessageContent: {
        required: false,
        type: 'InputMessageContent'
    }
}

let InlineQueryResultCachedAudioSerializer = new Serializer<InlineQueryResultCachedAudio>(InlineQueryResultCachedAudio, 'InlineQueryResultCachedAudio', params);

export default InlineQueryResultCachedAudioSerializer;
export { InlineQueryResultCachedAudioSerializer, params as InlineQueryResultCachedAudioSerializerParams };