import { Serializer, ConstructorParams } from './serializer';
import RestrictChatMemberParam from '../method_params/restrict_chat_member_param';
import ChatPermissionsSerializer from './chat_permissions_serializer';

let _ChatPermissionsSerializer = ChatPermissionsSerializer;

let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    },
    userId: {
        required: true,
        type: 'number'
    },
    permissions: {
        required: true,
        type: 'ChatPermissions'
    },
    untilDate: {
        required: false,
        type: 'number'
    }
}

let RestrictChatMemberParamSerializer = new Serializer<RestrictChatMemberParam>(RestrictChatMemberParam, 'RestrictChatMemberParam', params);

export default RestrictChatMemberParamSerializer;
export { RestrictChatMemberParamSerializer, params as RestrictChatMemberParamSerializerParams };