import { Serializer, ConstructorParams } from './serializer';
import AddStickerToSetParam from '../method_params/add_sticker_to_set_param';
import MaskPositionSerializer from './mask_position_serializer';

let _MaskPositionSerializer = MaskPositionSerializer;

let params: ConstructorParams = {
    userId: {
        required: true,
        type: 'number'
    },
    name: {
        required: true,
        type: 'string'
    },
    pngSticker: {
        required: true,
        type: 'InputFile | string'
    },
    tgsSticker: {
        required: false,
        type: 'InputFile'
    },
    emojis: {
        required: true,
        type: 'string'
    },
    maskPosition: {
        required: false,
        type: 'MaskPosition'
    }
}

let AddStickerToSetParamSerializer = new Serializer<AddStickerToSetParam>(AddStickerToSetParam, 'AddStickerToSetParam', params);

export default AddStickerToSetParamSerializer;
export { AddStickerToSetParamSerializer, params as AddStickerToSetParamSerializerParams };