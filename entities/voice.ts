class Voice {
    private _fileId: string;
    private _fileUniqueId: string;
    private _duration: number;
    private _mimeType: string | null;
    private _fileSize: number | null;

    constructor(params: {
        fileId: string;
        fileUniqueId: string;
        duration: number;
        mimeType?: string | null;
        fileSize?: number | null;
    }) {
        this._fileId = params.fileId;
        this._fileUniqueId = params.fileUniqueId;
        this._duration = params.duration;
        if (typeof params.mimeType === 'undefined' || params.mimeType === null) {
            this._mimeType = null;
        } else {
            this._mimeType = params.mimeType;
        }
        if (typeof params.fileSize === 'undefined' || params.fileSize === null) {
            this._fileSize = null;
        } else {
            this._fileSize = params.fileSize;
        }
    }

    get fileId(): string {
        return this._fileId;
    }
    get fileUniqueId(): string {
        return this._fileUniqueId;
    }
    get duration(): number {
        return this._duration;
    }
    get mimeType(): string | null {
        return this._mimeType;
    }
    get fileSize(): number | null {
        return this._fileSize;
    }
}

export default Voice;