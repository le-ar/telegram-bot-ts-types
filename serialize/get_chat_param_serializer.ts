import { Serializer, ConstructorParams } from './serializer';
import GetChatParam from '../method_params/get_chat_param';


let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    }
}

let GetChatParamSerializer = new Serializer<GetChatParam>(GetChatParam, 'GetChatParam', params);

export default GetChatParamSerializer;
export { GetChatParamSerializer, params as GetChatParamSerializerParams };