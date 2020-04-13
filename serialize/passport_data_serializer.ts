import { Serializer, ConstructorParams } from './serializer';
import PassportData from '../entities/passport_data';
import EncryptedPassportElementSerializer from './encrypted_passport_element_serializer';
import EncryptedCredentialsSerializer from './encrypted_credentials_serializer';

let _EncryptedPassportElementSerializer = EncryptedPassportElementSerializer;
let _EncryptedCredentialsSerializer = EncryptedCredentialsSerializer;

let params: ConstructorParams = {
    data: {
        required: true,
        type: 'EncryptedPassportElement[]'
    },
    credentials: {
        required: true,
        type: 'EncryptedCredentials'
    }
}

let PassportDataSerializer = new Serializer<PassportData>(PassportData, 'PassportData', params);

export default PassportDataSerializer;
export { PassportDataSerializer, params as PassportDataSerializerParams };