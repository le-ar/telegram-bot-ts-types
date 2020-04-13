import PhotoSize from './photo_size';

class Document {
    private _fileId: string;
    private _fileUniqueId: string;
    private _thumb: PhotoSize | null;
    private _fileName: string | null;
    private _mimeType: string | null;
    private _fileSize: number | null;

    constructor(params: {
        fileId: string;
        fileUniqueId: string;
        thumb?: PhotoSize | null;
        fileName?: string | null;
        mimeType?: string | null;
        fileSize?: number | null;
    }) {
        this._fileId = params.fileId;
        this._fileUniqueId = params.fileUniqueId;
        if (typeof params.thumb === 'undefined' || params.thumb === null) {
            this._thumb = null;
        } else {
            this._thumb = params.thumb;
        }
        if (typeof params.fileName === 'undefined' || params.fileName === null) {
            this._fileName = null;
        } else {
            this._fileName = params.fileName;
        }
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
    get thumb(): PhotoSize | null {
        return this._thumb;
    }
    get fileName(): string | null {
        return this._fileName;
    }
    get mimeType(): string | null {
        return this._mimeType;
    }
    get fileSize(): number | null {
        return this._fileSize;
    }
}

export default Document;