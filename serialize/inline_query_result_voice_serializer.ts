import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResultVoice from '../entities/inline_query_result_voice';
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
    voiceUrl: {
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
    voiceDuration: {
        required: false,
        type: 'number'
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

let InlineQueryResultVoiceSerializer = new Serializer<InlineQueryResultVoice>(InlineQueryResultVoice, 'InlineQueryResultVoice', params);

export default InlineQueryResultVoiceSerializer;
export { InlineQueryResultVoiceSerializer, params as InlineQueryResultVoiceSerializerParams };