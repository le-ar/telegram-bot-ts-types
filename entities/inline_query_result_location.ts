import InlineQueryResult from './inline_query_result';
import InlineKeyboardMarkup from './inline_keyboard_markup';
import InputMessageContent from './input_message_content';

class InlineQueryResultLocation extends InlineQueryResult {
    private _type: string;
    private _id: string;
    private _latitude: number;
    private _longitude: number;
    private _title: string;
    private _livePeriod: number | null;
    private _replyMarkup: InlineKeyboardMarkup | null;
    private _inputMessageContent: InputMessageContent | null;
    private _thumbUrl: string | null;
    private _thumbWidth: number | null;
    private _thumbHeight: number | null;

    constructor(params: {
        type: string;
        id: string;
        latitude: number;
        longitude: number;
        title: string;
        livePeriod?: number | null;
        replyMarkup?: InlineKeyboardMarkup | null;
        inputMessageContent?: InputMessageContent | null;
        thumbUrl?: string | null;
        thumbWidth?: number | null;
        thumbHeight?: number | null;
    }) {
        super();
        this._type = params.type;
        this._id = params.id;
        this._latitude = params.latitude;
        this._longitude = params.longitude;
        this._title = params.title;
        if (typeof params.livePeriod === 'undefined' || params.livePeriod === null) {
            this._livePeriod = null;
        } else {
            this._livePeriod = params.livePeriod;
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
    get latitude(): number {
        return this._latitude;
    }
    get longitude(): number {
        return this._longitude;
    }
    get title(): string {
        return this._title;
    }
    get livePeriod(): number | null {
        return this._livePeriod;
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

export default InlineQueryResultLocation;