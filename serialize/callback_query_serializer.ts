import { Serializer, ConstructorParams } from './serializer';
import CallbackQuery from '../entities/callback_query';
import UserSerializer from './user_serializer';
import MessageSerializer from './message_serializer';

let _UserSerializer = UserSerializer;
let _MessageSerializer = MessageSerializer;

let params: ConstructorParams = {
    id: {
        required: true,
        type: 'string'
    },
    from: {
        required: true,
        type: 'User'
    },
    message: {
        required: false,
        type: 'Message'
    },
    inlineMessageId: {
        required: false,
        type: 'string'
    },
    chatInstance: {
        required: true,
        type: 'string'
    },
    data: {
        required: false,
        type: 'string'
    },
    gameShortName: {
        required: false,
        type: 'string'
    }
}

let CallbackQuerySerializer = new Serializer<CallbackQuery>(CallbackQuery, 'CallbackQuery', params);

export default CallbackQuerySerializer;
export { CallbackQuerySerializer, params as CallbackQuerySerializerParams };