import PassportElementError from './passport_element_error';

class PassportElementErrorSelfie extends PassportElementError {
    private _source: string;
    private _type: string;
    private _fileHash: string;
    private _message: string;

    constructor(params: {
        source: string;
        type: string;
        fileHash: string;
        message: string;
    }) {
        super();
        this._source = params.source;
        this._type = params.type;
        this._fileHash = params.fileHash;
        this._message = params.message;
    }

    get source(): string {
        return this._source;
    }
    get type(): string {
        return this._type;
    }
    get fileHash(): string {
        return this._fileHash;
    }
    get message(): string {
        return this._message;
    }
}

export default PassportElementErrorSelfie;