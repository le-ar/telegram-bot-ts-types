import InlineKeyboardMarkup from '../entities/inline_keyboard_markup';

class SendGameParam {
    private _chatId: number;
    private _gameShortName: string;
    private _disableNotification: boolean | null;
    private _replyToMessageId: number | null;
    private _replyMarkup: InlineKeyboardMarkup | null;

    constructor(params: {
        chatId: number;
        gameShortName: string;
        disableNotification?: boolean | null;
        replyToMessageId?: number | null;
        replyMarkup?: InlineKeyboardMarkup | null;
    }) {
        this._chatId = params.chatId;
        this._gameShortName = params.gameShortName;
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

    get chatId(): number {
        return this._chatId;
    }
    get gameShortName(): string {
        return this._gameShortName;
    }
    get disableNotification(): boolean | null {
        return this._disableNotification;
    }
    get replyToMessageId(): number | null {
        return this._replyToMessageId;
    }
    get replyMarkup(): InlineKeyboardMarkup | null {
        return this._replyMarkup;
    }
}

export default SendGameParam;