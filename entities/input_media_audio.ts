import InputFile from './input_file';

class InputMediaAudio {
    private _type: string;
    private _media: string;
    private _thumb: InputFile | null;
    private _caption: string | null;
    private _parseMode: string | null;
    private _duration: number | null;
    private _performer: string | null;
    private _title: string | null;

    constructor(params: {
        type: string;
        media: string;
        thumb?: InputFile | null;
        caption?: string | null;
        parseMode?: string | null;
        duration?: number | null;
        performer?: string | null;
        title?: string | null;
    }) {
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
        if (typeof params.duration === 'undefined' || params.duration === null) {
            this._duration = null;
        } else {
            this._duration = params.duration;
        }
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
    }

    get type(): string {
        return this._type;
    }
    get media(): string {
        return this._media;
    }
    get thumb(): InputFile | null {
        return this._thumb;
    }
    get caption(): string | null {
        return this._caption;
    }
    get parseMode(): string | null {
        return this._parseMode;
    }
    get duration(): number | null {
        return this._duration;
    }
    get performer(): string | null {
        return this._performer;
    }
    get title(): string | null {
        return this._title;
    }
}

export default InputMediaAudio;