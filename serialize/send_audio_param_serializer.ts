import { Serializer, ConstructorParams } from './serializer';
import SendAudioParam from '../method_params/send_audio_param';
import InlineKeyboardMarkupSerializer from './inline_keyboard_markup_serializer';
import ReplyKeyboardMarkupSerializer from './reply_keyboard_markup_serializer';
import ReplyKeyboardRemoveSerializer from './reply_keyboard_remove_serializer';
import ForceReplySerializer from './force_reply_serializer';

let _InlineKeyboardMarkupSerializer = InlineKeyboardMarkupSerializer;
let _ReplyKeyboardMarkupSerializer = ReplyKeyboardMarkupSerializer;
let _ReplyKeyboardRemoveSerializer = ReplyKeyboardRemoveSerializer;
let _ForceReplySerializer = ForceReplySerializer;

let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    },
    audio: {
        required: true,
        type: 'InputFile | string'
    },
    caption: {
        required: false,
        type: 'string'
    },
    parseMode: {
        required: false,
        type: 'string'
    },
    duration: {
        required: false,
        type: 'number'
    },
    performer: {
        required: false,
        type: 'string'
    },
    title: {
        required: false,
        type: 'string'
    },
    thumb: {
        required: false,
        type: 'InputFile | string'
    },
    disableNotification: {
        required: false,
        type: 'boolean'
    },
    replyToMessageId: {
        required: false,
        type: 'number'
    },
    replyMarkup: {
        required: false,
        type: 'InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply'
    }
}

let SendAudioParamSerializer = new Serializer<SendAudioParam>(SendAudioParam, 'SendAudioParam', params);

export default SendAudioParamSerializer;
export { SendAudioParamSerializer, params as SendAudioParamSerializerParams };