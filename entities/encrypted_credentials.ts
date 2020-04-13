class EncryptedCredentials {
    private _data: string;
    private _hash: string;
    private _secret: string;

    constructor(params: {
        data: string;
        hash: string;
        secret: string;
    }) {
        this._data = params.data;
        this._hash = params.hash;
        this._secret = params.secret;
    }

    get data(): string {
        return this._data;
    }
    get hash(): string {
        return this._hash;
    }
    get secret(): string {
        return this._secret;
    }
}

export default EncryptedCredentials;