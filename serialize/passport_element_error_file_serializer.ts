import { Serializer, ConstructorParams } from './serializer';
import PassportElementErrorFile from '../entities/passport_element_error_file';


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

let PassportElementErrorFileSerializer = new Serializer<PassportElementErrorFile>(PassportElementErrorFile, 'PassportElementErrorFile', params);

export default PassportElementErrorFileSerializer;
export { PassportElementErrorFileSerializer, params as PassportElementErrorFileSerializerParams };