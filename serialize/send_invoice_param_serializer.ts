import { Serializer, ConstructorParams } from './serializer';
import SendInvoiceParam from '../method_params/send_invoice_param';
import LabeledPriceSerializer from './labeled_price_serializer';
import InlineKeyboardMarkupSerializer from './inline_keyboard_markup_serializer';

let _LabeledPriceSerializer = LabeledPriceSerializer;
let _InlineKeyboardMarkupSerializer = InlineKeyboardMarkupSerializer;

let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number'
    },
    title: {
        required: true,
        type: 'string'
    },
    description: {
        required: true,
        type: 'string'
    },
    payload: {
        required: true,
        type: 'string'
    },
    providerToken: {
        required: true,
        type: 'string'
    },
    startParameter: {
        required: true,
        type: 'string'
    },
    currency: {
        required: true,
        type: 'string'
    },
    prices: {
        required: true,
        type: 'LabeledPrice[]'
    },
    providerData: {
        required: false,
        type: 'string'
    },
    photoUrl: {
        required: false,
        type: 'string'
    },
    photoSize: {
        required: false,
        type: 'number'
    },
    photoWidth: {
        required: false,
        type: 'number'
    },
    photoHeight: {
        required: false,
        type: 'number'
    },
    needName: {
        required: false,
        type: 'boolean'
    },
    needPhoneNumber: {
        required: false,
        type: 'boolean'
    },
    needEmail: {
        required: false,
        type: 'boolean'
    },
    needShippingAddress: {
        required: false,
        type: 'boolean'
    },
    sendPhoneNumberToProvider: {
        required: false,
        type: 'boolean'
    },
    sendEmailToProvider: {
        required: false,
        type: 'boolean'
    },
    isFlexible: {
        required: false,
        type: 'boolean'
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

let SendInvoiceParamSerializer = new Serializer<SendInvoiceParam>(SendInvoiceParam, 'SendInvoiceParam', params);

export default SendInvoiceParamSerializer;
export { SendInvoiceParamSerializer, params as SendInvoiceParamSerializerParams };