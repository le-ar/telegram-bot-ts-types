import { Serializer, ConstructorParams } from './serializer';
import SendContactParam from '../method_params/send_contact_param';
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
    phoneNumber: {
        required: true,
        type: 'string'
    },
    firstName: {
        required: true,
        type: 'string'
    },
    lastName: {
        required: false,
        type: 'string'
    },
    vcard: {
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

let SendContactParamSerializer = new Serializer<SendContactParam>(SendContactParam, 'SendContactParam', params);

export default SendContactParamSerializer;
export { SendContactParamSerializer, params as SendContactParamSerializerParams };