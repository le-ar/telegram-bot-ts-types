import InlineKeyboardMarkup from './inline_keyboard_markup';
import InputMessageContent from './input_message_content';

class InlineQueryResultPhoto {
    private _type: string;
    private _id: string;
    private _photoUrl: string;
    private _thumbUrl: string;
    private _photoWidth: number | null;
    private _photoHeight: number | null;
    private _title: string | null;
    private _description: string | null;
    private _caption: string | null;
    private _parseMode: string | null;
    private _replyMarkup: InlineKeyboardMarkup | null;
    private _inputMessageContent: InputMessageContent | null;

    constructor(params: {
        type: string;
        id: string;
        photoUrl: string;
        thumbUrl: string;
        photoWidth?: number | null;
        photoHeight?: number | null;
        title?: string | null;
        description?: string | null;
        caption?: string | null;
        parseMode?: string | null;
        replyMarkup?: InlineKeyboardMarkup | null;
        inputMessageContent?: InputMessageContent | null;
    }) {
        this._type = params.type;
        this._id = params.id;
        this._photoUrl = params.photoUrl;
        this._thumbUrl = params.thumbUrl;
        if (typeof params.photoWidth === 'undefined' || params.photoWidth === null) {
            this._photoWidth = null;
        } else {
            this._photoWidth = params.photoWidth;
        }
        if (typeof params.photoHeight === 'undefined' || params.photoHeight === null) {
            this._photoHeight = null;
        } else {
            this._photoHeight = params.photoHeight;
        }
        if (typeof params.title === 'undefined' || params.title === null) {
            this._title = null;
        } else {
            this._title = params.title;
        }
        if (typeof params.description === 'undefined' || params.description === null) {
            this._description = null;
        } else {
            this._description = params.description;
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
    get photoUrl(): string {
        return this._photoUrl;
    }
    get thumbUrl(): string {
        return this._thumbUrl;
    }
    get photoWidth(): number | null {
        return this._photoWidth;
    }
    get photoHeight(): number | null {
        return this._photoHeight;
    }
    get title(): string | null {
        return this._title;
    }
    get description(): string | null {
        return this._description;
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

export default InlineQueryResultPhoto;