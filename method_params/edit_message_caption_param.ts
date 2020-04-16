import InlineKeyboardMarkup from '../entities/inline_keyboard_markup';

class EditMessageCaptionParam {
    private _chatId: number | string | null;
    private _messageId: number | null;
    private _inlineMessageId: string | null;
    private _caption: string | null;
    private _parseMode: string | null;
    private _replyMarkup: InlineKeyboardMarkup | null;

    constructor(params: {
        chatId?: number | string | null;
        messageId?: number | null;
        inlineMessageId?: string | null;
        caption?: string | null;
        parseMode?: string | null;
        replyMarkup?: InlineKeyboardMarkup | null;
    }) {
        if (typeof params.chatId === 'undefined' || params.chatId === null) {
            this._chatId = null;
        } else {
            this._chatId = params.chatId;
        }
        if (typeof params.messageId === 'undefined' || params.messageId === null) {
            this._messageId = null;
        } else {
            this._messageId = params.messageId;
        }
        if (typeof params.inlineMessageId === 'undefined' || params.inlineMessageId === null) {
            this._inlineMessageId = null;
        } else {
            this._inlineMessageId = params.inlineMessageId;
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
        if (typeof params.replyMarkup === 'undefined' || params.replyMarkup === null) {
            this._replyMarkup = null;
        } else {
            this._replyMarkup = params.replyMarkup;
        }
    }

    get chatId(): number | string | null {
        return this._chatId;
    }
    get messageId(): number | null {
        return this._messageId;
    }
    get inlineMessageId(): string | null {
        return this._inlineMessageId;
    }
    get caption(): string | null {
        return this._caption;
    }
    get parseMode(): string | null {
        return this._parseMode;
    }
    get replyMarkup(): InlineKeyboardMarkup | null {
        return this._replyMarkup;
    }
}

export default EditMessageCaptionParam;