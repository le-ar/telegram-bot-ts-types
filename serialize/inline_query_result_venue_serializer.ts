import { Serializer, ConstructorParams } from './serializer';
import InlineQueryResultVenue from '../entities/inline_query_result_venue';
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
    latitude: {
        required: true,
        type: 'number'
    },
    longitude: {
        required: true,
        type: 'number'
    },
    title: {
        required: true,
        type: 'string'
    },
    address: {
        required: true,
        type: 'string'
    },
    foursquareId: {
        required: false,
        type: 'string'
    },
    foursquareType: {
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

let InlineQueryResultVenueSerializer = new Serializer<InlineQueryResultVenue>(InlineQueryResultVenue, 'InlineQueryResultVenue', params);

export default InlineQueryResultVenueSerializer;
export { InlineQueryResultVenueSerializer, params as InlineQueryResultVenueSerializerParams };