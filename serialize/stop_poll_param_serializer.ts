import { Serializer, ConstructorParams } from './serializer';
import StopPollParam from '../method_params/stop_poll_param';
import InlineKeyboardMarkupSerializer from './inline_keyboard_markup_serializer';

let _InlineKeyboardMarkupSerializer = InlineKeyboardMarkupSerializer;

let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    },
    messageId: {
        required: true,
        type: 'number'
    },
    replyMarkup: {
        required: false,
        type: 'InlineKeyboardMarkup'
    }
}

let StopPollParamSerializer = new Serializer<StopPollParam>(StopPollParam, 'StopPollParam', params);

export default StopPollParamSerializer;
export { StopPollParamSerializer, params as StopPollParamSerializerParams };