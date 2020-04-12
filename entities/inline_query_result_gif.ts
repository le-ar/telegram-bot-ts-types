import InlineKeyboardMarkup from './inline_keyboard_markup';
import InputMessageContent from './input_message_content';

class InlineQueryResultGif {
    private _type: string;
    private _id: string;
    private _gifUrl: string;
    private _gifWidth: number | null;
    private _gifHeight: number | null;
    private _gifDuration: number | null;
    private _thumbUrl: string;
    private _title: string | null;
    private _caption: string | null;
    private _parseMode: string | null;
    private _replyMarkup: InlineKeyboardMarkup | null;
    private _inputMessageContent: InputMessageContent | null;

    constructor(params: {
        type: string;
        id: string;
        gifUrl: string;
        gifWidth?: number | null;
        gifHeight?: number | null;
        gifDuration?: number | null;
        thumbUrl: string;
        title?: string | null;
        caption?: string | null;
        parseMode?: string | null;
        replyMarkup?: InlineKeyboardMarkup | null;
        inputMessageContent?: InputMessageContent | null;
    }) {
        this._type = params.type;
        this._id = params.id;
        this._gifUrl = params.gifUrl;
        if (typeof params.gifWidth === 'undefined' || params.gifWidth === null) {
            this._gifWidth = null;
        } else {
            this._gifWidth = params.gifWidth;
        }
        if (typeof params.gifHeight === 'undefined' || params.gifHeight === null) {
            this._gifHeight = null;
        } else {
            this._gifHeight = params.gifHeight;
        }
        if (typeof params.gifDuration === 'undefined' || params.gifDuration === null) {
            this._gifDuration = null;
        } else {
            this._gifDuration = params.gifDuration;
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
    get gifUrl(): string {
        return this._gifUrl;
    }
    get gifWidth(): number | null {
        return this._gifWidth;
    }
    get gifHeight(): number | null {
        return this._gifHeight;
    }
    get gifDuration(): number | null {
        return this._gifDuration;
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

export default InlineQueryResultGif;