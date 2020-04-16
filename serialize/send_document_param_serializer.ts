import { Serializer, ConstructorParams } from './serializer';
import SendDocumentParam from '../method_params/send_document_param';
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
    document: {
        required: true,
        type: 'InputFile | string'
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

let SendDocumentParamSerializer = new Serializer<SendDocumentParam>(SendDocumentParam, 'SendDocumentParam', params);

export default SendDocumentParamSerializer;
export { SendDocumentParamSerializer, params as SendDocumentParamSerializerParams };