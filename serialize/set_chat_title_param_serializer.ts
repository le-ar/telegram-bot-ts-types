import { Serializer, ConstructorParams } from './serializer';
import SetChatTitleParam from '../method_params/set_chat_title_param';


let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    },
    title: {
        required: true,
        type: 'string'
    }
}

let SetChatTitleParamSerializer = new Serializer<SetChatTitleParam>(SetChatTitleParam, 'SetChatTitleParam', params);

export default SetChatTitleParamSerializer;
export { SetChatTitleParamSerializer, params as SetChatTitleParamSerializerParams };