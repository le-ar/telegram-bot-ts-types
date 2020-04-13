import { Serializer, ConstructorParams } from './serializer';
import Sticker from '../entities/sticker';
import PhotoSizeSerializer from './photo_size_serializer';
import MaskPositionSerializer from './mask_position_serializer';

let _PhotoSizeSerializer = PhotoSizeSerializer;
let _MaskPositionSerializer = MaskPositionSerializer;

let params: ConstructorParams = {
    fileId: {
        required: true,
        type: 'string'
    },
    fileUniqueId: {
        required: true,
        type: 'string'
    },
    width: {
        required: true,
        type: 'number'
    },
    height: {
        required: true,
        type: 'number'
    },
    isAnimated: {
        required: true,
        type: 'boolean'
    },
    thumb: {
        required: false,
        type: 'PhotoSize'
    },
    emoji: {
        required: false,
        type: 'string'
    },
    setName: {
        required: false,
        type: 'string'
    },
    maskPosition: {
        required: false,
        type: 'MaskPosition'
    },
    fileSize: {
        required: false,
        type: 'number'
    }
}

let StickerSerializer = new Serializer<Sticker>(Sticker, 'Sticker', params);

export default StickerSerializer;
export { StickerSerializer, params as StickerSerializerParams };