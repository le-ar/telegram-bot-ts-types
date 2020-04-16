import { Serializer, ConstructorParams } from './serializer';
import SetChatStickerSetParam from '../method_params/set_chat_sticker_set_param';


let params: ConstructorParams = {
    chatId: {
        required: true,
        type: 'number | string'
    },
    stickerSetName: {
        required: true,
        type: 'string'
    }
}

let SetChatStickerSetParamSerializer = new Serializer<SetChatStickerSetParam>(SetChatStickerSetParam, 'SetChatStickerSetParam', params);

export default SetChatStickerSetParamSerializer;
export { SetChatStickerSetParamSerializer, params as SetChatStickerSetParamSerializerParams };