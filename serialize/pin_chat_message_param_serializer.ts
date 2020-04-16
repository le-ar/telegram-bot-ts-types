import { Serializer, ConstructorParams } from './serializer';
import PinChatMessageParam from '../method_params/pin_chat_message_param';


let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    },
    messageId: {
        required: true,
        type: 'number'
    },
    disableNotification: {
        required: false,
        type: 'boolean'
    }
}

let PinChatMessageParamSerializer = new Serializer<PinChatMessageParam>(PinChatMessageParam, 'PinChatMessageParam', params);

export default PinChatMessageParamSerializer;
export { PinChatMessageParamSerializer, params as PinChatMessageParamSerializerParams };