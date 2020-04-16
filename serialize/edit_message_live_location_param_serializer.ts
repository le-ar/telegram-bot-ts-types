import { Serializer, ConstructorParams } from './serializer';
import EditMessageLiveLocationParam from '../method_params/edit_message_live_location_param';
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
    latitude: {
        required: true,
        type: 'number'
    },
    longitude: {
        required: true,
        type: 'number'
    },
    replyMarkup: {
        required: false,
        type: 'InlineKeyboardMarkup'
    }
}

let EditMessageLiveLocationParamSerializer = new Serializer<EditMessageLiveLocationParam>(EditMessageLiveLocationParam, 'EditMessageLiveLocationParam', params);

export default EditMessageLiveLocationParamSerializer;
export { EditMessageLiveLocationParamSerializer, params as EditMessageLiveLocationParamSerializerParams };