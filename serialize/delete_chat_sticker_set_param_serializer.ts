import { Serializer, ConstructorParams } from './serializer';
import DeleteChatStickerSetParam from '../method_params/delete_chat_sticker_set_param';


let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    }
}

let DeleteChatStickerSetParamSerializer = new Serializer<DeleteChatStickerSetParam>(DeleteChatStickerSetParam, 'DeleteChatStickerSetParam', params);

export default DeleteChatStickerSetParamSerializer;
export { DeleteChatStickerSetParamSerializer, params as DeleteChatStickerSetParamSerializerParams };