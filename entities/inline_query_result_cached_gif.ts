import InlineQueryResult from './inline_query_result';
import InlineKeyboardMarkup from './inline_keyboard_markup';
import InputMessageContent from './input_message_content';

class InlineQueryResultCachedGif extends InlineQueryResult {
    private _type: string;
    private _id: string;
    private _gifFileId: string;
    private _title: string | null;
    private _caption: string | null;
    private _parseMode: string | null;
    private _replyMarkup: InlineKeyboardMarkup | null;
    private _inputMessageContent: InputMessageContent | null;

    constructor(params: {
        type: string;
        id: string;
        gifFileId: string;
        title?: string | null;
        caption?: string | null;
        parseMode?: string | null;
        replyMarkup?: InlineKeyboardMarkup | null;
        inputMessageContent?: InputMessageContent | null;
    }) {
        super();
        this._type = params.type;
        this._id = params.id;
        this._gifFileId = params.gifFileId;
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
    get gifFileId(): string {
        return this._gifFileId;
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

export default InlineQueryResultCachedGif;