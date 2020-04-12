import PhotoSize from './photo_size';

class VideoNote {
    private _fileId: string;
    private _fileUniqueId: string;
    private _length: number;
    private _duration: number;
    private _thumb: PhotoSize | null;
    private _fileSize: number | null;

    constructor(params: {
        fileId: string;
        fileUniqueId: string;
        length: number;
        duration: number;
        thumb?: PhotoSize | null;
        fileSize?: number | null;
    }) {
        this._fileId = params.fileId;
        this._fileUniqueId = params.fileUniqueId;
        this._length = params.length;
        this._duration = params.duration;
        if (typeof params.thumb === 'undefined' || params.thumb === null) {
            this._thumb = null;
        } else {
            this._thumb = params.thumb;
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
    get length(): number {
        return this._length;
    }
    get duration(): number {
        return this._duration;
    }
    get thumb(): PhotoSize | null {
        return this._thumb;
    }
    get fileSize(): number | null {
        return this._fileSize;
    }
}

export default VideoNote;