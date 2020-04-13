import { Serializer, ConstructorParams } from './serializer';
import PassportElementErrorTranslationFiles from '../entities/passport_element_error_translation_files';


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

let PassportElementErrorTranslationFilesSerializer = new Serializer<PassportElementErrorTranslationFiles>(PassportElementErrorTranslationFiles, 'PassportElementErrorTranslationFiles', params);

export default PassportElementErrorTranslationFilesSerializer;
export { PassportElementErrorTranslationFilesSerializer, params as PassportElementErrorTranslationFilesSerializerParams };