import { Serializer, ConstructorParams } from './serializer';
import KeyboardButtonPollType from '../entities/keyboard_button_poll_type';


let params: ConstructorParams = {
    type: {
        required: false,
        type: 'string'
    }
}

let KeyboardButtonPollTypeSerializer = new Serializer<KeyboardButtonPollType>(KeyboardButtonPollType, 'KeyboardButtonPollType', params);

export default KeyboardButtonPollTypeSerializer;
export { KeyboardButtonPollTypeSerializer, params as KeyboardButtonPollTypeSerializerParams };