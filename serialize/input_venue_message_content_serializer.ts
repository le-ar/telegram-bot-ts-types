import { Serializer, ConstructorParams } from './serializer';
import InputVenueMessageContent from '../entities/input_venue_message_content';


let params: ConstructorParams = {
    latitude: {
        required: true,
        type: 'number'
    },
    longitude: {
        required: true,
        type: 'number'
    },
    title: {
        required: true,
        type: 'string'
    },
    address: {
        required: true,
        type: 'string'
    },
    foursquareId: {
        required: false,
        type: 'string'
    },
    foursquareType: {
        required: false,
        type: 'string'
    }
}

let InputVenueMessageContentSerializer = new Serializer<InputVenueMessageContent>(InputVenueMessageContent, 'InputVenueMessageContent', params);

export default InputVenueMessageContentSerializer;
export { InputVenueMessageContentSerializer, params as InputVenueMessageContentSerializerParams };