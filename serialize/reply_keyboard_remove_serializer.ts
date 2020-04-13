import { Serializer, ConstructorParams } from './serializer';
import ReplyKeyboardRemove from '../entities/reply_keyboard_remove';


let params: ConstructorParams = {
    selective: {
        required: false,
        type: 'boolean'
    }
}

let ReplyKeyboardRemoveSerializer = new Serializer<ReplyKeyboardRemove>(ReplyKeyboardRemove, 'ReplyKeyboardRemove', params);

export default ReplyKeyboardRemoveSerializer;
export { ReplyKeyboardRemoveSerializer, params as ReplyKeyboardRemoveSerializerParams };