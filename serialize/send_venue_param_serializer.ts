import { Serializer, ConstructorParams } from './serializer';
import SendVenueParam from '../method_params/send_venue_param';
import InlineKeyboardMarkupSerializer from './inline_keyboard_markup_serializer';
import ReplyKeyboardMarkupSerializer from './reply_keyboard_markup_serializer';
import ReplyKeyboardRemoveSerializer from './reply_keyboard_remove_serializer';
import ForceReplySerializer from './force_reply_serializer';

let _InlineKeyboardMarkupSerializer = InlineKeyboardMarkupSerializer;
let _ReplyKeyboardMarkupSerializer = ReplyKeyboardMarkupSerializer;
let _ReplyKeyboardRemoveSerializer = ReplyKeyboardRemoveSerializer;
let _ForceReplySerializer = ForceReplySerializer;

let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
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
        type: 'InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply'
    }
}

let SendVenueParamSerializer = new Serializer<SendVenueParam>(SendVenueParam, 'SendVenueParam', params);

export default SendVenueParamSerializer;
export { SendVenueParamSerializer, params as SendVenueParamSerializerParams };