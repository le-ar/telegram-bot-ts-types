import { Serializer, ConstructorParams } from './serializer';
import InlineQuery from '../entities/inline_query';
import UserSerializer from './user_serializer';
import LocationSerializer from './location_serializer';

let _UserSerializer = UserSerializer;
let _LocationSerializer = LocationSerializer;

let params: ConstructorParams = {
    id: {
        required: true,
        type: 'string'
    },
    from: {
        required: true,
        type: 'User'
    },
    location: {
        required: false,
        type: 'Location'
    },
    query: {
        required: true,
        type: 'string'
    },
    offset: {
        required: true,
        type: 'string'
    }
}

let InlineQuerySerializer = new Serializer<InlineQuery>(InlineQuery, 'InlineQuery', params);

export default InlineQuerySerializer;
export { InlineQuerySerializer, params as InlineQuerySerializerParams };