import { Serializer, ConstructorParams } from './serializer';
import InlineKeyboardMarkup from '../entities/inline_keyboard_markup';
import InlineKeyboardButtonSerializer from './inline_keyboard_button_serializer';

let _InlineKeyboardButtonSerializer = InlineKeyboardButtonSerializer;

let params: ConstructorParams = {
    inlineKeyboard: {
        required: true,
        type: 'InlineKeyboardButton[][]'
    }
}

let InlineKeyboardMarkupSerializer = new Serializer<InlineKeyboardMarkup>(InlineKeyboardMarkup, 'InlineKeyboardMarkup', params);

export default InlineKeyboardMarkupSerializer;
export { InlineKeyboardMarkupSerializer, params as InlineKeyboardMarkupSerializerParams };