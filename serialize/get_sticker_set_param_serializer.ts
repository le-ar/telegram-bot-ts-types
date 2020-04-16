import { Serializer, ConstructorParams } from './serializer';
import GetStickerSetParam from '../method_params/get_sticker_set_param';


let params: ConstructorParams = {
    name: {
        required: true,
        type: 'string'
    }
}

let GetStickerSetParamSerializer = new Serializer<GetStickerSetParam>(GetStickerSetParam, 'GetStickerSetParam', params);

export default GetStickerSetParamSerializer;
export { GetStickerSetParamSerializer, params as GetStickerSetParamSerializerParams };