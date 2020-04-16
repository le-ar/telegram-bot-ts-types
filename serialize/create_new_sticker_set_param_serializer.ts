import { Serializer, ConstructorParams } from './serializer';
import CreateNewStickerSetParam from '../method_params/create_new_sticker_set_param';
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
    title: {
        required: true,
        type: 'string'
    },
    pngSticker: {
        required: false,
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
    containsMasks: {
        required: false,
        type: 'boolean'
    },
    maskPosition: {
        required: false,
        type: 'MaskPosition'
    }
}

let CreateNewStickerSetParamSerializer = new Serializer<CreateNewStickerSetParam>(CreateNewStickerSetParam, 'CreateNewStickerSetParam', params);

export default CreateNewStickerSetParamSerializer;
export { CreateNewStickerSetParamSerializer, params as CreateNewStickerSetParamSerializerParams };