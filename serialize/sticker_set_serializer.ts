import { Serializer, ConstructorParams } from './serializer';
import StickerSet from '../entities/sticker_set';
import StickerSerializer from './sticker_serializer';
import PhotoSizeSerializer from './photo_size_serializer';

let _StickerSerializer = StickerSerializer;
let _PhotoSizeSerializer = PhotoSizeSerializer;

let params: ConstructorParams = {
    name: {
        required: true,
        type: 'string'
    },
    title: {
        required: true,
        type: 'string'
    },
    isAnimated: {
        required: true,
        type: 'boolean'
    },
    containsMasks: {
        required: true,
        type: 'boolean'
    },
    stickers: {
        required: true,
        type: 'Sticker[]'
    },
    thumb: {
        required: false,
        type: 'PhotoSize'
    }
}

let StickerSetSerializer = new Serializer<StickerSet>(StickerSet, 'StickerSet', params);

export default StickerSetSerializer;
export { StickerSetSerializer, params as StickerSetSerializerParams };