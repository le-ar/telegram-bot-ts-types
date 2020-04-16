import { Serializer, ConstructorParams } from './serializer';
import InputMediaAudio from '../entities/input_media_audio';


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
    duration: {
        required: false,
        type: 'number'
    },
    performer: {
        required: false,
        type: 'string'
    },
    title: {
        required: false,
        type: 'string'
    }
}

let InputMediaAudioSerializer = new Serializer<InputMediaAudio>(InputMediaAudio, 'InputMediaAudio', params);

export default InputMediaAudioSerializer;
export { InputMediaAudioSerializer, params as InputMediaAudioSerializerParams };