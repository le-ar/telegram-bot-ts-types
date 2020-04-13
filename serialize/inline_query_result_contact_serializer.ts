import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResultContact from '../entities/inline_query_result_contact';
import InlineKeyboardMarkupSerializer from './inline_keyboard_markup_serializer';
import InputMessageContentSerializer from './input_message_content_serializer';

let _InlineKeyboardMarkupSerializer = InlineKeyboardMarkupSerializer;
let _InputMessageContentSerializer = InputMessageContentSerializer;

let params: ConstructorParams = {
    type: {
        required: true,
        type: 'string'
    },
    id: {
        required: true,
        type: 'string'
    },
    phoneNumber: {
        required: true,
        type: 'string'
    },
    firstName: {
        required: true,
        type: 'string'
    },
    lastName: {
        required: false,
        type: 'string'
    },
    vcard: {
        required: false,
        type: 'string'
    },
    replyMarkup: {
        required: false,
        type: 'InlineKeyboardMarkup'
    },
    inputMessageContent: {
        required: false,
        type: 'InputMessageContent'
    },
    thumbUrl: {
        required: false,
        type: 'string'
    },
    thumbWidth: {
        required: false,
        type: 'number'
    },
    thumbHeight: {
        required: false,
        type: 'number'
    }
}

let InlineQueryResultContactSerializer = new Serializer<InlineQueryResultContact>(InlineQueryResultContact, 'InlineQueryResultContact', params);

export default InlineQueryResultContactSerializer;
export { InlineQueryResultContactSerializer, params as InlineQueryResultContactSerializerParams };