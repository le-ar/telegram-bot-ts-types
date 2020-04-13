import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResultGame from '../entities/inline_query_result_game';
import InlineKeyboardMarkupSerializer from './inline_keyboard_markup_serializer';

let _InlineKeyboardMarkupSerializer = InlineKeyboardMarkupSerializer;

let params: ConstructorParams = {
    type: {
        required: true,
        type: 'string'
    },
    id: {
        required: true,
        type: 'string'
    },
    gameShortName: {
        required: true,
        type: 'string'
    },
    replyMarkup: {
        required: false,
        type: 'InlineKeyboardMarkup'
    }
}

let InlineQueryResultGameSerializer = new Serializer<InlineQueryResultGame>(InlineQueryResultGame, 'InlineQueryResultGame', params);

export default InlineQueryResultGameSerializer;
export { InlineQueryResultGameSerializer, params as InlineQueryResultGameSerializerParams };