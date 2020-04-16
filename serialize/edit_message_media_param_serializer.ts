import { Serializer, ConstructorParams } from './serializer';
import EditMessageMediaParam from '../method_params/edit_message_media_param';
import InputMediaSerializer from './input_media_serializer';
import InlineKeyboardMarkupSerializer from './inline_keyboard_markup_serializer';

let _InputMediaSerializer = InputMediaSerializer;
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
    media: {
        required: true,
        type: 'InputMedia'
    },
    replyMarkup: {
        required: false,
        type: 'InlineKeyboardMarkup'
    }
}

let EditMessageMediaParamSerializer = new Serializer<EditMessageMediaParam>(EditMessageMediaParam, 'EditMessageMediaParam', params);

export default EditMessageMediaParamSerializer;
export { EditMessageMediaParamSerializer, params as EditMessageMediaParamSerializerParams };