import { Serializer, ConstructorParams } from './serializer';
import PhotoSize from '../entities/photo_size';


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
    fileSize: {
        required: false,
        type: 'number'
    }
}

let PhotoSizeSerializer = new Serializer<PhotoSize>(PhotoSize, 'PhotoSize', params);

export default PhotoSizeSerializer;
export { PhotoSizeSerializer, params as PhotoSizeSerializerParams };