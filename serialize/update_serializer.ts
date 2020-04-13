import { Serializer, ConstructorParams } from './serializer';
import Update from '../entities/update';
import MessageSerializer from './message_serializer';
import InlineQuerySerializer from './inline_query_serializer';
import ChosenInlineResultSerializer from './chosen_inline_result_serializer';
import CallbackQuerySerializer from './callback_query_serializer';
import ShippingQuerySerializer from './shipping_query_serializer';
import PreCheckoutQuerySerializer from './pre_checkout_query_serializer';
import PollSerializer from './poll_serializer';
import PollAnswerSerializer from './poll_answer_serializer';

let _MessageSerializer = MessageSerializer;
let _InlineQuerySerializer = InlineQuerySerializer;
let _ChosenInlineResultSerializer = ChosenInlineResultSerializer;
let _CallbackQuerySerializer = CallbackQuerySerializer;
let _ShippingQuerySerializer = ShippingQuerySerializer;
let _PreCheckoutQuerySerializer = PreCheckoutQuerySerializer;
let _PollSerializer = PollSerializer;
let _PollAnswerSerializer = PollAnswerSerializer;

let params: ConstructorParams = {
    updateId: {
        required: true,
        type: 'number'
    },
    message: {
        required: false,
        type: 'Message'
    },
    editedMessage: {
        required: false,
        type: 'Message'
    },
    channelPost: {
        required: false,
        type: 'Message'
    },
    editedChannelPost: {
        required: false,
        type: 'Message'
    },
    inlineQuery: {
        required: false,
        type: 'InlineQuery'
    },
    chosenInlineResult: {
        required: false,
        type: 'ChosenInlineResult'
    },
    callbackQuery: {
        required: false,
        type: 'CallbackQuery'
    },
    shippingQuery: {
        required: false,
        type: 'ShippingQuery'
    },
    preCheckoutQuery: {
        required: false,
        type: 'PreCheckoutQuery'
    },
    poll: {
        required: false,
        type: 'Poll'
    },
    pollAnswer: {
        required: false,
        type: 'PollAnswer'
    }
}

let UpdateSerializer = new Serializer<Update>(Update, 'Update', params);

export default UpdateSerializer;
export { UpdateSerializer, params as UpdateSerializerParams };