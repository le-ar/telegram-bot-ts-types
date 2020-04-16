import InputFile from '../entities/input_file';
import InlineKeyboardMarkup from '../entities/inline_keyboard_markup';
import ReplyKeyboardMarkup from '../entities/reply_keyboard_markup';
import ReplyKeyboardRemove from '../entities/reply_keyboard_remove';
import ForceReply from '../entities/force_reply';

class SendAnimationParam {
    private _chatId: number | string;
    private _animation: InputFile | string;
    private _duration: number | null;
    private _width: number | null;
    private _height: number | null;
    private _thumb: InputFile | string | null;
    private _caption: string | null;
    private _parseMode: string | null;
    private _disableNotification: boolean | null;
    private _replyToMessageId: number | null;
    private _replyMarkup: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply | null;

    constructor(params: {
        chatId: number | string;
        animation: InputFile | string;
        duration?: number | null;
        width?: number | null;
        height?: number | null;
        thumb?: InputFile | string | null;
        caption?: string | null;
        parseMode?: string | null;
        disableNotification?: boolean | null;
        replyToMessageId?: number | null;
        replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply | null;
    }) {
        this._chatId = params.chatId;
        this._animation = params.animation;
        if (typeof params.duration === 'undefined' || params.duration === null) {
            this._duration = null;
        } else {
            this._duration = params.duration;
        }
        if (typeof params.width === 'undefined' || params.width === null) {
            this._width = null;
        } else {
            this._width = params.width;
        }
        if (typeof params.height === 'undefined' || params.height === null) {
            this._height = null;
        } else {
            this._height = params.height;
        }
        if (typeof params.thumb === 'undefined' || params.thumb === null) {
            this._thumb = null;
        } else {
            this._thumb = params.thumb;
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
    get animation(): InputFile | string {
        return this._animation;
    }
    get duration(): number | null {
        return this._duration;
    }
    get width(): number | null {
        return this._width;
    }
    get height(): number | null {
        return this._height;
    }
    get thumb(): InputFile | string | null {
        return this._thumb;
    }
    get caption(): string | null {
        return this._caption;
    }
    get parseMode(): string | null {
        return this._parseMode;
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

export default SendAnimationParam;