import { Serializer, ConstructorParams } from './serializer';
import Location from '../entities/location';


let params: ConstructorParams = {
    longitude: {
        required: true,
        type: 'number'
    },
    latitude: {
        required: true,
        type: 'number'
    }
}

let LocationSerializer = new Serializer<Location>(Location, 'Location', params);

export default LocationSerializer;
export { LocationSerializer, params as LocationSerializerParams };