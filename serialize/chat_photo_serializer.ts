import { Serializer, ConstructorParams } from './serializer';
import ChatPhoto from '../entities/chat_photo';


let params: ConstructorParams = {
    smallFileId: {
        required: true,
        type: 'string'
    },
    smallFileUniqueId: {
        required: true,
        type: 'string'
    },
    bigFileId: {
        required: true,
        type: 'string'
    },
    bigFileUniqueId: {
        required: true,
        type: 'string'
    }
}

let ChatPhotoSerializer = new Serializer<ChatPhoto>(ChatPhoto, 'ChatPhoto', params);

export default ChatPhotoSerializer;
export { ChatPhotoSerializer, params as ChatPhotoSerializerParams };