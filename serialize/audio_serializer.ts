import { Serializer, ConstructorParams } from './serializer';
import Audio from '../entities/audio';
import PhotoSizeSerializer from './photo_size_serializer';

let _PhotoSizeSerializer = PhotoSizeSerializer;

let params: ConstructorParams = {
    fileId: {
        required: true,
        type: 'string'
    },
    fileUniqueId: {
        required: true,
        type: 'string'
    },
    duration: {
        required: true,
        type: 'number'
    },
    performer: {
        required: false,
        type: 'string'
    },
    title: {
        required: false,
        type: 'string'
    },
    mimeType: {
        required: false,
        type: 'string'
    },
    fileSize: {
        required: false,
        type: 'number'
    },
    thumb: {
        required: false,
        type: 'PhotoSize'
    }
}

let AudioSerializer = new Serializer<Audio>(Audio, 'Audio', params);

export default AudioSerializer;
export { AudioSerializer, params as AudioSerializerParams };