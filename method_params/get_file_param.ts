class GetFileParam {
    private _fileId: string;

    constructor(params: {
        fileId: string;
    }) {
        this._fileId = params.fileId;
    }

    get fileId(): string {
        return this._fileId;
    }
}

export default GetFileParam;