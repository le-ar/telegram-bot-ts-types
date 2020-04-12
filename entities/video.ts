import PhotoSize from './photo_size';

class Video {
    private _fileId: string;
    private _fileUniqueId: string;
    private _width: number;
    private _height: number;
    private _duration: number;
    private _thumb: PhotoSize | null;
    private _mimeType: string | null;
    private _fileSize: number | null;

    constructor(params: {
        fileId: string;
        fileUniqueId: string;
        width: number;
        height: number;
        duration: number;
        thumb?: PhotoSize | null;
        mimeType?: string | null;
        fileSize?: number | null;
    }) {
        this._fileId = params.fileId;
        this._fileUniqueId = params.fileUniqueId;
        this._width = params.width;
        this._height = params.height;
        this._duration = params.duration;
        if (typeof params.thumb === 'undefined' || params.thumb === null) {
            this._thumb = null;
        } else {
            this._thumb = params.thumb;
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
    get width(): number {
        return this._width;
    }
    get height(): number {
        return this._height;
    }
    get duration(): number {
        return this._duration;
    }
    get thumb(): PhotoSize | null {
        return this._thumb;
    }
    get mimeType(): string | null {
        return this._mimeType;
    }
    get fileSize(): number | null {
        return this._fileSize;
    }
}

export default Video;