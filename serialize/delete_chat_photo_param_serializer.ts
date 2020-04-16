import { Serializer, ConstructorParams } from './serializer';
import DeleteChatPhotoParam from '../method_params/delete_chat_photo_param';


let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    }
}

let DeleteChatPhotoParamSerializer = new Serializer<DeleteChatPhotoParam>(DeleteChatPhotoParam, 'DeleteChatPhotoParam', params);

export default DeleteChatPhotoParamSerializer;
export { DeleteChatPhotoParamSerializer, params as DeleteChatPhotoParamSerializerParams };