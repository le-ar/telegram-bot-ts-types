import { Serializer, ConstructorParams } from './serializer';
import SendPollParam from '../method_params/send_poll_param';
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
    question: {
        required: true,
        type: 'string'
    },
    options: {
        required: true,
        type: 'string[]'
    },
    isAnonymous: {
        required: false,
        type: 'boolean'
    },
    type: {
        required: false,
        type: 'string'
    },
    allowsMultipleAnswers: {
        required: false,
        type: 'boolean'
    },
    correctOptionId: {
        required: false,
        type: 'number'
    },
    isClosed: {
        required: false,
        type: 'boolean'
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

let SendPollParamSerializer = new Serializer<SendPollParam>(SendPollParam, 'SendPollParam', params);

export default SendPollParamSerializer;
export { SendPollParamSerializer, params as SendPollParamSerializerParams };