import { Serializer, ConstructorParams } from './serializer';
import SendMessageParam from '../method_params/send_message_param';
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
    text: {
        required: true,
        type: 'string'
    },
    parseMode: {
        required: false,
        type: 'string'
    },
    disableWebPagePreview: {
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

let SendMessageParamSerializer = new Serializer<SendMessageParam>(SendMessageParam, 'SendMessageParam', params);

export default SendMessageParamSerializer;
export { SendMessageParamSerializer, params as SendMessageParamSerializerParams };