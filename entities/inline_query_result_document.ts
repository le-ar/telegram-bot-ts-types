import InlineQueryResult from './inline_query_result';
import InlineKeyboardMarkup from './inline_keyboard_markup';
import InputMessageContent from './input_message_content';

class InlineQueryResultDocument extends InlineQueryResult {
    private _type: string;
    private _id: string;
    private _title: string;
    private _caption: string | null;
    private _parseMode: string | null;
    private _documentUrl: string;
    private _mimeType: string;
    private _description: string | null;
    private _replyMarkup: InlineKeyboardMarkup | null;
    private _inputMessageContent: InputMessageContent | null;
    private _thumbUrl: string | null;
    private _thumbWidth: number | null;
    private _thumbHeight: number | null;

    constructor(params: {
        type: string;
        id: string;
        title: string;
        caption?: string | null;
        parseMode?: string | null;
        documentUrl: string;
        mimeType: string;
        description?: string | null;
        replyMarkup?: InlineKeyboardMarkup | null;
        inputMessageContent?: InputMessageContent | null;
        thumbUrl?: string | null;
        thumbWidth?: number | null;
        thumbHeight?: number | null;
    }) {
        super();
        this._type = params.type;
        this._id = params.id;
        this._title = params.title;
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
        this._documentUrl = params.documentUrl;
        this._mimeType = params.mimeType;
        if (typeof params.description === 'undefined' || params.description === null) {
            this._description = null;
        } else {
            this._description = params.description;
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
        if (typeof params.thumbUrl === 'undefined' || params.thumbUrl === null) {
            this._thumbUrl = null;
        } else {
            this._thumbUrl = params.thumbUrl;
        }
        if (typeof params.thumbWidth === 'undefined' || params.thumbWidth === null) {
            this._thumbWidth = null;
        } else {
            this._thumbWidth = params.thumbWidth;
        }
        if (typeof params.thumbHeight === 'undefined' || params.thumbHeight === null) {
            this._thumbHeight = null;
        } else {
            this._thumbHeight = params.thumbHeight;
        }
    }

    get type(): string {
        return this._type;
    }
    get id(): string {
        return this._id;
    }
    get title(): string {
        return this._title;
    }
    get caption(): string | null {
        return this._caption;
    }
    get parseMode(): string | null {
        return this._parseMode;
    }
    get documentUrl(): string {
        return this._documentUrl;
    }
    get mimeType(): string {
        return this._mimeType;
    }
    get description(): string | null {
        return this._description;
    }
    get replyMarkup(): InlineKeyboardMarkup | null {
        return this._replyMarkup;
    }
    get inputMessageContent(): InputMessageContent | null {
        return this._inputMessageContent;
    }
    get thumbUrl(): string | null {
        return this._thumbUrl;
    }
    get thumbWidth(): number | null {
        return this._thumbWidth;
    }
    get thumbHeight(): number | null {
        return this._thumbHeight;
    }
}

export default InlineQueryResultDocument;