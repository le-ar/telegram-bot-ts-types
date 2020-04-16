import { Serializer, ConstructorParams } from './serializer';
import EditMessageCaptionParam from '../method_params/edit_message_caption_param';
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
    caption: {
        required: false,
        type: 'string'
    },
    parseMode: {
        required: false,
        type: 'string'
    },
    replyMarkup: {
        required: false,
        type: 'InlineKeyboardMarkup'
    }
}

let EditMessageCaptionParamSerializer = new Serializer<EditMessageCaptionParam>(EditMessageCaptionParam, 'EditMessageCaptionParam', params);

export default EditMessageCaptionParamSerializer;
export { EditMessageCaptionParamSerializer, params as EditMessageCaptionParamSerializerParams };