import InlineKeyboardMarkup from '../entities/inline_keyboard_markup';
import ReplyKeyboardMarkup from '../entities/reply_keyboard_markup';
import ReplyKeyboardRemove from '../entities/reply_keyboard_remove';
import ForceReply from '../entities/force_reply';

class SendDiceParam {
    private _chatId: number | string;
    private _disableNotification: boolean | null;
    private _replyToMessageId: number | null;
    private _replyMarkup: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply | null;

    constructor(params: {
        chatId: number | string;
        disableNotification?: boolean | null;
        replyToMessageId?: number | null;
        replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply | null;
    }) {
        this._chatId = params.chatId;
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

export default SendDiceParam;