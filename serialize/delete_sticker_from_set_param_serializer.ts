import { Serializer, ConstructorParams } from './serializer';
import DeleteStickerFromSetParam from '../method_params/delete_sticker_from_set_param';


let params: ConstructorParams = {
    sticker: {
        required: true,
        type: 'string'
    }
}

let DeleteStickerFromSetParamSerializer = new Serializer<DeleteStickerFromSetParam>(DeleteStickerFromSetParam, 'DeleteStickerFromSetParam', params);

export default DeleteStickerFromSetParamSerializer;
export { DeleteStickerFromSetParamSerializer, params as DeleteStickerFromSetParamSerializerParams };