import InlineKeyboardMarkup from '../entities/inline_keyboard_markup';

class StopPollParam {
    private _chatId: number | string;
    private _messageId: number;
    private _replyMarkup: InlineKeyboardMarkup | null;

    constructor(params: {
        chatId: number | string;
        messageId: number;
        replyMarkup?: InlineKeyboardMarkup | null;
    }) {
        this._chatId = params.chatId;
        this._messageId = params.messageId;
        if (typeof params.replyMarkup === 'undefined' || params.replyMarkup === null) {
            this._replyMarkup = null;
        } else {
            this._replyMarkup = params.replyMarkup;
        }
    }

    get chatId(): number | string {
        return this._chatId;
    }
    get messageId(): number {
        return this._messageId;
    }
    get replyMarkup(): InlineKeyboardMarkup | null {
        return this._replyMarkup;
    }
}

export default StopPollParam;