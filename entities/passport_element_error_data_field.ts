import PassportElementError from './passport_element_error';

class PassportElementErrorDataField extends PassportElementError {
    private _source: string;
    private _type: string;
    private _fieldName: string;
    private _dataHash: string;
    private _message: string;

    constructor(params: {
        source: string;
        type: string;
        fieldName: string;
        dataHash: string;
        message: string;
    }) {
        super();
        this._source = params.source;
        this._type = params.type;
        this._fieldName = params.fieldName;
        this._dataHash = params.dataHash;
        this._message = params.message;
    }

    get source(): string {
        return this._source;
    }
    get type(): string {
        return this._type;
    }
    get fieldName(): string {
        return this._fieldName;
    }
    get dataHash(): string {
        return this._dataHash;
    }
    get message(): string {
        return this._message;
    }
}

export default PassportElementErrorDataField;