import { Serializer, ConstructorParams } from './serializer';
import InputContactMessageContent from '../entities/input_contact_message_content';


let params: ConstructorParams = {
    phoneNumber: {
        required: true,
        type: 'string'
    },
    firstName: {
        required: true,
        type: 'string'
    },
    lastName: {
        required: false,
        type: 'string'
    },
    vcard: {
        required: false,
        type: 'string'
    }
}

let InputContactMessageContentSerializer = new Serializer<InputContactMessageContent>(InputContactMessageContent, 'InputContactMessageContent', params);

export default InputContactMessageContentSerializer;
export { InputContactMessageContentSerializer, params as InputContactMessageContentSerializerParams };