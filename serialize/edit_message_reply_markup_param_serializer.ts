import { Serializer, ConstructorParams } from './serializer';
import EditMessageReplyMarkupParam from '../method_params/edit_message_reply_markup_param';
import InlineKeyboardMarkupSerializer from './inline_keyboard_markup_serializer';

let _InlineKeyboardMarkupSerializer = InlineKeyboardMarkupSerializer;

let params: ConstructorParams = {
    chatId: {
        required: false,
        type: 'number | string'
    },
    messageId: {
        required: false,
        type: 'number'
    },
    inlineMessageId: {
        required: false,
        type: 'string'
    },
    replyMarkup: {
        required: false,
        type: 'InlineKeyboardMarkup'
    }
}

let EditMessageReplyMarkupParamSerializer = new Serializer<EditMessageReplyMarkupParam>(EditMessageReplyMarkupParam, 'EditMessageReplyMarkupParam', params);

export default EditMessageReplyMarkupParamSerializer;
export { EditMessageReplyMarkupParamSerializer, params as EditMessageReplyMarkupParamSerializerParams };