import InlineKeyboardMarkup from '../entities/inline_keyboard_markup';
import ReplyKeyboardMarkup from '../entities/reply_keyboard_markup';
import ReplyKeyboardRemove from '../entities/reply_keyboard_remove';
import ForceReply from '../entities/force_reply';

class SendContactParam {
    private _chatId: number | string;
    private _phoneNumber: string;
    private _firstName: string;
    private _lastName: string | null;
    private _vcard: string | null;
    private _disableNotification: boolean | null;
    private _replyToMessageId: number | null;
    private _replyMarkup: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply | null;

    constructor(params: {
        chatId: number | string;
        phoneNumber: string;
        firstName: string;
        lastName?: string | null;
        vcard?: string | null;
        disableNotification?: boolean | null;
        replyToMessageId?: number | null;
        replyMarkup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply | null;
    }) {
        this._chatId = params.chatId;
        this._phoneNumber = params.phoneNumber;
        this._firstName = params.firstName;
        if (typeof params.lastName === 'undefined' || params.lastName === null) {
            this._lastName = null;
        } else {
            this._lastName = params.lastName;
        }
        if (typeof params.vcard === 'undefined' || params.vcard === null) {
            this._vcard = null;
        } else {
            this._vcard = params.vcard;
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
    get phoneNumber(): string {
        return this._phoneNumber;
    }
    get firstName(): string {
        return this._firstName;
    }
    get lastName(): string | null {
        return this._lastName;
    }
    get vcard(): string | null {
        return this._vcard;
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

export default SendContactParam;