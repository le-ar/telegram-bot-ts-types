import { Serializer, ConstructorParams } from './serializer';
import MessageEntity from '../entities/message_entity';
import UserSerializer from './user_serializer';

let _UserSerializer = UserSerializer;

let params: ConstructorParams = {
    type: {
        required: true,
        type: 'string'
    },
    offset: {
        required: true,
        type: 'number'
    },
    length: {
        required: true,
        type: 'number'
    },
    url: {
        required: false,
        type: 'string'
    },
    user: {
        required: false,
        type: 'User'
    },
    language: {
        required: false,
        type: 'string'
    }
}

let MessageEntitySerializer = new Serializer<MessageEntity>(MessageEntity, 'MessageEntity', params);

export default MessageEntitySerializer;
export { MessageEntitySerializer, params as MessageEntitySerializerParams };