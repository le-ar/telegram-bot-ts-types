import InlineQueryResult from './inline_query_result';
import InlineKeyboardMarkup from './inline_keyboard_markup';
import InputMessageContent from './input_message_content';

class InlineQueryResultAudio extends InlineQueryResult {
    private _type: string;
    private _id: string;
    private _audioUrl: string;
    private _title: string;
    private _caption: string | null;
    private _parseMode: string | null;
    private _performer: string | null;
    private _audioDuration: number | null;
    private _replyMarkup: InlineKeyboardMarkup | null;
    private _inputMessageContent: InputMessageContent | null;

    constructor(params: {
        type: string;
        id: string;
        audioUrl: string;
        title: string;
        caption?: string | null;
        parseMode?: string | null;
        performer?: string | null;
        audioDuration?: number | null;
        replyMarkup?: InlineKeyboardMarkup | null;
        inputMessageContent?: InputMessageContent | null;
    }) {
        super();
        this._type = params.type;
        this._id = params.id;
        this._audioUrl = params.audioUrl;
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
        if (typeof params.performer === 'undefined' || params.performer === null) {
            this._performer = null;
        } else {
            this._performer = params.performer;
        }
        if (typeof params.audioDuration === 'undefined' || params.audioDuration === null) {
            this._audioDuration = null;
        } else {
            this._audioDuration = params.audioDuration;
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
    get audioUrl(): string {
        return this._audioUrl;
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
    get performer(): string | null {
        return this._performer;
    }
    get audioDuration(): number | null {
        return this._audioDuration;
    }
    get replyMarkup(): InlineKeyboardMarkup | null {
        return this._replyMarkup;
    }
    get inputMessageContent(): InputMessageContent | null {
        return this._inputMessageContent;
    }
}

export default InlineQueryResultAudio;