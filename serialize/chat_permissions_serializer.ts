import { Serializer, ConstructorParams } from './serializer';
import ChatPermissions from '../entities/chat_permissions';


let params: ConstructorParams = {
    canSendMessages: {
        required: false,
        type: 'boolean'
    },
    canSendMediaMessages: {
        required: false,
        type: 'boolean'
    },
    canSendPolls: {
        required: false,
        type: 'boolean'
    },
    canSendOtherMessages: {
        required: false,
        type: 'boolean'
    },
    canAddWebPagePreviews: {
        required: false,
        type: 'boolean'
    },
    canChangeInfo: {
        required: false,
        type: 'boolean'
    },
    canInviteUsers: {
        required: false,
        type: 'boolean'
    },
    canPinMessages: {
        required: false,
        type: 'boolean'
    }
}

let ChatPermissionsSerializer = new Serializer<ChatPermissions>(ChatPermissions, 'ChatPermissions', params);

export default ChatPermissionsSerializer;
export { ChatPermissionsSerializer, params as ChatPermissionsSerializerParams };