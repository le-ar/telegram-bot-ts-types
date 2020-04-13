import { Serializer, ConstructorParams } from './serializer';
import PassportElementErrorReverseSide from '../entities/passport_element_error_reverse_side';


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

let PassportElementErrorReverseSideSerializer = new Serializer<PassportElementErrorReverseSide>(PassportElementErrorReverseSide, 'PassportElementErrorReverseSide', params);

export default PassportElementErrorReverseSideSerializer;
export { PassportElementErrorReverseSideSerializer, params as PassportElementErrorReverseSideSerializerParams };