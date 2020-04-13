import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResultCachedVoice from '../entities/inline_query_result_cached_voice';
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
    voiceFileId: {
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
    replyMarkup: {
        required: false,
        type: 'InlineKeyboardMarkup'
    },
    inputMessageContent: {
        required: false,
        type: 'InputMessageContent'
    }
}

let InlineQueryResultCachedVoiceSerializer = new Serializer<InlineQueryResultCachedVoice>(InlineQueryResultCachedVoice, 'InlineQueryResultCachedVoice', params);

export default InlineQueryResultCachedVoiceSerializer;
export { InlineQueryResultCachedVoiceSerializer, params as InlineQueryResultCachedVoiceSerializerParams };