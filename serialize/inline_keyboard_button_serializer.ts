import { Serializer, ConstructorParams } from './serializer';
import InlineKeyboardButton from '../entities/inline_keyboard_button';
import LoginUrlSerializer from './login_url_serializer';
import CallbackGameSerializer from './callback_game_serializer';

let _LoginUrlSerializer = LoginUrlSerializer;
let _CallbackGameSerializer = CallbackGameSerializer;

let params: ConstructorParams = {
    text: {
        required: true,
        type: 'string'
    },
    url: {
        required: false,
        type: 'string'
    },
    loginUrl: {
        required: false,
        type: 'LoginUrl'
    },
    callbackData: {
        required: false,
        type: 'string'
    },
    switchInlineQuery: {
        required: false,
        type: 'string'
    },
    switchInlineQueryCurrentChat: {
        required: false,
        type: 'string'
    },
    callbackGame: {
        required: false,
        type: 'CallbackGame'
    },
    pay: {
        required: false,
        type: 'boolean'
    }
}

let InlineKeyboardButtonSerializer = new Serializer<InlineKeyboardButton>(InlineKeyboardButton, 'InlineKeyboardButton', params);

export default InlineKeyboardButtonSerializer;
export { InlineKeyboardButtonSerializer, params as InlineKeyboardButtonSerializerParams };