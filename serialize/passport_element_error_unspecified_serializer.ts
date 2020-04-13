import { Serializer, ConstructorParams } from './serializer';
import PassportElementErrorUnspecified from '../entities/passport_element_error_unspecified';


let params: ConstructorParams = {
    source: {
        required: true,
        type: 'string'
    },
    type: {
        required: true,
        type: 'string'
    },
    elementHash: {
        required: true,
        type: 'string'
    },
    message: {
        required: true,
        type: 'string'
    }
}

let PassportElementErrorUnspecifiedSerializer = new Serializer<PassportElementErrorUnspecified>(PassportElementErrorUnspecified, 'PassportElementErrorUnspecified', params);

export default PassportElementErrorUnspecifiedSerializer;
export { PassportElementErrorUnspecifiedSerializer, params as PassportElementErrorUnspecifiedSerializerParams };