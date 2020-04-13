import InputMedia from './input_media';

class InputMediaVideo extends InputMedia {
    private _type: string;
    private _media: string;
    private _thumb: Buffer | string | null;
    private _caption: string | null;
    private _parseMode: string | null;
    private _width: number | null;
    private _height: number | null;
    private _duration: number | null;
    private _supportsStreaming: boolean | null;

    constructor(params: {
        type: string;
        media: string;
        thumb?: Buffer | string | null;
        caption?: string | null;
        parseMode?: string | null;
        width?: number | null;
        height?: number | null;
        duration?: number | null;
        supportsStreaming?: boolean | null;
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
        if (typeof params.width === 'undefined' || params.width === null) {
            this._width = null;
        } else {
            this._width = params.width;
        }
        if (typeof params.height === 'undefined' || params.height === null) {
            this._height = null;
        } else {
            this._height = params.height;
        }
        if (typeof params.duration === 'undefined' || params.duration === null) {
            this._duration = null;
        } else {
            this._duration = params.duration;
        }
        if (typeof params.supportsStreaming === 'undefined' || params.supportsStreaming === null) {
            this._supportsStreaming = null;
        } else {
            this._supportsStreaming = params.supportsStreaming;
        }
    }

    get type(): string {
        return this._type;
    }
    get media(): string {
        return this._media;
    }
    get thumb(): Buffer | string | null {
        return this._thumb;
    }
    get caption(): string | null {
        return this._caption;
    }
    get parseMode(): string | null {
        return this._parseMode;
    }
    get width(): number | null {
        return this._width;
    }
    get height(): number | null {
        return this._height;
    }
    get duration(): number | null {
        return this._duration;
    }
    get supportsStreaming(): boolean | null {
        return this._supportsStreaming;
    }
}

export default InputMediaVideo;