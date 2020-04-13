import PhotoSize from './photo_size';

class Audio {
    private _fileId: string;
    private _fileUniqueId: string;
    private _duration: number;
    private _performer: string | null;
    private _title: string | null;
    private _mimeType: string | null;
    private _fileSize: number | null;
    private _thumb: PhotoSize | null;

    constructor(params: {
        fileId: string;
        fileUniqueId: string;
        duration: number;
        performer?: string | null;
        title?: string | null;
        mimeType?: string | null;
        fileSize?: number | null;
        thumb?: PhotoSize | null;
    }) {
        this._fileId = params.fileId;
        this._fileUniqueId = params.fileUniqueId;
        this._duration = params.duration;
        if (typeof params.performer === 'undefined' || params.performer === null) {
            this._performer = null;
        } else {
            this._performer = params.performer;
        }
        if (typeof params.title === 'undefined' || params.title === null) {
            this._title = null;
        } else {
            this._title = params.title;
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
        if (typeof params.thumb === 'undefined' || params.thumb === null) {
            this._thumb = null;
        } else {
            this._thumb = params.thumb;
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
    get performer(): string | null {
        return this._performer;
    }
    get title(): string | null {
        return this._title;
    }
    get mimeType(): string | null {
        return this._mimeType;
    }
    get fileSize(): number | null {
        return this._fileSize;
    }
    get thumb(): PhotoSize | null {
        return this._thumb;
    }
}

export default Audio;