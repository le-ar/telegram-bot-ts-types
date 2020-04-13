import { Serializer, ConstructorParams } from './serializer';
import PassportElementErrorFrontSide from '../entities/passport_element_error_front_side';


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

let PassportElementErrorFrontSideSerializer = new Serializer<PassportElementErrorFrontSide>(PassportElementErrorFrontSide, 'PassportElementErrorFrontSide', params);

export default PassportElementErrorFrontSideSerializer;
export { PassportElementErrorFrontSideSerializer, params as PassportElementErrorFrontSideSerializerParams };