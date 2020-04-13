import { Serializer, ConstructorParams } from './serializer';
import ChatMember from '../entities/chat_member';
import UserSerializer from './user_serializer';

let _UserSerializer = UserSerializer;

let params: ConstructorParams = {
    user: {
        required: true,
        type: 'User'
    },
    status: {
        required: true,
        type: 'string'
    },
    customTitle: {
        required: false,
        type: 'string'
    },
    untilDate: {
        required: false,
        type: 'number'
    },
    canBeEdited: {
        required: false,
        type: 'boolean'
    },
    canPostMessages: {
        required: false,
        type: 'boolean'
    },
    canEditMessages: {
        required: false,
        type: 'boolean'
    },
    canDeleteMessages: {
        required: false,
        type: 'boolean'
    },
    canRestrictMembers: {
        required: false,
        type: 'boolean'
    },
    canPromoteMembers: {
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
    },
    isMember: {
        required: false,
        type: 'boolean'
    },
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
    }
}

let ChatMemberSerializer = new Serializer<ChatMember>(ChatMember, 'ChatMember', params);

export default ChatMemberSerializer;
export { ChatMemberSerializer, params as ChatMemberSerializerParams };