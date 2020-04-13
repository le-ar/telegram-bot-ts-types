class PassportFile {
    private _fileId: string;
    private _fileUniqueId: string;
    private _fileSize: number;
    private _fileDate: number;

    constructor(params: {
        fileId: string;
        fileUniqueId: string;
        fileSize: number;
        fileDate: number;
    }) {
        this._fileId = params.fileId;
        this._fileUniqueId = params.fileUniqueId;
        this._fileSize = params.fileSize;
        this._fileDate = params.fileDate;
    }

    get fileId(): string {
        return this._fileId;
    }
    get fileUniqueId(): string {
        return this._fileUniqueId;
    }
    get fileSize(): number {
        return this._fileSize;
    }
    get fileDate(): number {
        return this._fileDate;
    }
}

export default PassportFile;