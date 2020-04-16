import { Serializer, ConstructorParams } from './serializer';
import SetStickerSetThumbParam from '../method_params/set_sticker_set_thumb_param';


let params: ConstructorParams = {
    name: {
        required: true,
        type: 'string'
    },
    userId: {
        required: true,
        type: 'number'
    },
    thumb: {
        required: false,
        type: 'InputFile | string'
    }
}

let SetStickerSetThumbParamSerializer = new Serializer<SetStickerSetThumbParam>(SetStickerSetThumbParam, 'SetStickerSetThumbParam', params);

export default SetStickerSetThumbParamSerializer;
export { SetStickerSetThumbParamSerializer, params as SetStickerSetThumbParamSerializerParams };