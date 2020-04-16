import InputMedia from './input_media';
import InputFile from './input_file';

class InputMediaDocument extends InputMedia {
    private _type: string;
    private _media: string;
    private _thumb: InputFile | string | null;
    private _caption: string | null;
    private _parseMode: string | null;

    constructor(params: {
        type: string;
        media: string;
        thumb?: InputFile | string | null;
        caption?: string | null;
        parseMode?: string | null;
    }) {
        super();
        this._type = params.type;
        this._media = params.media;
        if (typeof params.thumb === 'undefined' || params.thumb === null) {
            this._thumb = null;
        } else {
            this._thumb = params.thumb;
        }
        if (typeof params.caption === 'undefined' || params.caption === null) {
            this._caption = null;
        } else {
            this._caption = params.caption;
        }
        if (typeof params.parseMode === 'undefined' || params.parseMode === null) {
            this._parseMode = null;
        } else {
            this._parseMode = params.parseMode;
        }
    }

    get type(): string {
        return this._type;
    }
    get media(): string {
        return this._media;
    }
    get thumb(): InputFile | string | null {
        return this._thumb;
    }
    get caption(): string | null {
        return this._caption;
    }
    get parseMode(): string | null {
        return this._parseMode;
    }
}

export default InputMediaDocument;