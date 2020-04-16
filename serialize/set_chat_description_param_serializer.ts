import { Serializer, ConstructorParams } from './serializer';
import SetChatDescriptionParam from '../method_params/set_chat_description_param';


let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    },
    description: {
        required: false,
        type: 'string'
    }
}

let SetChatDescriptionParamSerializer = new Serializer<SetChatDescriptionParam>(SetChatDescriptionParam, 'SetChatDescriptionParam', params);

export default SetChatDescriptionParamSerializer;
export { SetChatDescriptionParamSerializer, params as SetChatDescriptionParamSerializerParams };