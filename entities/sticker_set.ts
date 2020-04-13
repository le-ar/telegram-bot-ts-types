import Sticker from './sticker';
import PhotoSize from './photo_size';

class StickerSet {
    private _name: string;
    private _title: string;
    private _isAnimated: boolean;
    private _containsMasks: boolean;
    private _stickers: Sticker[];
    private _thumb: PhotoSize | null;

    constructor(params: {
        name: string;
        title: string;
        isAnimated: boolean;
        containsMasks: boolean;
        stickers: Sticker[];
        thumb?: PhotoSize | null;
    }) {
        this._name = params.name;
        this._title = params.title;
        this._isAnimated = params.isAnimated;
        this._containsMasks = params.containsMasks;
        this._stickers = params.stickers;
        if (typeof params.thumb === 'undefined' || params.thumb === null) {
            this._thumb = null;
        } else {
            this._thumb = params.thumb;
        }
    }

    get name(): string {
        return this._name;
    }
    get title(): string {
        return this._title;
    }
    get isAnimated(): boolean {
        return this._isAnimated;
    }
    get containsMasks(): boolean {
        return this._containsMasks;
    }
    get stickers(): Sticker[] {
        return this._stickers;
    }
    get thumb(): PhotoSize | null {
        return this._thumb;
    }
}

export default StickerSet;