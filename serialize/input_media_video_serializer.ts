import { Serializer, ConstructorParams } from './serializer';
import InputMediaVideo from '../entities/input_media_video';


let params: ConstructorParams = {
    type: {
        required: true,
        type: 'string'
    },
    media: {
        required: true,
        type: 'string'
    },
    thumb: {
        required: false,
        type: 'InputFile | string'
    },
    caption: {
        required: false,
        type: 'string'
    },
    parseMode: {
        required: false,
        type: 'string'
    },
    width: {
        required: false,
        type: 'number'
    },
    height: {
        required: false,
        type: 'number'
    },
    duration: {
        required: false,
        type: 'number'
    },
    supportsStreaming: {
        required: false,
        type: 'boolean'
    }
}

let InputMediaVideoSerializer = new Serializer<InputMediaVideo>(InputMediaVideo, 'InputMediaVideo', params);

export default InputMediaVideoSerializer;
export { InputMediaVideoSerializer, params as InputMediaVideoSerializerParams };