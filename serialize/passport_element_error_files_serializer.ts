import { Serializer, ConstructorParams } from './serializer';
import PassportElementErrorFiles from '../entities/passport_element_error_files';


let params: ConstructorParams = {
    source: {
        required: true,
        type: 'string'
    },
    type: {
        required: true,
        type: 'string'
    },
    fileHashes: {
        required: true,
        type: 'string[]'
    },
    message: {
        required: true,
        type: 'string'
    }
}

let PassportElementErrorFilesSerializer = new Serializer<PassportElementErrorFiles>(PassportElementErrorFiles, 'PassportElementErrorFiles', params);

export default PassportElementErrorFilesSerializer;
export { PassportElementErrorFilesSerializer, params as PassportElementErrorFilesSerializerParams };