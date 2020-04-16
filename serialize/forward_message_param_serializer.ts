import { Serializer, ConstructorParams } from './serializer';
import ForwardMessageParam from '../method_params/forward_message_param';


let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    },
    fromChatId: {
        required: true,
        type: 'number | string'
    },
    disableNotification: {
        required: false,
        type: 'boolean'
    },
    messageId: {
        required: true,
        type: 'number'
    }
}

let ForwardMessageParamSerializer = new Serializer<ForwardMessageParam>(ForwardMessageParam, 'ForwardMessageParam', params);

export default ForwardMessageParamSerializer;
export { ForwardMessageParamSerializer, params as ForwardMessageParamSerializerParams };