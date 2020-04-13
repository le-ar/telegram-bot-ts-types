import { Serializer, ConstructorParams } from './serializer';
import PassportElementErrorSelfie from '../entities/passport_element_error_selfie';


let params: ConstructorParams = {
    source: {
        required: true,
        type: 'string'
    },
    type: {
        required: true,
        type: 'string'
    },
    fileHash: {
        required: true,
        type: 'string'
    },
    message: {
        required: true,
        type: 'string'
    }
}

let PassportElementErrorSelfieSerializer = new Serializer<PassportElementErrorSelfie>(PassportElementErrorSelfie, 'PassportElementErrorSelfie', params);

export default PassportElementErrorSelfieSerializer;
export { PassportElementErrorSelfieSerializer, params as PassportElementErrorSelfieSerializerParams };