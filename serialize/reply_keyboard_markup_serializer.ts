import { Serializer, ConstructorParams } from './serializer';
import ReplyKeyboardMarkup from '../entities/reply_keyboard_markup';
import KeyboardButtonSerializer from './keyboard_button_serializer';

let _KeyboardButtonSerializer = KeyboardButtonSerializer;

let params: ConstructorParams = {
    keyboard: {
        required: true,
        type: 'KeyboardButton[][]'
    },
    resizeKeyboard: {
        required: false,
        type: 'boolean'
    },
    oneTimeKeyboard: {
        required: false,
        type: 'boolean'
    },
    selective: {
        required: false,
        type: 'boolean'
    }
}

let ReplyKeyboardMarkupSerializer = new Serializer<ReplyKeyboardMarkup>(ReplyKeyboardMarkup, 'ReplyKeyboardMarkup', params);

export default ReplyKeyboardMarkupSerializer;
export { ReplyKeyboardMarkupSerializer, params as ReplyKeyboardMarkupSerializerParams };