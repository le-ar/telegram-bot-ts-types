import { Serializer, ConstructorParams } from './serializer';
import EditMessageTextParam from '../method_params/edit_message_text_param';
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
    replyMarkup: {
        required: false,
        type: 'InlineKeyboardMarkup'
    }
}

let EditMessageTextParamSerializer = new Serializer<EditMessageTextParam>(EditMessageTextParam, 'EditMessageTextParam', params);

export default EditMessageTextParamSerializer;
export { EditMessageTextParamSerializer, params as EditMessageTextParamSerializerParams };