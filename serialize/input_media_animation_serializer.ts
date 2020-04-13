import { Serializer, ConstructorParams } from './serializer';
import InputMediaAnimation from '../entities/input_media_animation';


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
        type: 'Buffer | string'
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
    }
}

let InputMediaAnimationSerializer = new Serializer<InputMediaAnimation>(InputMediaAnimation, 'InputMediaAnimation', params);

export default InputMediaAnimationSerializer;
export { InputMediaAnimationSerializer, params as InputMediaAnimationSerializerParams };