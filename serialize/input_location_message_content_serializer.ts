import { Serializer, ConstructorParams } from './serializer';
import InputLocationMessageContent from '../entities/input_location_message_content';


let params: ConstructorParams = {
    latitude: {
        required: true,
        type: 'number'
    },
    longitude: {
        required: true,
        type: 'number'
    },
    livePeriod: {
        required: false,
        type: 'number'
    }
}

let InputLocationMessageContentSerializer = new Serializer<InputLocationMessageContent>(InputLocationMessageContent, 'InputLocationMessageContent', params);

export default InputLocationMessageContentSerializer;
export { InputLocationMessageContentSerializer, params as InputLocationMessageContentSerializerParams };