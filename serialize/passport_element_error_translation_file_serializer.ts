import { Serializer, ConstructorParams } from './serializer';
import PassportElementErrorTranslationFile from '../entities/passport_element_error_translation_file';


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

let PassportElementErrorTranslationFileSerializer = new Serializer<PassportElementErrorTranslationFile>(PassportElementErrorTranslationFile, 'PassportElementErrorTranslationFile', params);

export default PassportElementErrorTranslationFileSerializer;
export { PassportElementErrorTranslationFileSerializer, params as PassportElementErrorTranslationFileSerializerParams };