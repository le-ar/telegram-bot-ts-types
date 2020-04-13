import InlineQueryResult from './inline_query_result';
import InlineKeyboardMarkup from './inline_keyboard_markup';
import InputMessageContent from './input_message_content';

class InlineQueryResultVideo extends InlineQueryResult {
    private _type: string;
    private _id: string;
    private _videoUrl: string;
    private _mimeType: string;
    private _thumbUrl: string;
    private _title: string;
    private _caption: string | null;
    private _parseMode: string | null;
    private _videoWidth: number | null;
    private _videoHeight: number | null;
    private _videoDuration: number | null;
    private _description: string | null;
    private _replyMarkup: InlineKeyboardMarkup | null;
    private _inputMessageContent: InputMessageContent | null;

    constructor(params: {
        type: string;
        id: string;
        videoUrl: string;
        mimeType: string;
        thumbUrl: string;
        title: string;
        caption?: string | null;
        parseMode?: string | null;
        videoWidth?: number | null;
        videoHeight?: number | null;
        videoDuration?: number | null;
        description?: string | null;
        replyMarkup?: InlineKeyboardMarkup | null;
        inputMessageContent?: InputMessageContent | null;
    }) {
        super();
        this._type = params.type;
        this._id = params.id;
        this._videoUrl = params.videoUrl;
        this._mimeType = params.mimeType;
        this._thumbUrl = params.thumbUrl;
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
        if (typeof params.videoWidth === 'undefined' || params.videoWidth === null) {
            this._videoWidth = null;
        } else {
            this._videoWidth = params.videoWidth;
        }
        if (typeof params.videoHeight === 'undefined' || params.videoHeight === null) {
            this._videoHeight = null;
        } else {
            this._videoHeight = params.videoHeight;
        }
        if (typeof params.videoDuration === 'undefined' || params.videoDuration === null) {
            this._videoDuration = null;
        } else {
            this._videoDuration = params.videoDuration;
        }
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
    }

    get type(): string {
        return this._type;
    }
    get id(): string {
        return this._id;
    }
    get videoUrl(): string {
        return this._videoUrl;
    }
    get mimeType(): string {
        return this._mimeType;
    }
    get thumbUrl(): string {
        return this._thumbUrl;
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
    get videoWidth(): number | null {
        return this._videoWidth;
    }
    get videoHeight(): number | null {
        return this._videoHeight;
    }
    get videoDuration(): number | null {
        return this._videoDuration;
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
}

export default InlineQueryResultVideo;