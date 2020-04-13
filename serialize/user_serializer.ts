import { Serializer, ConstructorParams } from './serializer';
import User from '../entities/user';


let params: ConstructorParams = {
    id: {
        required: true,
        type: 'number'
    },
    isBot: {
        required: true,
        type: 'boolean'
    },
    firstName: {
        required: true,
        type: 'string'
    },
    lastName: {
        required: false,
        type: 'string'
    },
    username: {
        required: false,
        type: 'string'
    },
    languageCode: {
        required: false,
        type: 'string'
    },
    canJoinGroups: {
        required: false,
        type: 'boolean'
    },
    canReadAllGroupMessages: {
        required: false,
        type: 'boolean'
    },
    supportsInlineQueries: {
        required: false,
        type: 'boolean'
    }
}

let UserSerializer = new Serializer<User>(User, 'User', params);

export default UserSerializer;
export { UserSerializer, params as UserSerializerParams };