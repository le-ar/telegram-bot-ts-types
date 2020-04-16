import { Serializer, ConstructorParams } from './serializer';
import SendGameParam from '../method_params/send_game_param';
import InlineKeyboardMarkupSerializer from './inline_keyboard_markup_serializer';

let _InlineKeyboardMarkupSerializer = InlineKeyboardMarkupSerializer;

let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number'
    },
    gameShortName: {
        required: true,
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
        type: 'InlineKeyboardMarkup'
    }
}

let SendGameParamSerializer = new Serializer<SendGameParam>(SendGameParam, 'SendGameParam', params);

export default SendGameParamSerializer;
export { SendGameParamSerializer, params as SendGameParamSerializerParams };