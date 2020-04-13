class PassportElementErrorFiles {
    private _source: string;
    private _type: string;
    private _fileHashes: string[];
    private _message: string;

    constructor(params: {
        source: string;
        type: string;
        fileHashes: string[];
        message: string;
    }) {
        this._source = params.source;
        this._type = params.type;
        this._fileHashes = params.fileHashes;
        this._message = params.message;
    }

    get source(): string {
        return this._source;
    }
    get type(): string {
        return this._type;
    }
    get fileHashes(): string[] {
        return this._fileHashes;
    }
    get message(): string {
        return this._message;
    }
}

export default PassportElementErrorFiles;