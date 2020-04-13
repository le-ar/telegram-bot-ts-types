class File {
    private _fileId: string;
    private _fileUniqueId: string;
    private _fileSize: number | null;
    private _filePath: string | null;

    constructor(params: {
        fileId: string;
        fileUniqueId: string;
        fileSize?: number | null;
        filePath?: string | null;
    }) {
        this._fileId = params.fileId;
        this._fileUniqueId = params.fileUniqueId;
        if (typeof params.fileSize === 'undefined' || params.fileSize === null) {
            this._fileSize = null;
        } else {
            this._fileSize = params.fileSize;
        }
        if (typeof params.filePath === 'undefined' || params.filePath === null) {
            this._filePath = null;
        } else {
            this._filePath = params.filePath;
        }
    }

    get fileId(): string {
        return this._fileId;
    }
    get fileUniqueId(): string {
        return this._fileUniqueId;
    }
    get fileSize(): number | null {
        return this._fileSize;
    }
    get filePath(): string | null {
        return this._filePath;
    }
}

export default File;