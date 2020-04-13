import EncryptedPassportElement from './encrypted_passport_element';
import EncryptedCredentials from './encrypted_credentials';

class PassportData {
    private _data: EncryptedPassportElement[];
    private _credentials: EncryptedCredentials;

    constructor(params: {
        data: EncryptedPassportElement[];
        credentials: EncryptedCredentials;
    }) {
        this._data = params.data;
        this._credentials = params.credentials;
    }

    get data(): EncryptedPassportElement[] {
        return this._data;
    }
    get credentials(): EncryptedCredentials {
        return this._credentials;
    }
}

export default PassportData;