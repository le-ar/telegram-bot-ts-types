import { Serializer, ConstructorParams } from './serializer';
import ChosenInlineResult from '../entities/chosen_inline_result';
import UserSerializer from './user_serializer';
import LocationSerializer from './location_serializer';

let _UserSerializer = UserSerializer;
let _LocationSerializer = LocationSerializer;

let params: ConstructorParams = {
    resultId: {
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
    inlineMessageId: {
        required: false,
        type: 'string'
    },
    query: {
        required: true,
        type: 'string'
    }
}

let ChosenInlineResultSerializer = new Serializer<ChosenInlineResult>(ChosenInlineResult, 'ChosenInlineResult', params);

export default ChosenInlineResultSerializer;
export { ChosenInlineResultSerializer, params as ChosenInlineResultSerializerParams };