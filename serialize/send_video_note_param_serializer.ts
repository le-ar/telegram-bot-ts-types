import { Serializer, ConstructorParams } from './serializer';
import SendVideoNoteParam from '../method_params/send_video_note_param';
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
    videoNote: {
        required: true,
        type: 'InputFile | string'
    },
    duration: {
        required: false,
        type: 'number'
    },
    length: {
        required: false,
        type: 'number'
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

let SendVideoNoteParamSerializer = new Serializer<SendVideoNoteParam>(SendVideoNoteParam, 'SendVideoNoteParam', params);

export default SendVideoNoteParamSerializer;
export { SendVideoNoteParamSerializer, params as SendVideoNoteParamSerializerParams };