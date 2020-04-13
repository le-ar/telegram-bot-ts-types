import { Serializer, ConstructorParams } from './serializer';
import EncryptedPassportElement from '../entities/encrypted_passport_element';
import PassportFileSerializer from './passport_file_serializer';

let _PassportFileSerializer = PassportFileSerializer;

let params: ConstructorParams = {
    type: {
        required: true,
        type: 'string'
    },
    data: {
        required: false,
        type: 'string'
    },
    phoneNumber: {
        required: false,
        type: 'string'
    },
    email: {
        required: false,
        type: 'string'
    },
    files: {
        required: false,
        type: 'PassportFile[]'
    },
    frontSide: {
        required: false,
        type: 'PassportFile'
    },
    reverseSide: {
        required: false,
        type: 'PassportFile'
    },
    selfie: {
        required: false,
        type: 'PassportFile'
    },
    translation: {
        required: false,
        type: 'PassportFile[]'
    },
    hash: {
        required: true,
        type: 'string'
    }
}

let EncryptedPassportElementSerializer = new Serializer<EncryptedPassportElement>(EncryptedPassportElement, 'EncryptedPassportElement', params);

export default EncryptedPassportElementSerializer;
export { EncryptedPassportElementSerializer, params as EncryptedPassportElementSerializerParams };