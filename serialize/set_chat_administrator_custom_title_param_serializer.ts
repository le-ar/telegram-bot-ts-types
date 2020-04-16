import { Serializer, ConstructorParams } from './serializer';
import SetChatAdministratorCustomTitleParam from '../method_params/set_chat_administrator_custom_title_param';


let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    },
    userId: {
        required: true,
        type: 'number'
    },
    customTitle: {
        required: true,
        type: 'string'
    }
}

let SetChatAdministratorCustomTitleParamSerializer = new Serializer<SetChatAdministratorCustomTitleParam>(SetChatAdministratorCustomTitleParam, 'SetChatAdministratorCustomTitleParam', params);

export default SetChatAdministratorCustomTitleParamSerializer;
export { SetChatAdministratorCustomTitleParamSerializer, params as SetChatAdministratorCustomTitleParamSerializerParams };