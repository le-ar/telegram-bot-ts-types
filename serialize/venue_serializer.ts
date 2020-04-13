import { Serializer, ConstructorParams } from './serializer';
import Venue from '../entities/venue';
import LocationSerializer from './location_serializer';

let _LocationSerializer = LocationSerializer;

let params: ConstructorParams = {
    location: {
        required: true,
        type: 'Location'
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

let VenueSerializer = new Serializer<Venue>(Venue, 'Venue', params);

export default VenueSerializer;
export { VenueSerializer, params as VenueSerializerParams };