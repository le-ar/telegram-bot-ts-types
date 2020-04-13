import { Serializer, ConstructorParams } from './serializer';
import Animation from '../entities/animation';
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
    width: {
        required: true,
        type: 'number'
    },
    height: {
        required: true,
        type: 'number'
    },
    duration: {
        required: true,
        type: 'number'
    },
    thumb: {
        required: false,
        type: 'PhotoSize'
    },
    fileName: {
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
    }
}

let AnimationSerializer = new Serializer<Animation>(Animation, 'Animation', params);

export default AnimationSerializer;
export { AnimationSerializer, params as AnimationSerializerParams };