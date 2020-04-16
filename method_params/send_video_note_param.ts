import InputFile from '../entities/input_file';
import InlineKeyboardMarkup from '../entities/inline_keyboard_markup';
import ReplyKeyboardMarkup from '../entities/reply_keyboard_markup';
import ReplyKeyboardRemove from '../entities/reply_keyboard_remove';
import ForceReply from '../entities/force_reply';

class SendVideoNoteParam {
    private _chatId: number | string;
    private _videoNote: InputFile | string;
    private _duration: number | null;
    private _length: number | null;
    private _thumb: InputFile | string | null;
    private _disableNotification: boolean | null;
    private _replyToMessageId: number | null;
    private _replyMarkup: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply | null;

    constructor(params: {
        chatId: number | string;
        videoNote: InputFile | string;
        duration?: number | null;
        length?: number | null;
        thumb?: InputFile | string | null;
        disableNotification?: boolean | null;
        replyToMessageId?: number | null;
        replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply | null;
    }) {
        this._chatId = params.chatId;
        this._videoNote = params.videoNote;
        if (typeof params.duration === 'undefined' || params.duration === null) {
            this._duration = null;
        } else {
            this._duration = params.duration;
        }
        if (typeof params.length === 'undefined' || params.length === null) {
            this._length = null;
        } else {
            this._length = params.length;
        }
        if (typeof params.thumb === 'undefined' || params.thumb === null) {
            this._thumb = null;
        } else {
            this._thumb = params.thumb;
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
    get videoNote(): InputFile | string {
        return this._videoNote;
    }
    get duration(): number | null {
        return this._duration;
    }
    get length(): number | null {
        return this._length;
    }
    get thumb(): InputFile | string | null {
        return this._thumb;
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

export default SendVideoNoteParam;