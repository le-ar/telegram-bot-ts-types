import InlineQueryResult from './inline_query_result';
import InlineKeyboardMarkup from './inline_keyboard_markup';
import InputMessageContent from './input_message_content';

class InlineQueryResultMpeg4Gif extends InlineQueryResult {
    private _type: string;
    private _id: string;
    private _mpeg4Url: string;
    private _mpeg4Width: number | null;
    private _mpeg4Height: number | null;
    private _mpeg4Duration: number | null;
    private _thumbUrl: string;
    private _title: string | null;
    private _caption: string | null;
    private _parseMode: string | null;
    private _replyMarkup: InlineKeyboardMarkup | null;
    private _inputMessageContent: InputMessageContent | null;

    constructor(params: {
        type: string;
        id: string;
        mpeg4Url: string;
        mpeg4Width?: number | null;
        mpeg4Height?: number | null;
        mpeg4Duration?: number | null;
        thumbUrl: string;
        title?: string | null;
        caption?: string | null;
        parseMode?: string | null;
        replyMarkup?: InlineKeyboardMarkup | null;
        inputMessageContent?: InputMessageContent | null;
    }) {
        super();
        this._type = params.type;
        this._id = params.id;
        this._mpeg4Url = params.mpeg4Url;
        if (typeof params.mpeg4Width === 'undefined' || params.mpeg4Width === null) {
            this._mpeg4Width = null;
        } else {
            this._mpeg4Width = params.mpeg4Width;
        }
        if (typeof params.mpeg4Height === 'undefined' || params.mpeg4Height === null) {
            this._mpeg4Height = null;
        } else {
            this._mpeg4Height = params.mpeg4Height;
        }
        if (typeof params.mpeg4Duration === 'undefined' || params.mpeg4Duration === null) {
            this._mpeg4Duration = null;
        } else {
            this._mpeg4Duration = params.mpeg4Duration;
        }
        this._thumbUrl = params.thumbUrl;
        if (typeof params.title === 'undefined' || params.title === null) {
            this._title = null;
        } else {
            this._title = params.title;
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
        if (typeof params.replyMarkup === 'undefined' || params.replyMarkup === null) {
            this._replyMarkup = null;
        } else {
            this._replyMarkup = params.replyMarkup;
        }
        if (typeof params.inputMessageContent === 'undefined' || params.inputMessageContent === null) {
            this._inputMessageContent = null;
        } else {
            this._inputMessageContent = params.inputMessageContent;
        }
    }

    get type(): string {
        return this._type;
    }
    get id(): string {
        return this._id;
    }
    get mpeg4Url(): string {
        return this._mpeg4Url;
    }
    get mpeg4Width(): number | null {
        return this._mpeg4Width;
    }
    get mpeg4Height(): number | null {
        return this._mpeg4Height;
    }
    get mpeg4Duration(): number | null {
        return this._mpeg4Duration;
    }
    get thumbUrl(): string {
        return this._thumbUrl;
    }
    get title(): string | null {
        return this._title;
    }
    get caption(): string | null {
        return this._caption;
    }
    get parseMode(): string | null {
        return this._parseMode;
    }
    get replyMarkup(): InlineKeyboardMarkup | null {
        return this._replyMarkup;
    }
    get inputMessageContent(): InputMessageContent | null {
        return this._inputMessageContent;
    }
}

export default InlineQueryResultMpeg4Gif;