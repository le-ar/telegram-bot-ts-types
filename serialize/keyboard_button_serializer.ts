import { Serializer, ConstructorParams } from './serializer';
import KeyboardButton from '../entities/keyboard_button';
import KeyboardButtonPollTypeSerializer from './keyboard_button_poll_type_serializer';

let _KeyboardButtonPollTypeSerializer = KeyboardButtonPollTypeSerializer;

let params: ConstructorParams = {
    text: {
        required: true,
        type: 'string'
    },
    requestContact: {
        required: false,
        type: 'boolean'
    },
    requestLocation: {
        required: false,
        type: 'boolean'
    },
    requestPoll: {
        required: false,
        type: 'KeyboardButtonPollType'
    }
}

let KeyboardButtonSerializer = new Serializer<KeyboardButton>(KeyboardButton, 'KeyboardButton', params);

export default KeyboardButtonSerializer;
export { KeyboardButtonSerializer, params as KeyboardButtonSerializerParams };