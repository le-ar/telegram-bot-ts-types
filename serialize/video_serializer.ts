import { Serializer, ConstructorParams } from './serializer';
import Video from '../entities/video';
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
    mimeType: {
        required: false,
        type: 'string'
    },
    fileSize: {
        required: false,
        type: 'number'
    }
}

let VideoSerializer = new Serializer<Video>(Video, 'Video', params);

export default VideoSerializer;
export { VideoSerializer, params as VideoSerializerParams };