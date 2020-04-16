import { Serializer, ConstructorParams } from './serializer';
import SetChatPermissionsParam from '../method_params/set_chat_permissions_param';
import ChatPermissionsSerializer from './chat_permissions_serializer';

let _ChatPermissionsSerializer = ChatPermissionsSerializer;

let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    },
    permissions: {
        required: true,
        type: 'ChatPermissions'
    }
}

let SetChatPermissionsParamSerializer = new Serializer<SetChatPermissionsParam>(SetChatPermissionsParam, 'SetChatPermissionsParam', params);

export default SetChatPermissionsParamSerializer;
export { SetChatPermissionsParamSerializer, params as SetChatPermissionsParamSerializerParams };