import { Serializer, ConstructorParams } from './serializer';
import EncryptedCredentials from '../entities/encrypted_credentials';


let params: ConstructorParams = {
    data: {
        required: true,
        type: 'string'
    },
    hash: {
        required: true,
        type: 'string'
    },
    secret: {
        required: true,
        type: 'string'
    }
}

let EncryptedCredentialsSerializer = new Serializer<EncryptedCredentials>(EncryptedCredentials, 'EncryptedCredentials', params);

export default EncryptedCredentialsSerializer;
export { EncryptedCredentialsSerializer, params as EncryptedCredentialsSerializerParams };