import { Serializer, ConstructorParams } from './serializer';
import LeaveChatParam from '../method_params/leave_chat_param';


let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    }
}

let LeaveChatParamSerializer = new Serializer<LeaveChatParam>(LeaveChatParam, 'LeaveChatParam', params);

export default LeaveChatParamSerializer;
export { LeaveChatParamSerializer, params as LeaveChatParamSerializerParams };