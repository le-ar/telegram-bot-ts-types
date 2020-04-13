class PassportElementErrorUnspecified {
    private _source: string;
    private _type: string;
    private _elementHash: string;
    private _message: string;

    constructor(params: {
        source: string;
        type: string;
        elementHash: string;
        message: string;
    }) {
        this._source = params.source;
        this._type = params.type;
        this._elementHash = params.elementHash;
        this._message = params.message;
    }

    get source(): string {
        return this._source;
    }
    get type(): string {
        return this._type;
    }
    get elementHash(): string {
        return this._elementHash;
    }
    get message(): string {
        return this._message;
    }
}

export default PassportElementErrorUnspecified;