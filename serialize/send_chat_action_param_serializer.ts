import { Serializer, ConstructorParams } from './serializer';
import SendChatActionParam from '../method_params/send_chat_action_param';


let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    },
    action: {
        required: true,
        type: 'string'
    }
}

let SendChatActionParamSerializer = new Serializer<SendChatActionParam>(SendChatActionParam, 'SendChatActionParam', params);

export default SendChatActionParamSerializer;
export { SendChatActionParamSerializer, params as SendChatActionParamSerializerParams };