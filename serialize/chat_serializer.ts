import { Serializer, ConstructorParams } from './serializer';
import Chat from '../entities/chat';
import ChatPhotoSerializer from './chat_photo_serializer';
import MessageSerializer from './message_serializer';
import ChatPermissionsSerializer from './chat_permissions_serializer';

let _ChatPhotoSerializer = ChatPhotoSerializer;
let _MessageSerializer = MessageSerializer;
let _ChatPermissionsSerializer = ChatPermissionsSerializer;

let params: ConstructorParams = {
    id: {
        required: true,
        type: 'number'
    },
    type: {
        required: true,
        type: 'string'
    },
    title: {
        required: false,
        type: 'string'
    },
    username: {
        required: false,
        type: 'string'
    },
    firstName: {
        required: false,
        type: 'string'
    },
    lastName: {
        required: false,
        type: 'string'
    },
    photo: {
        required: false,
        type: 'ChatPhoto'
    },
    description: {
        required: false,
        type: 'string'
    },
    inviteLink: {
        required: false,
        type: 'string'
    },
    pinnedMessage: {
        required: false,
        type: 'Message'
    },
    permissions: {
        required: false,
        type: 'ChatPermissions'
    },
    slowModeDelay: {
        required: false,
        type: 'number'
    },
    stickerSetName: {
        required: false,
        type: 'string'
    },
    canSetStickerSet: {
        required: false,
        type: 'boolean'
    }
}

let ChatSerializer = new Serializer<Chat>(Chat, 'Chat', params);

export default ChatSerializer;
export { ChatSerializer, params as ChatSerializerParams };