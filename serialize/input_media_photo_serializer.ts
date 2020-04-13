import { Serializer, ConstructorParams } from './serializer';
import InputMediaPhoto from '../entities/input_media_photo';


let params: ConstructorParams = {
    type: {
        required: true,
        type: 'string'
    },
    media: {
        required: true,
        type: 'string'
    },
    caption: {
        required: false,
        type: 'string'
    },
    parseMode: {
        required: false,
        type: 'string'
    }
}

let InputMediaPhotoSerializer = new Serializer<InputMediaPhoto>(InputMediaPhoto, 'InputMediaPhoto', params);

export default InputMediaPhotoSerializer;
export { InputMediaPhotoSerializer, params as InputMediaPhotoSerializerParams };