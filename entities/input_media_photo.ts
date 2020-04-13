class InputMediaPhoto {
    private _type: string;
    private _media: string;
    private _caption: string | null;
    private _parseMode: string | null;

    constructor(params: {
        type: string;
        media: string;
        caption?: string | null;
        parseMode?: string | null;
    }) {
        this._type = params.type;
        this._media = params.media;
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
    get caption(): string | null {
        return this._caption;
    }
    get parseMode(): string | null {
        return this._parseMode;
    }
}

export default InputMediaPhoto;