import InlineKeyboardMarkup from '../entities/inline_keyboard_markup';
import ReplyKeyboardMarkup from '../entities/reply_keyboard_markup';
import ReplyKeyboardRemove from '../entities/reply_keyboard_remove';
import ForceReply from '../entities/force_reply';

class SendPollParam {
    private _chatId: number | string;
    private _question: string;
    private _options: string[];
    private _isAnonymous: boolean | null;
    private _type: string | null;
    private _allowsMultipleAnswers: boolean | null;
    private _correctOptionId: number | null;
    private _isClosed: boolean | null;
    private _disableNotification: boolean | null;
    private _replyToMessageId: number | null;
    private _replyMarkup: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply | null;

    constructor(params: {
        chatId: number | string;
        question: string;
        options: string[];
        isAnonymous?: boolean | null;
        type?: string | null;
        allowsMultipleAnswers?: boolean | null;
        correctOptionId?: number | null;
        isClosed?: boolean | null;
        disableNotification?: boolean | null;
        replyToMessageId?: number | null;
        replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply | null;
    }) {
        this._chatId = params.chatId;
        this._question = params.question;
        this._options = params.options;
        if (typeof params.isAnonymous === 'undefined' || params.isAnonymous === null) {
            this._isAnonymous = null;
        } else {
            this._isAnonymous = params.isAnonymous;
        }
        if (typeof params.type === 'undefined' || params.type === null) {
            this._type = null;
        } else {
            this._type = params.type;
        }
        if (typeof params.allowsMultipleAnswers === 'undefined' || params.allowsMultipleAnswers === null) {
            this._allowsMultipleAnswers = null;
        } else {
            this._allowsMultipleAnswers = params.allowsMultipleAnswers;
        }
        if (typeof params.correctOptionId === 'undefined' || params.correctOptionId === null) {
            this._correctOptionId = null;
        } else {
            this._correctOptionId = params.correctOptionId;
        }
        if (typeof params.isClosed === 'undefined' || params.isClosed === null) {
            this._isClosed = null;
        } else {
            this._isClosed = params.isClosed;
        }
        if (typeof params.disableNotification === 'undefined' || params.disableNotification === null) {
            this._disableNotification = null;
        } else {
            this._disableNotification = params.disableNotification;
        }
        if (typeof params.replyToMessageId === 'undefined' || params.replyToMessageId === null) {
            this._replyToMessageId = null;
        } else {
            this._replyToMessageId = params.replyToMessageId;
        }
        if (typeof params.replyMarkup === 'undefined' || params.replyMarkup === null) {
            this._replyMarkup = null;
        } else {
            this._replyMarkup = params.replyMarkup;
        }
    }

    get chatId(): number | string {
        return this._chatId;
    }
    get question(): string {
        return this._question;
    }
    get options(): string[] {
        return this._options;
    }
    get isAnonymous(): boolean | null {
        return this._isAnonymous;
    }
    get type(): string | null {
        return this._type;
    }
    get allowsMultipleAnswers(): boolean | null {
        return this._allowsMultipleAnswers;
    }
    get correctOptionId(): number | null {
        return this._correctOptionId;
    }
    get isClosed(): boolean | null {
        return this._isClosed;
    }
    get disableNotification(): boolean | null {
        return this._disableNotification;
    }
    get replyToMessageId(): number | null {
        return this._replyToMessageId;
    }
    get replyMarkup(): InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply | null {
        return this._replyMarkup;
    }
}

export default SendPollParam;