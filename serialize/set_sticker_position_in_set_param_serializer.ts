import { Serializer, ConstructorParams } from './serializer';
import SetStickerPositionInSetParam from '../method_params/set_sticker_position_in_set_param';


let params: ConstructorParams = {
    sticker: {
        required: true,
        type: 'string'
    },
    position: {
        required: true,
        type: 'number'
    }
}

let SetStickerPositionInSetParamSerializer = new Serializer<SetStickerPositionInSetParam>(SetStickerPositionInSetParam, 'SetStickerPositionInSetParam', params);

export default SetStickerPositionInSetParamSerializer;
export { SetStickerPositionInSetParamSerializer, params as SetStickerPositionInSetParamSerializerParams };