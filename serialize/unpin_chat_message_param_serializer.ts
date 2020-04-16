import { Serializer, ConstructorParams } from './serializer';
import UnpinChatMessageParam from '../method_params/unpin_chat_message_param';


let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    }
}

let UnpinChatMessageParamSerializer = new Serializer<UnpinChatMessageParam>(UnpinChatMessageParam, 'UnpinChatMessageParam', params);

export default UnpinChatMessageParamSerializer;
export { UnpinChatMessageParamSerializer, params as UnpinChatMessageParamSerializerParams };