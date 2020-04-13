import PhotoSize from './photo_size';
import MaskPosition from './mask_position';

class Sticker {
    private _fileId: string;
    private _fileUniqueId: string;
    private _width: number;
    private _height: number;
    private _isAnimated: boolean;
    private _thumb: PhotoSize | null;
    private _emoji: string | null;
    private _setName: string | null;
    private _maskPosition: MaskPosition | null;
    private _fileSize: number | null;

    constructor(params: {
        fileId: string;
        fileUniqueId: string;
        width: number;
        height: number;
        isAnimated: boolean;
        thumb?: PhotoSize | null;
        emoji?: string | null;
        setName?: string | null;
        maskPosition?: MaskPosition | null;
        fileSize?: number | null;
    }) {
        this._fileId = params.fileId;
        this._fileUniqueId = params.fileUniqueId;
        this._width = params.width;
        this._height = params.height;
        this._isAnimated = params.isAnimated;
        if (typeof params.thumb === 'undefined' || params.thumb === null) {
            this._thumb = null;
        } else {
            this._thumb = params.thumb;
        }
        if (typeof params.emoji === 'undefined' || params.emoji === null) {
            this._emoji = null;
        } else {
            this._emoji = params.emoji;
        }
        if (typeof params.setName === 'undefined' || params.setName === null) {
            this._setName = null;
        } else {
            this._setName = params.setName;
        }
        if (typeof params.maskPosition === 'undefined' || params.maskPosition === null) {
            this._maskPosition = null;
        } else {
            this._maskPosition = params.maskPosition;
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
    get isAnimated(): boolean {
        return this._isAnimated;
    }
    get thumb(): PhotoSize | null {
        return this._thumb;
    }
    get emoji(): string | null {
        return this._emoji;
    }
    get setName(): string | null {
        return this._setName;
    }
    get maskPosition(): MaskPosition | null {
        return this._maskPosition;
    }
    get fileSize(): number | null {
        return this._fileSize;
    }
}

export default Sticker;