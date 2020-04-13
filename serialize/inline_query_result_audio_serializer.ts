import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResultAudio from '../entities/inline_query_result_audio';
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
    audioUrl: {
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
    performer: {
        required: false,
        type: 'string'
    },
    audioDuration: {
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

let InlineQueryResultAudioSerializer = new Serializer<InlineQueryResultAudio>(InlineQueryResultAudio, 'InlineQueryResultAudio', params);

export default InlineQueryResultAudioSerializer;
export { InlineQueryResultAudioSerializer, params as InlineQueryResultAudioSerializerParams };