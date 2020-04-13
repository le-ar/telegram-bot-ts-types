import { Serializer, ConstructorParams } from './serializer';
import LoginUrl from '../entities/login_url';


let params: ConstructorParams = {
    url: {
        required: true,
        type: 'string'
    },
    forwardText: {
        required: false,
        type: 'string'
    },
    botUsername: {
        required: false,
        type: 'string'
    },
    requestWriteAccess: {
        required: false,
        type: 'boolean'
    }
}

let LoginUrlSerializer = new Serializer<LoginUrl>(LoginUrl, 'LoginUrl', params);

export default LoginUrlSerializer;
export { LoginUrlSerializer, params as LoginUrlSerializerParams };