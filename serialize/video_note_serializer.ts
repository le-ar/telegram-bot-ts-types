import { Serializer, ConstructorParams } from './serializer';
import VideoNote from '../entities/video_note';
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
    length: {
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
    fileSize: {
        required: false,
        type: 'number'
    }
}

let VideoNoteSerializer = new Serializer<VideoNote>(VideoNote, 'VideoNote', params);

export default VideoNoteSerializer;
export { VideoNoteSerializer, params as VideoNoteSerializerParams };