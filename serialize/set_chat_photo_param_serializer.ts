import { Serializer, ConstructorParams } from './serializer';
import SetChatPhotoParam from '../method_params/set_chat_photo_param';


let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    },
    photo: {
        required: true,
        type: 'InputFile'
    }
}

let SetChatPhotoParamSerializer = new Serializer<SetChatPhotoParam>(SetChatPhotoParam, 'SetChatPhotoParam', params);

export default SetChatPhotoParamSerializer;
export { SetChatPhotoParamSerializer, params as SetChatPhotoParamSerializerParams };