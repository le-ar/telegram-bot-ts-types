import { Serializer, ConstructorParams } from './serializer';
import StopMessageLiveLocationParam from '../method_params/stop_message_live_location_param';
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

let StopMessageLiveLocationParamSerializer = new Serializer<StopMessageLiveLocationParam>(StopMessageLiveLocationParam, 'StopMessageLiveLocationParam', params);

export default StopMessageLiveLocationParamSerializer;
export { StopMessageLiveLocationParamSerializer, params as StopMessageLiveLocationParamSerializerParams };