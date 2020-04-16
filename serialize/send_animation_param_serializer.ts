import { Serializer, ConstructorParams } from './serializer';
import SendAnimationParam from '../method_params/send_animation_param';
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
    animation: {
        required: true,
        type: 'InputFile | string'
    },
    duration: {
        required: false,
        type: 'number'
    },
    width: {
        required: false,
        type: 'number'
    },
    height: {
        required: false,
        type: 'number'
    },
    thumb: {
        required: false,
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

let SendAnimationParamSerializer = new Serializer<SendAnimationParam>(SendAnimationParam, 'SendAnimationParam', params);

export default SendAnimationParamSerializer;
export { SendAnimationParamSerializer, params as SendAnimationParamSerializerParams };