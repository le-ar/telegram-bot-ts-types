class PhotoSize {
    private _fileId: string;
    private _fileUniqueId: string;
    private _width: number;
    private _height: number;
    private _fileSize: number | null;

    constructor(params: {
        fileId: string;
        fileUniqueId: string;
        width: number;
        height: number;
        fileSize?: number | null;
    }) {
        this._fileId = params.fileId;
        this._fileUniqueId = params.fileUniqueId;
        this._width = params.width;
        this._height = params.height;
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
    get width(): number {
        return this._width;
    }
    get height(): number {
        return this._height;
    }
    get fileSize(): number | null {
        return this._fileSize;
    }
}

export default PhotoSize;