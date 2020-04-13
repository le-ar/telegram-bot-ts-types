import InlineQueryResult from './inline_query_result';
import InputMessageContent from './input_message_content';
import InlineKeyboardMarkup from './inline_keyboard_markup';

class InlineQueryResultArticle extends InlineQueryResult {
    private _type: string;
    private _id: string;
    private _title: string;
    private _inputMessageContent: InputMessageContent;
    private _replyMarkup: InlineKeyboardMarkup | null;
    private _url: string | null;
    private _hideUrl: boolean | null;
    private _description: string | null;
    private _thumbUrl: string | null;
    private _thumbWidth: number | null;
    private _thumbHeight: number | null;

    constructor(params: {
        type: string;
        id: string;
        title: string;
        inputMessageContent: InputMessageContent;
        replyMarkup?: InlineKeyboardMarkup | null;
        url?: string | null;
        hideUrl?: boolean | null;
        description?: string | null;
        thumbUrl?: string | null;
        thumbWidth?: number | null;
        thumbHeight?: number | null;
    }) {
        super();
        this._type = params.type;
        this._id = params.id;
        this._title = params.title;
        this._inputMessageContent = params.inputMessageContent;
        if (typeof params.replyMarkup === 'undefined' || params.replyMarkup === null) {
            this._replyMarkup = null;
        } else {
            this._replyMarkup = params.replyMarkup;
        }
        if (typeof params.url === 'undefined' || params.url === null) {
            this._url = null;
        } else {
            this._url = params.url;
        }
        if (typeof params.hideUrl === 'undefined' || params.hideUrl === null) {
            this._hideUrl = null;
        } else {
            this._hideUrl = params.hideUrl;
        }
        if (typeof params.description === 'undefined' || params.description === null) {
            this._description = null;
        } else {
            this._description = params.description;
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
    get inputMessageContent(): InputMessageContent {
        return this._inputMessageContent;
    }
    get replyMarkup(): InlineKeyboardMarkup | null {
        return this._replyMarkup;
    }
    get url(): string | null {
        return this._url;
    }
    get hideUrl(): boolean | null {
        return this._hideUrl;
    }
    get description(): string | null {
        return this._description;
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

export default InlineQueryResultArticle;