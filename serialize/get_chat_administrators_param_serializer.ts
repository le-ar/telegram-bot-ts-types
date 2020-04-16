import { Serializer, ConstructorParams } from './serializer';
import GetChatAdministratorsParam from '../method_params/get_chat_administrators_param';


let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    }
}

let GetChatAdministratorsParamSerializer = new Serializer<GetChatAdministratorsParam>(GetChatAdministratorsParam, 'GetChatAdministratorsParam', params);

export default GetChatAdministratorsParamSerializer;
export { GetChatAdministratorsParamSerializer, params as GetChatAdministratorsParamSerializerParams };